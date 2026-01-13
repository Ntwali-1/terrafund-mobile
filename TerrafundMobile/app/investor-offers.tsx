import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function InvestorOffers() {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark" edges={['top']}>
            <View className="flex-1 relative">
                {/* TopAppBar */}
                <View className="flex-row items-center p-4 pb-2 justify-between bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10 border-b border-gray-200 dark:border-gray-800">
                    <TouchableOpacity
                        className="size-10 items-center justify-center"
                        onPress={() => router.back()}
                    >
                        <MaterialIcons name="arrow-back" size={24} color="#0d1b0f" />
                    </TouchableOpacity>
                    <Text className="text-[#0d1b0f] dark:text-white text-lg font-bold leading-tight flex-1 text-center font-display">Investor Offers</Text>
                    <TouchableOpacity className="size-10 items-center justify-center">
                        <MaterialIcons name="filter-list" size={24} color="#0d1b0f" />
                    </TouchableOpacity>
                </View>

                <ScrollView contentContainerClassName="px-4 py-6 pb-24 space-y-6">
                    {/* Offer Card 1 */}
                    <View className="rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 bg-white dark:bg-zinc-900 overflow-hidden">
                        <View className="p-4 flex-row items-center gap-3">
                            <Image
                                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeeIrFr-Bh6t0vvx7fU4PYJhkRUMAfzPaMR0VTHN6pYMrHaspjxT34L8TaCwa2MjD0_LhD4b-v4Pf0sTFeEqUK8rhUIzAv466o0Ykfzcw5HBGh5MCMuCnJGKROc0ngdsTwO0e2mkf0HXCXz_hX1Kj1Cn140_aruIW04Hmo0HNmh9gyyXRAG13lcFYXIgoaWeyq8k98WEGYdq8u6EhTc87dOEZZr14y6-rrdMC7DlCTF_yHSsvFLjuwIa_ggymH6UICDRpvl29uBp5S" }}
                                className="size-12 rounded-full border border-gray-200"
                            />
                            <View>
                                <View className="flex-row items-center gap-1">
                                    <Text className="text-[#0d1b0f] dark:text-white font-bold text-base font-display">John Doe</Text>
                                    <MaterialIcons name="verified" size={14} color="#11d421" />
                                </View>
                                <Text className="text-gray-500 text-xs font-display">Agri-Tech Venture Partner</Text>
                            </View>
                        </View>
                        <View className="px-4 pb-4">
                            <View className="gap-1">
                                <Text className="text-primary text-xs font-semibold uppercase tracking-wider font-display">Deal Type: Share Harvest</Text>
                                <Text className="text-[#0d1b0f] dark:text-white text-3xl font-extrabold tracking-tight font-display">$15,000 Offered</Text>
                            </View>
                            <View className="flex-row gap-4 mt-4 py-3 border-y border-gray-100 dark:border-gray-800">
                                <View className="flex-1">
                                    <Text className="text-gray-500 text-[10px] uppercase font-bold font-display">Expected ROI</Text>
                                    <Text className="text-[#0d1b0f] dark:text-white text-base font-bold font-display">12% Annually</Text>
                                </View>
                                <View className="flex-1">
                                    <Text className="text-gray-500 text-[10px] uppercase font-bold font-display">Duration</Text>
                                    <Text className="text-[#0d1b0f] dark:text-white text-base font-bold font-display">3 Seasons</Text>
                                </View>
                            </View>
                        </View>
                        {/* Button Group */}
                        <View className="gap-2 p-4 pt-0">
                            <View className="flex-row gap-2">
                                <TouchableOpacity className="flex-1 items-center justify-center rounded-lg h-12 bg-primary shadow-sm">
                                    <Text className="text-white text-sm font-bold font-display">Accept</Text>
                                </TouchableOpacity>
                                <TouchableOpacity className="flex-1 items-center justify-center rounded-lg h-12 border-2 border-[#795548] dark:border-[#a1887f]">
                                    <Text className="text-[#795548] dark:text-[#a1887f] text-sm font-bold font-display">Negotiate</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity className="w-full items-center justify-center rounded-lg h-10 bg-gray-100 dark:bg-zinc-800">
                                <Text className="text-red-500 text-sm font-bold font-display">Reject</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Offer Card 2 */}
                    <View className="rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 bg-white dark:bg-zinc-900 overflow-hidden">
                        <View className="p-4 flex-row items-center gap-3">
                            <Image
                                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuA51oNegtXt1YvufnEl0LGv0m-7-lGwGOWNL2yqtzYeha2BhH8EiBTejByYiJWLggOSrAJcgfdmFU9aGFuvM-1Su3xm33ET00PlpjZv-Y24NEa6rVOcTMoKE2MLjzvXRxfUxl5qdarZtqbyxve_13krfJEz3r_hZea6AN-B62fkPeAypBnmEl-AMufeEpAEJ5r5Ewutpf8v4PiFjQMiG4Psce1l4Nk8VAkIG-05Oruc5bExPQE_CPiCr_ptLxW_-Ps6XfUlOA7DlJqu" }}
                                className="size-12 rounded-full border border-gray-200"
                            />
                            <View>
                                <View className="flex-row items-center gap-1">
                                    <Text className="text-[#0d1b0f] dark:text-white font-bold text-base font-display">Sarah Smith</Text>
                                    <MaterialIcons name="verified" size={14} color="#11d421" />
                                </View>
                                <Text className="text-gray-500 text-xs font-display">Sustainability Fund Manager</Text>
                            </View>
                        </View>
                        <View className="px-4 pb-4">
                            <View className="gap-1">
                                <View className="flex-row justify-between items-center">
                                    <Text className="text-primary text-xs font-semibold uppercase tracking-wider font-display">Deal Type: Lease Agreement</Text>
                                    <View className="bg-amber-100 px-2 py-0.5 rounded-full">
                                        <Text className="text-amber-700 text-[10px] font-bold font-display">Expiring in 2d</Text>
                                    </View>
                                </View>
                                <Text className="text-[#0d1b0f] dark:text-white text-3xl font-extrabold tracking-tight font-display">$22,500 Offered</Text>
                            </View>
                            <View className="flex-row gap-4 mt-4 py-3 border-y border-gray-100 dark:border-gray-800">
                                <View className="flex-1">
                                    <Text className="text-gray-500 text-[10px] uppercase font-bold font-display">Expected ROI</Text>
                                    <Text className="text-[#0d1b0f] dark:text-white text-base font-bold font-display">10% fixed</Text>
                                </View>
                                <View className="flex-1">
                                    <Text className="text-gray-500 text-[10px] uppercase font-bold font-display">Duration</Text>
                                    <Text className="text-[#0d1b0f] dark:text-white text-base font-bold font-display">5 Years</Text>
                                </View>
                            </View>
                        </View>
                        {/* Button Group */}
                        <View className="gap-2 p-4 pt-0">
                            <View className="flex-row gap-2">
                                <TouchableOpacity className="flex-1 items-center justify-center rounded-lg h-12 bg-primary shadow-sm">
                                    <Text className="text-white text-sm font-bold font-display">Accept</Text>
                                </TouchableOpacity>
                                <TouchableOpacity className="flex-1 items-center justify-center rounded-lg h-12 border-2 border-[#795548] dark:border-[#a1887f]">
                                    <Text className="text-[#795548] dark:text-[#a1887f] text-sm font-bold font-display">Negotiate</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity className="w-full items-center justify-center rounded-lg h-10 bg-gray-100 dark:bg-zinc-800">
                                <Text className="text-red-500 text-sm font-bold font-display">Reject</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Offer Card 3 (New/Draft) */}
                    <View className="rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 bg-white dark:bg-zinc-900 overflow-hidden opacity-80">
                        <View className="p-4 flex-row items-center gap-3">
                            <Image
                                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3ecGc2zVzqk0f-pgLG2u4pV5y9tzEnpTOmmADfddtttk17Ize3AXvr3oXj2XfTeNcVkpzTJEZpKEWEMwwntc63neVeNckwTQkgzoJJs3IOcCjXPbG6YfTt_pNSCCw9uflOCsl_a1MergzI76BRKpjRieAvxIplia5f9VbyJKCaa3KAGlSo1i0TNizptaIp1FdeMFaNX4Y6tFk6aq6yPKDVKHpZhEIktspyBsbHYdf1lpRrq1M0JN12NrtdndXckh9ndHdNHTJt_mZ" }}
                                className="size-12 rounded-full border border-gray-200"
                            />
                            <View>
                                <View className="flex-row items-center gap-1">
                                    <Text className="text-[#0d1b0f] dark:text-white font-bold text-base font-display">Marcus Chen</Text>
                                </View>
                                <Text className="text-gray-500 text-xs font-display">Private Investor</Text>
                            </View>
                        </View>
                        <View className="px-4 pb-4">
                            <View className="gap-1">
                                <Text className="text-primary text-xs font-semibold uppercase tracking-wider font-display">Deal Type: Equity Share</Text>
                                <Text className="text-[#0d1b0f] dark:text-white text-3xl font-extrabold tracking-tight font-display">$8,200 Offered</Text>
                            </View>
                            <View className="flex-row gap-4 mt-4 py-3 border-y border-gray-100 dark:border-gray-800">
                                <View className="flex-1">
                                    <Text className="text-gray-500 text-[10px] uppercase font-bold font-display">Expected ROI</Text>
                                    <Text className="text-[#0d1b0f] dark:text-white text-base font-bold font-display">Variable</Text>
                                </View>
                                <View className="flex-1">
                                    <Text className="text-gray-500 text-[10px] uppercase font-bold font-display">Duration</Text>
                                    <Text className="text-[#0d1b0f] dark:text-white text-base font-bold font-display">Unlimited</Text>
                                </View>
                            </View>
                        </View>
                        {/* Button Group */}
                        <View className="gap-2 p-4 pt-0">
                            <View className="flex-row gap-2">
                                <TouchableOpacity className="flex-1 items-center justify-center rounded-lg h-12 bg-primary shadow-sm">
                                    <Text className="text-white text-sm font-bold font-display">Accept</Text>
                                </TouchableOpacity>
                                <TouchableOpacity className="flex-1 items-center justify-center rounded-lg h-12 border-2 border-[#795548] dark:border-[#a1887f]">
                                    <Text className="text-[#795548] dark:text-[#a1887f] text-sm font-bold font-display">Negotiate</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity className="w-full items-center justify-center rounded-lg h-10 bg-gray-100 dark:bg-zinc-800">
                                <Text className="text-red-500 text-sm font-bold font-display">Reject</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
