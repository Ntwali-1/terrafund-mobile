import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function LandOwnerDashboard() {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark" edges={['top']}>
            <View className="flex-1 relative">
                {/* TopAppBar */}
                <View className="flex-row items-center p-4 pb-2 justify-between bg-background-light dark:bg-background-dark z-10">
                    <View className="size-12 shrink-0 items-center justify-center">
                        <View className="size-10 rounded-full border-2 border-primary overflow-hidden">
                            <Image
                                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtW9Y7Cne6f0kprwzqDmBBbednODDmVF84_MC1xNyU5xwNHwk2QugWQ7_FThsLE2xGiYQygc7RubMz07gX5E39hzEVwAbS8vCraEdbvLFr40XYtUT8DiuNW8jZGKSMCQR2lE7aYk7nOyZpDnvaXx0hQ-v8S082pfEhhCRe_lttFUmE8eaRbUq7RUim0aAS9Nkz87hmZlJgFKfLw9CoAzeOb29A5-JjYusMeLIyOA05YJNGDwNw3VkWPvbYWLN9tVvfk3jINrgUJSPO" }}
                                className="w-full h-full"
                            />
                        </View>
                    </View>
                    <View className="flex-1 px-3">
                        <Text className="text-xs text-[#4c9a52] font-medium mb-1 font-display">Welcome back</Text>
                        <Text className="text-[#0d1b0f] dark:text-white text-lg font-bold leading-tight font-display">Kofi Mensah 👋</Text>
                    </View>
                    <View className="w-12 items-end justify-center">
                        <TouchableOpacity className="relative items-center justify-center rounded-xl size-10 bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
                            <MaterialIcons name="notifications" size={24} color="#0d1b0f" />
                            <View className="absolute top-2 right-2 size-2 rounded-full bg-red-500" />
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView contentContainerClassName="pb-24">
                    {/* Metric Grid (2x2) */}
                    <View className="p-4 flex-row flex-wrap gap-4">
                        {/* Total Land Posted */}
                        <View className="flex-1 min-w-[150px] flex-col gap-2 rounded-xl p-4 border border-[#cfe7d1] dark:border-green-900 bg-white dark:bg-gray-800 shadow-sm">
                            <View className="bg-primary/10 dark:bg-primary/20 p-2 rounded-lg self-start">
                                <MaterialIcons name="local-florist" size={24} color="#11d421" />
                            </View>
                            <View>
                                <Text className="text-[#4c9a52] text-xs font-semibold uppercase tracking-wider font-display">Total Land</Text>
                                <Text className="text-[#0d1b0f] dark:text-white text-xl font-extrabold leading-tight font-display">12.5 Ha</Text>
                            </View>
                        </View>
                        {/* Active Investors */}
                        <View className="flex-1 min-w-[150px] flex-col gap-2 rounded-xl p-4 border border-[#cfe7d1] dark:border-green-900 bg-white dark:bg-gray-800 shadow-sm">
                            <View className="bg-primary/10 dark:bg-primary/20 p-2 rounded-lg self-start">
                                <MaterialIcons name="groups" size={24} color="#11d421" />
                            </View>
                            <View>
                                <Text className="text-[#4c9a52] text-xs font-semibold uppercase tracking-wider font-display">Investors</Text>
                                <Text className="text-[#0d1b0f] dark:text-white text-xl font-extrabold leading-tight font-display">4 Active</Text>
                            </View>
                        </View>
                        {/* Ongoing Farms */}
                        <View className="flex-1 min-w-[150px] flex-col gap-2 rounded-xl p-4 border border-[#cfe7d1] dark:border-green-900 bg-white dark:bg-gray-800 shadow-sm">
                            <View className="bg-primary/10 dark:bg-primary/20 p-2 rounded-lg self-start">
                                <MaterialIcons name="agriculture" size={24} color="#11d421" />
                            </View>
                            <View>
                                <Text className="text-[#4c9a52] text-xs font-semibold uppercase tracking-wider font-display">Ongoing</Text>
                                <Text className="text-[#0d1b0f] dark:text-white text-xl font-extrabold leading-tight font-display">3 Projects</Text>
                            </View>
                        </View>
                        {/* Total Earnings */}
                        <View className="flex-1 min-w-[150px] flex-col gap-2 rounded-xl p-4 border border-[#cfe7d1] dark:border-green-900 bg-white dark:bg-gray-800 shadow-sm">
                            <View className="bg-primary/10 dark:bg-primary/20 p-2 rounded-lg self-start">
                                <MaterialIcons name="payments" size={24} color="#11d421" />
                            </View>
                            <View>
                                <Text className="text-[#4c9a52] text-xs font-semibold uppercase tracking-wider font-display">Earnings</Text>
                                <Text className="text-[#0d1b0f] dark:text-white text-xl font-extrabold leading-tight font-display">$2,450.00</Text>
                            </View>
                        </View>
                    </View>

                    {/* SingleButton CTA */}
                    <View className="px-4 py-2">
                        <TouchableOpacity
                            className="w-full flex-row items-center justify-center rounded-xl h-16 px-6 bg-primary gap-3 shadow-lg shadow-primary/20"
                            onPress={() => router.push("/post-land-details")}
                        >
                            <MaterialIcons name="add-circle" size={28} color="white" />
                            <View>
                                <Text className="text-white text-lg font-bold leading-none font-display">Post My Land</Text>
                                <Text className="text-white/90 text-xs font-medium font-display">Register new plots for investment</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* SectionHeader */}
                    <View className="flex-row items-center justify-between px-4 pt-6 pb-2">
                        <Text className="text-[#0d1b0f] dark:text-white text-lg font-bold leading-tight font-display">Recent Activity</Text>
                        <TouchableOpacity onPress={() => router.push("/investor-offers")}>
                            <Text className="text-primary text-sm font-bold font-display">View All</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Activity List */}
                    <View className="px-4 pb-4">
                        {/* ListItem 1 */}
                        <View className="flex-row items-center gap-4 bg-white dark:bg-gray-800/50 rounded-xl mb-3 px-4 py-3 justify-between border border-gray-50 dark:border-gray-800">
                            <View className="flex-row items-center gap-4 flex-1">
                                <View className="items-center justify-center rounded-full bg-[#e7f3e8] dark:bg-green-950 size-12">
                                    <MaterialIcons name="person-search" size={24} color="#11d421" />
                                </View>
                                <View className="flex-1">
                                    <Text className="text-[#0d1b0f] dark:text-white text-base font-bold leading-tight font-display">New investor inquiry</Text>
                                    <Text className="text-[#4c9a52] text-sm font-medium font-display" numberOfLines={1}>John Doe is interested in Plot B</Text>
                                </View>
                            </View>
                            <View>
                                <Text className="text-[#4c9a52] text-xs font-semibold font-display">2h ago</Text>
                            </View>
                        </View>

                        {/* ListItem 2 */}
                        <View className="flex-row items-center gap-4 bg-white dark:bg-gray-800/50 rounded-xl mb-3 px-4 py-3 justify-between border border-gray-50 dark:border-gray-800">
                            <View className="flex-row items-center gap-4 flex-1">
                                <View className="items-center justify-center rounded-full bg-blue-50 dark:bg-blue-950 size-12">
                                    <MaterialIcons name="verified" size={24} color="#2563eb" />
                                </View>
                                <View className="flex-1">
                                    <Text className="text-[#0d1b0f] dark:text-white text-base font-bold leading-tight font-display">Plot Verified</Text>
                                    <Text className="text-[#4c9a52] text-sm font-medium font-display" numberOfLines={1}>Sector 7 inspection complete</Text>
                                </View>
                            </View>
                            <View>
                                <Text className="text-[#4c9a52] text-xs font-semibold font-display">Yesterday</Text>
                            </View>
                        </View>

                        {/* ListItem 3 */}
                        <View className="flex-row items-center gap-4 bg-white dark:bg-gray-800/50 rounded-xl mb-3 px-4 py-3 justify-between border border-gray-50 dark:border-gray-800">
                            <View className="flex-row items-center gap-4 flex-1">
                                <View className="items-center justify-center rounded-full bg-amber-50 dark:bg-amber-950 size-12">
                                    <MaterialIcons name="payments" size={24} color="#d97706" />
                                </View>
                                <View className="flex-1">
                                    <Text className="text-[#0d1b0f] dark:text-white text-base font-bold leading-tight font-display">Payout Processed</Text>
                                    <Text className="text-[#4c9a52] text-sm font-medium font-display" numberOfLines={1}>Q3 Maize farm harvest profit</Text>
                                </View>
                            </View>
                            <View>
                                <Text className="text-[#4c9a52] text-xs font-semibold font-display">3 days ago</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
