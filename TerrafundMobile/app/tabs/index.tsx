import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function InvestorDashboard() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark" edges={['top']}>
      <View className="flex-1 relative">
        {/* Top Navigation */}
        <View className="flex-row items-center justify-between px-4 py-4 bg-background-light/80 dark:bg-background-dark/80 z-50">
          <View className="flex-row items-center gap-3">
            <View className="size-10 rounded-full border-2 border-primary overflow-hidden">
              <Image
                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDngqmI_FRzt9L0An8Ra22-n-2IMCakdaopKbvZz1ua4D5Y_fmjjN0ySqPXC8fLmN6xM19KEWtIclzRPTQoe7Eg_L66JUZ30gTtiB20t00NQGPCTt20Fn3JJ6eFfHOL_CLHmRdmPO2gUH6OZ89Y2pmi_52G5vQiOFauk9U6NwnGNf1jFDzhYzyUzDonXhJkKN9PqvR668xWiBogxaFLffFEnEJddw8rm_4LShtrGjoC_DaYm1ZZORAyZJMQdpNMEoIXXj4U_P3UNpti" }}
                className="w-full h-full"
              />
            </View>
            <View>
              <Text className="text-xs text-gray-500 dark:text-gray-400 font-medium font-display">Welcome back,</Text>
              <Text className="text-sm font-bold leading-none text-[#0d1b0f] dark:text-white font-display">Alex Mitchell</Text>
            </View>
          </View>
          <TouchableOpacity className="size-10 items-center justify-center rounded-full bg-white dark:bg-neutral-800 shadow-sm">
            <MaterialIcons name="notifications" size={22} color="#0d1b0f" />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerClassName="pb-24">
          {/* Hero Wallet Card */}
          <View className="p-4">
            <View className="rounded-xl shadow-sm bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/5 overflow-hidden">
              <View className="p-6">
                <View className="flex-row justify-between items-start mb-4">
                  <View>
                    <Text className="text-gray-500 dark:text-gray-400 text-sm font-medium font-display">Total Invested</Text>
                    <Text className="text-3xl font-extrabold tracking-tight mt-1 text-[#0d1b0f] dark:text-white font-display">$42,850.00</Text>
                  </View>
                  <View className="bg-primary/10 p-2 rounded-lg">
                    <MaterialIcons name="account-balance-wallet" size={24} color="#11d421" />
                  </View>
                </View>
                <View className="flex-row items-center gap-2 mb-6">
                  <View className="flex-row items-center bg-primary/10 px-2 py-1 rounded-full">
                    <MaterialIcons name="trending-up" size={12} color="#11d421" />
                    <Text className="text-xs font-bold text-primary ml-1 font-display">+12.5%</Text>
                  </View>
                  <Text className="text-xs text-gray-400 font-display">vs last quarter</Text>
                </View>
                <View className="flex-row gap-4">
                  <TouchableOpacity
                    className="flex-1 bg-primary py-3 rounded-lg flex-row items-center justify-center gap-2 shadow-sm"
                    onPress={() => router.push("/tabs/explore")}
                  >
                    <MaterialIcons name="add-circle" size={18} color="white" />
                    <Text className="text-white font-bold font-display">Invest</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="flex-1 bg-neutral-100 dark:bg-neutral-800 py-3 rounded-lg flex-row items-center justify-center gap-2"
                    onPress={() => router.push("/tabs/wallet")}
                  >
                    <MaterialIcons name="payments" size={18} color="#404040" />
                    <Text className="text-neutral-700 dark:text-neutral-200 font-bold font-display">Withdraw</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* Mini Stats Overlay */}
              <View className="flex-row border-t border-black/5 dark:border-white/5 bg-neutral-50/50 dark:bg-neutral-800/50">
                <View className="flex-1 p-4 items-center border-r border-black/5 dark:border-white/5">
                  <Text className="text-xs text-gray-500 dark:text-gray-400 mb-1 font-display">Active Farms</Text>
                  <Text className="font-bold text-[#0d1b0f] dark:text-white font-display">14</Text>
                </View>
                <View className="flex-1 p-4 items-center">
                  <Text className="text-xs text-gray-500 dark:text-gray-400 mb-1 font-display">Total Profit</Text>
                  <Text className="font-bold text-primary font-display">+$5,120.40</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Next Harvest Payout */}
          <View className="flex-row items-center justify-between px-4 pb-2 pt-4">
            <Text className="text-lg font-bold tracking-tight text-[#0d1b0f] dark:text-white font-display">Next Harvest Payout</Text>
            <TouchableOpacity onPress={() => router.push("/tabs/portfolio")}>
              <Text className="text-primary text-sm font-bold font-display">View Calendar</Text>
            </TouchableOpacity>
          </View>

          <View className="p-4">
            <View className="bg-white dark:bg-neutral-900 rounded-xl p-4 shadow-sm border border-black/5 dark:border-white/5">
              <View className="flex-row gap-4 items-center">
                <Image
                  source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBG6pkj0nf3Yb5m7ydxIIPrNmg4wqjDqJ8Dy5MdcM4RB_4GB5_6ORxlAfMBb9ltlf7f6Tb6xmRjvdsF13fmIYLuG7ONbtVKnATf9H4n8XzxjEMMgVn_cg8AXJFRwcFlnj4H4qr4kLQrFlYsQauSfYOMi_1qI0tNAY3h3aB8sWGm5VnBOwDazXsAJLHiWq7ur6F2OJ5tE9Iq5-XPBCxK0ctCU3z5rNkYgczrcpvTxxobfDLr7JpnsBndo5lE2uY5H0jZJghkbSrlqFd6" }}
                  className="size-20 rounded-lg"
                />
                <View className="flex-1">
                  <View className="flex-row justify-between items-start">
                    <Text className="font-bold text-base text-[#0d1b0f] dark:text-white font-display">Maize Plantation #42</Text>
                    <View className="bg-primary/10 px-2 py-0.5 rounded">
                      <Text className="text-[10px] font-bold uppercase tracking-widest text-primary font-display">85% Maturation</Text>
                    </View>
                  </View>
                  <Text className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-display">
                    Expected: <Text className="text-[#0d1b0f] dark:text-white font-bold">$1,240.00</Text>
                  </Text>
                  <View className="mt-3 flex-row items-center gap-2">
                    <View className="flex-1 h-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                      <View className="bg-primary h-full w-[85%]" />
                    </View>
                    <Text className="text-[11px] font-bold text-gray-400 font-display">12 Days</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Portfolio Performance */}
          <View className="flex-row items-center justify-between px-4 pb-2 pt-4">
            <Text className="text-lg font-bold tracking-tight text-[#0d1b0f] dark:text-white font-display">Portfolio Performance</Text>
            <TouchableOpacity onPress={() => router.push("/tabs/portfolio")}>
              <Text className="text-gray-400 text-sm font-medium font-display">All Time</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row flex-wrap gap-4 p-4">
            <View className="flex-1 min-w-[140px] flex-col gap-1 rounded-xl p-5 border border-black/5 dark:border-white/5 bg-white dark:bg-neutral-900 shadow-sm">
              <View className="flex-row items-center justify-between mb-2">
                <MaterialIcons name="local-florist" size={24} color="#11d421" />
              </View>
              <Text className="text-gray-500 dark:text-gray-400 text-xs font-medium uppercase tracking-wider font-display">Acres Funded</Text>
              <Text className="text-xl font-bold text-[#0d1b0f] dark:text-white font-display">124.5</Text>
            </View>
            <View className="flex-1 min-w-[140px] flex-col gap-1 rounded-xl p-5 border border-black/5 dark:border-white/5 bg-white dark:bg-neutral-900 shadow-sm">
              <View className="flex-row items-center justify-between mb-2">
                <MaterialIcons name="people" size={24} color="#11d421" />
              </View>
              <Text className="text-gray-500 dark:text-gray-400 text-xs font-medium uppercase tracking-wider font-display">Farmers Supported</Text>
              <Text className="text-xl font-bold text-[#0d1b0f] dark:text-white font-display">8</Text>
            </View>
          </View>

          {/* Recent Activity */}
          <View className="px-4 pb-2 pt-4">
            <Text className="text-lg font-bold tracking-tight mb-4 text-[#0d1b0f] dark:text-white font-display">Recent Activity</Text>
            <View className="space-y-3">
              <View className="flex-row items-center justify-between p-3 bg-white dark:bg-neutral-900 rounded-xl border border-black/5 dark:border-white/5">
                <View className="flex-row items-center gap-3">
                  <View className="size-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 items-center justify-center">
                    <MaterialIcons name="spa" size={20} color="#ea580c" />
                  </View>
                  <View>
                    <Text className="text-sm font-bold text-[#0d1b0f] dark:text-white font-display">New Investment</Text>
                    <Text className="text-xs text-gray-400 font-display">Cassava Farm #08 • 2h ago</Text>
                  </View>
                </View>
                <Text className="text-sm font-bold text-red-500 font-display">-$500.00</Text>
              </View>

              <View className="flex-row items-center justify-between p-3 bg-white dark:bg-neutral-900 rounded-xl border border-black/5 dark:border-white/5">
                <View className="flex-row items-center gap-3">
                  <View className="size-10 rounded-lg bg-primary/10 items-center justify-center">
                    <MaterialIcons name="savings" size={20} color="#11d421" />
                  </View>
                  <View>
                    <Text className="text-sm font-bold text-[#0d1b0f] dark:text-white font-display">Harvest Payout</Text>
                    <Text className="text-xs text-gray-400 font-display">Rice Fields G-4 • Yesterday</Text>
                  </View>
                </View>
                <Text className="text-sm font-bold text-primary font-display">+$840.50</Text>
              </View>
            </View>
          </View>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
