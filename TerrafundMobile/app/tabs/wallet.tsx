import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function WalletScreen() {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark" edges={['top']}>
            <View className="flex-1 relative">
                {/* Top App Bar */}
                <View className="flex-row items-center p-4 pb-2 justify-between bg-background-light dark:bg-background-dark z-10">
                    <TouchableOpacity
                        className="size-12 items-center justify-center rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
                        onPress={() => router.back()}
                    >
                        <MaterialIcons name="arrow-back" size={24} color="#0d1b0f" />
                    </TouchableOpacity>
                    <Text className="text-[#0d1b0f] dark:text-white text-lg font-bold flex-1 text-center pr-12 font-display">
                        TerraFund Wallet
                    </Text>
                    <View className="w-12 items-end justify-center">
                        <TouchableOpacity className="items-center justify-center rounded-xl size-10 bg-white dark:bg-white/10 shadow-sm border border-black/5">
                            <MaterialIcons name="notifications" size={24} color="#0d1b0f" />
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView contentContainerClassName="pb-24">
                    {/* Balance Section */}
                    <View className="items-center pt-8 pb-4">
                        <Text className="text-[#4c9a52] dark:text-primary/80 text-sm font-semibold uppercase tracking-wider mb-1 font-display">
                            Total Balance
                        </Text>
                        <Text className="text-[#0d1b0f] dark:text-white text-[42px] font-extrabold leading-tight px-4 text-center font-display">
                            $12,450.00
                        </Text>
                        <View className="flex-row items-center gap-1 mt-1">
                            <MaterialIcons name="trending-up" size={14} color="#4c9a52" />
                            <Text className="text-[#4c9a52] text-xs font-bold font-display">+2.4% this month</Text>
                        </View>
                    </View>

                    {/* Quick Actions */}
                    <View className="px-4 py-6">
                        <View className="flex-row justify-center gap-3">
                            <View className="flex-1 items-center gap-2">
                                <TouchableOpacity className="w-full items-center justify-center rounded-xl h-14 bg-primary shadow-lg shadow-primary/20">
                                    <MaterialIcons name="add-circle" size={24} color="white" />
                                </TouchableOpacity>
                                <Text className="text-xs font-bold text-[#0d1b0f] dark:text-white font-display">Deposit</Text>
                            </View>
                            <View className="flex-1 items-center gap-2">
                                <TouchableOpacity className="w-full items-center justify-center rounded-xl h-14 bg-[#e7f3e8] dark:bg-white/10">
                                    <MaterialIcons name="arrow-upward" size={24} color="#0d1b0f" />
                                </TouchableOpacity>
                                <Text className="text-xs font-bold text-[#0d1b0f] dark:text-white font-display">Withdraw</Text>
                            </View>
                            <View className="flex-1 items-center gap-2">
                                <TouchableOpacity className="w-full items-center justify-center rounded-xl h-14 bg-[#e7f3e8] dark:bg-white/10">
                                    <MaterialIcons name="swap-horiz" size={24} color="#0d1b0f" />
                                </TouchableOpacity>
                                <Text className="text-xs font-bold text-[#0d1b0f] dark:text-white font-display">Transfer</Text>
                            </View>
                        </View>
                    </View>

                    {/* Recent Transactions */}
                    <View className="flex-1 bg-white dark:bg-white/5 rounded-t-3xl mt-4 px-4 pt-6 pb-8 shadow-sm">
                        <View className="flex-row items-center justify-between mb-6">
                            <Text className="text-[#0d1b0f] dark:text-white text-xl font-bold font-display">Recent Activity</Text>
                            <TouchableOpacity>
                                <Text className="text-primary text-sm font-bold font-display">View all</Text>
                            </TouchableOpacity>
                        </View>

                        <View className="space-y-4">
                            {/* Transaction 1 */}
                            <View className="flex-row items-center justify-between p-3 rounded-2xl bg-background-light dark:bg-white/5">
                                <View className="flex-row items-center gap-4">
                                    <View className="size-12 rounded-xl bg-primary/10 items-center justify-center">
                                        <MaterialIcons name="agriculture" size={24} color="#11d421" />
                                    </View>
                                    <View>
                                        <Text className="text-[#0d1b0f] dark:text-white font-bold text-sm font-display">Harvest Payout</Text>
                                        <Text className="text-gray-500 text-xs font-medium font-display">Corn Project #42</Text>
                                    </View>
                                </View>
                                <View className="items-end">
                                    <Text className="text-primary font-bold text-sm font-display">+$840.00</Text>
                                    <Text className="text-gray-400 text-[10px] uppercase font-display">Today, 2:15 PM</Text>
                                </View>
                            </View>

                            {/* Transaction 2 */}
                            <View className="flex-row items-center justify-between p-3 rounded-2xl bg-background-light dark:bg-white/5">
                                <View className="flex-row items-center gap-4">
                                    <View className="size-12 rounded-xl bg-red-100 dark:bg-red-500/10 items-center justify-center">
                                        <MaterialIcons name="eco" size={24} color="#ef4444" />
                                    </View>
                                    <View>
                                        <Text className="text-[#0d1b0f] dark:text-white font-bold text-sm font-display">Investment Made</Text>
                                        <Text className="text-gray-500 text-xs font-medium font-display">Vineyard Expansion</Text>
                                    </View>
                                </View>
                                <View className="items-end">
                                    <Text className="text-[#0d1b0f] dark:text-white font-bold text-sm font-display">-$1,200.00</Text>
                                    <Text className="text-gray-400 text-[10px] uppercase font-display">Yesterday</Text>
                                </View>
                            </View>

                            {/* Transaction 3 */}
                            <View className="flex-row items-center justify-between p-3 rounded-2xl bg-background-light dark:bg-white/5">
                                <View className="flex-row items-center gap-4">
                                    <View className="size-12 rounded-xl bg-primary/10 items-center justify-center">
                                        <MaterialIcons name="account-balance" size={24} color="#11d421" />
                                    </View>
                                    <View>
                                        <Text className="text-[#0d1b0f] dark:text-white font-bold text-sm font-display">Wallet Deposit</Text>
                                        <Text className="text-gray-500 text-xs font-medium font-display">Bank Transfer</Text>
                                    </View>
                                </View>
                                <View className="items-end">
                                    <Text className="text-primary font-bold text-sm font-display">+$2,500.00</Text>
                                    <Text className="text-gray-400 text-[10px] uppercase font-display">Oct 12, 2023</Text>
                                </View>
                            </View>

                            {/* Transaction 4 */}
                            <View className="flex-row items-center justify-between p-3 rounded-2xl bg-background-light dark:bg-white/5">
                                <View className="flex-row items-center gap-4">
                                    <View className="size-12 rounded-xl bg-primary/10 items-center justify-center">
                                        <MaterialIcons name="payments" size={24} color="#11d421" />
                                    </View>
                                    <View>
                                        <Text className="text-[#0d1b0f] dark:text-white font-bold text-sm font-display">Referral Bonus</Text>
                                        <Text className="text-gray-500 text-xs font-medium font-display">New Partner Sign-up</Text>
                                    </View>
                                </View>
                                <View className="items-end">
                                    <Text className="text-primary font-bold text-sm font-display">+$50.00</Text>
                                    <Text className="text-gray-400 text-[10px] uppercase font-display">Oct 10, 2023</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
