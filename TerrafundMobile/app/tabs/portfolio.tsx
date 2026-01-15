import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MyInvestmentPortfolio() {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark" edges={['top']}>
            <View className="flex-1 relative">
                {/* TopAppBar */}
                <View className="flex-row items-center p-4 pb-2 justify-between bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10">
                    <TouchableOpacity
                        className="size-12 items-center justify-center rounded-xl hover:bg-black/5 dark:hover:bg-white/5"
                        onPress={() => router.back()}
                    >
                        <MaterialIcons name="arrow-back-ios" size={20} color="#0f172a" style={{ marginLeft: 6 }} />
                    </TouchableOpacity>
                    <Text className="text-slate-900 dark:text-white text-lg font-bold leading-tight flex-1 text-center font-display">My Portfolio</Text>
                    <View className="w-12 items-end justify-center">
                        <TouchableOpacity className="size-12 items-center justify-center rounded-xl hover:bg-black/5 dark:hover:bg-white/5">
                            <MaterialIcons name="notifications" size={24} color="#0f172a" />
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView contentContainerClassName="px-4 pb-24">
                    {/* Portfolio Stats */}
                    <View className="flex-row gap-4 py-4">
                        <View className="flex-1 min-w-[150px] gap-2 rounded-xl p-6 bg-primary/10 border border-primary/20">
                            <Text className="text-slate-600 dark:text-slate-400 text-sm font-medium font-display">Total Invested</Text>
                            <Text className="text-slate-900 dark:text-white text-2xl font-extrabold leading-tight font-display">$12,450.00</Text>
                            <View className="flex-row items-center gap-1">
                                <MaterialIcons name="trending-up" size={14} color="#11d421" />
                                <Text className="text-primary text-sm font-bold font-display">+5.2%</Text>
                            </View>
                        </View>
                        <View className="flex-1 min-w-[150px] gap-2 rounded-xl p-6 bg-primary/10 border border-primary/20">
                            <Text className="text-slate-600 dark:text-slate-400 text-sm font-medium font-display">Overall ROI</Text>
                            <Text className="text-slate-900 dark:text-white text-2xl font-extrabold leading-tight font-display">+14.2%</Text>
                            <View className="flex-row items-center gap-1">
                                <MaterialIcons name="trending-up" size={14} color="#11d421" />
                                <Text className="text-primary text-sm font-bold font-display">+1.5%</Text>
                            </View>
                        </View>
                    </View>

                    {/* Chips / Filters */}
                    <View className="py-4">
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8 }}>
                            <TouchableOpacity className="h-9 items-center justify-center rounded-full bg-primary px-5 shadow-sm">
                                <Text className="text-white text-sm font-bold font-display">All Crops</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="h-9 items-center justify-center rounded-full bg-white dark:bg-white/10 px-5 border border-slate-200 dark:border-white/10">
                                <Text className="text-slate-700 dark:text-slate-300 text-sm font-medium font-display">Active</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="h-9 items-center justify-center rounded-full bg-white dark:bg-white/10 px-5 border border-slate-200 dark:border-white/10">
                                <Text className="text-slate-700 dark:text-slate-300 text-sm font-medium font-display">Harvested</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="h-9 items-center justify-center rounded-full bg-white dark:bg-white/10 px-5 border border-slate-200 dark:border-white/10">
                                <Text className="text-slate-700 dark:text-slate-300 text-sm font-medium font-display">Pending</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>

                    {/* SectionHeader */}
                    <View className="flex-row justify-between items-center py-4">
                        <Text className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight font-display">Active Investments</Text>
                        <TouchableOpacity>
                            <Text className="text-primary text-sm font-bold font-display">View History</Text>
                        </TouchableOpacity>
                    </View>

                    {/* List Items with Progress Bars */}
                    <View className="space-y-4 gap-4">
                        {/* Investment Card 1 */}
                        <View className="bg-white dark:bg-white/5 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-white/10">
                            <View className="flex-row gap-4 justify-between items-start mb-4">
                                <View className="flex-row items-start gap-4 flex-1">
                                    <View className="items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12">
                                        <MaterialIcons name="psychology" size={24} color="#11d421" />
                                    </View>
                                    <View className="flex-1 justify-center">
                                        <Text className="text-slate-900 dark:text-white text-base font-bold font-display">Green Valley Cocoa</Text>
                                        <Text className="text-slate-500 dark:text-slate-400 text-xs font-medium font-display">Ghana, West Region</Text>
                                    </View>
                                </View>
                                <View className="items-end">
                                    <Text className="text-primary text-base font-bold font-display">+12.5% ROI</Text>
                                    <Text className="text-slate-400 dark:text-slate-500 text-xs font-display">$2,500 invested</Text>
                                </View>
                            </View>
                            <View className="gap-2">
                                <View className="flex-row justify-between">
                                    <Text className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-display">Crop Growth</Text>
                                    <Text className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-display">65%</Text>
                                </View>
                                <View className="h-2 w-full bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden">
                                    <View className="h-full bg-primary rounded-full w-[65%]" />
                                </View>
                                <View className="flex-row items-center gap-1.5 pt-1">
                                    <MaterialIcons name="calendar-today" size={14} color="#11d421" />
                                    <Text className="text-slate-500 dark:text-slate-400 text-xs font-medium font-display">Expected Harvest: Oct 24, 2024</Text>
                                </View>
                            </View>
                        </View>

                        {/* Investment Card 2 */}
                        <View className="bg-white dark:bg-white/5 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-white/10">
                            <View className="flex-row gap-4 justify-between items-start mb-4">
                                <View className="flex-row items-start gap-4 flex-1">
                                    <View className="items-center justify-center rounded-lg bg-amber-100 shrink-0 size-12">
                                        <MaterialIcons name="agriculture" size={24} color="#d97706" />
                                    </View>
                                    <View className="flex-1 justify-center">
                                        <Text className="text-slate-900 dark:text-white text-base font-bold font-display">Sunrise Corn Ridge</Text>
                                        <Text className="text-slate-500 dark:text-slate-400 text-xs font-medium font-display">Kenya, Nakuru</Text>
                                    </View>
                                </View>
                                <View className="items-end">
                                    <Text className="text-primary text-base font-bold font-display">+8.2% ROI</Text>
                                    <Text className="text-slate-400 dark:text-slate-500 text-xs font-display">$1,200 invested</Text>
                                </View>
                            </View>
                            <View className="gap-2">
                                <View className="flex-row justify-between">
                                    <Text className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-display">Crop Growth</Text>
                                    <Text className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-display">30%</Text>
                                </View>
                                <View className="h-2 w-full bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden">
                                    <View className="h-full bg-primary rounded-full w-[30%]" />
                                </View>
                                <View className="flex-row items-center gap-1.5 pt-1">
                                    <MaterialIcons name="calendar-today" size={14} color="#11d421" />
                                    <Text className="text-slate-500 dark:text-slate-400 text-xs font-medium font-display">Expected Harvest: Jan 12, 2025</Text>
                                </View>
                            </View>
                        </View>

                        {/* Investment Card 3 */}
                        <View className="bg-white dark:bg-white/5 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-white/10">
                            <View className="flex-row gap-4 justify-between items-start mb-4">
                                <View className="flex-row items-start gap-4 flex-1">
                                    <View className="items-center justify-center rounded-lg bg-green-100 shrink-0 size-12">
                                        <MaterialIcons name="eco" size={24} color="#15803d" />
                                    </View>
                                    <View className="flex-1 justify-center">
                                        <Text className="text-slate-900 dark:text-white text-base font-bold font-display">Blue Nile Rice</Text>
                                        <Text className="text-slate-500 dark:text-slate-400 text-xs font-medium font-display">Egypt, Delta</Text>
                                    </View>
                                </View>
                                <View className="items-end">
                                    <Text className="text-primary text-base font-bold font-display">+18.0% ROI</Text>
                                    <Text className="text-slate-400 dark:text-slate-500 text-xs font-display">$5,000 invested</Text>
                                </View>
                            </View>
                            <View className="gap-2">
                                <View className="flex-row justify-between">
                                    <Text className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-display">Crop Growth</Text>
                                    <Text className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-display">92%</Text>
                                </View>
                                <View className="h-2 w-full bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden">
                                    <View className="h-full bg-primary rounded-full w-[92%]" />
                                </View>
                                <View className="flex-row items-center gap-1.5 pt-1">
                                    <MaterialIcons name="verified" size={14} color="#11d421" />
                                    <Text className="text-slate-500 dark:text-slate-400 text-xs font-medium font-display">Harvesting Soon: Sept 15, 2024</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Floating Action Button Style Section */}
                    <View className="py-10 items-center">
                        <TouchableOpacity
                            className="bg-primary flex-row items-center justify-center py-4 px-8 rounded-full shadow-lg shadow-primary/30 gap-2"
                            onPress={() => router.push("/tabs/explore")}
                        >
                            <MaterialIcons name="add" size={24} color="white" />
                            <Text className="text-white font-bold font-display">Invest in New Farm</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
