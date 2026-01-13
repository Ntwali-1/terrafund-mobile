import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function LandInvestmentDetails() {
    const router = useRouter();
    return (
        <View className="flex-1 bg-background-light dark:bg-background-dark relative">
            <ScrollView contentContainerClassName="pb-32">
                {/* Top Navigation */}
                <SafeAreaView className="absolute top-0 w-full z-50 flex-row items-center justify-between p-4" edges={['top']}>
                    <TouchableOpacity
                        className="size-10 items-center justify-center rounded-full bg-white dark:bg-neutral-800 shadow-sm"
                        onPress={() => router.back()}
                    >
                        <MaterialIcons name="arrow-back-ios" size={18} color="#0d1b0f" style={{ marginLeft: 6 }} />
                    </TouchableOpacity>
                    <Text className="text-[#0d1b0f] dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center font-display" style={{ textShadowColor: 'rgba(0, 0, 0, 0.3)', textShadowOffset: { width: 0, height: 1 }, textShadowRadius: 2 }}>
                        Plot Details
                    </Text>
                    <TouchableOpacity className="size-10 items-center justify-center rounded-full bg-white dark:bg-neutral-800 shadow-sm">
                        <MaterialIcons name="share" size={20} color="#0d1b0f" />
                    </TouchableOpacity>
                </SafeAreaView>

                {/* Header Image Gallery */}
                <View className="p-4 pt-20">
                    <View className="relative shadow-lg rounded-xl overflow-hidden min-h-72">
                        <ImageBackground
                            source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLxsAPqZiNm-U7zmZHcLR0lzemIlSuKjYkafD2dHYGOf-iKOcmEfzBAMqj3p3E_RFf7JgOs2aGU4H8FmBwPgjmCVk_6NSnj3R_Ya5523qOtAqwBp0MgJlh5Pds-lifJdPxFTpRVyvJTMCYA798pLZ6DmLPjXqxs_IjguDadwpVPhd7p_XFK2yQPlbp3bwhYKK0KWO03kwWnEf1YrC3q2RzGhzshWwlIx6Quu1O89COeaku2bNytiKSQeXHavjusz00j9sk1gyPXH6z" }}
                            className="flex-1 justify-end min-h-72"
                        >
                            <LinearGradient
                                colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)']}
                                style={{ position: 'absolute', width: '100%', height: '100%' }}
                            />
                            <View className="absolute top-4 right-4 bg-white/90 dark:bg-black/60 px-3 py-1 rounded-full">
                                <Text className="text-[10px] font-bold uppercase tracking-wider text-primary font-display">New Listing</Text>
                            </View>
                            <View className="flex-row justify-center gap-2 p-5">
                                <View className="size-2 rounded-full bg-primary" />
                                <View className="size-2 rounded-full bg-white opacity-50" />
                                <View className="size-2 rounded-full bg-white opacity-50" />
                                <View className="size-2 rounded-full bg-white opacity-50" />
                            </View>
                        </ImageBackground>
                    </View>
                </View>

                {/* Section Header & Title */}
                <View className="px-4 pt-4">
                    <View className="flex-row justify-between items-start">
                        <View>
                            <Text className="text-[#0d1b0f] dark:text-white text-2xl font-extrabold leading-tight tracking-tight font-display">Green Valley Plot #42</Text>
                            <View className="flex-row items-center gap-1 mt-1">
                                <MaterialIcons name="location-on" size={14} color="#11d421" />
                                <Text className="text-primary dark:text-primary/80 text-sm font-semibold font-display">Nairobi, Kenya • 50 Acres</Text>
                            </View>
                        </View>
                        <View className="items-end">
                            <Text className="text-xs text-zinc-500 dark:text-zinc-400 font-medium font-display">Valuation</Text>
                            <Text className="text-xl font-extrabold text-[#0d1b0f] dark:text-white font-display">$125,000</Text>
                        </View>
                    </View>
                </View>

                {/* Farmer Profile Badge */}
                <View className="mx-4 mt-6 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-sm flex-row items-center justify-between">
                    <View className="flex-row items-center gap-3">
                        <Image
                            source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTfrSdHEiPo-5J-NsGxukrlZYKRLdcuDa9z48pvOs-d9fVBTPbzWcWg-H-EVotKVQzlhQ3fZIgWIKGr9DLJ-PFNri24LFKKh5xo1azdYy5yHQrhZ8yH74IuaCEWSqJyG7YnEOT-Jp0WVA_W9twjwApqKZz2718ADyFlIjUiMl5GP7MExFwBImz7ioDp10MrkEUhEUulhzHuZTtrwXsk8j8cvLg2FHoN-j7dHqfvqjvAE9IGVQ9g6VQlIXTVDfLRP2GgDATNOOGsz-T" }}
                            className="size-12 rounded-full border-2 border-primary/20"
                        />
                        <View>
                            <View className="flex-row items-center gap-1">
                                <Text className="text-[#0d1b0f] dark:text-white text-base font-bold font-display">Samuel Okoth</Text>
                                <MaterialIcons name="verified" size={18} color="#11d421" />
                            </View>
                            <Text className="text-zinc-500 dark:text-zinc-400 text-xs font-medium font-display">Land Owner • 4.9 Rating (12 Deals)</Text>
                        </View>
                    </View>
                    <View className="bg-primary/10 px-3 py-2 rounded-lg">
                        <Text className="text-primary text-xs font-bold font-display">MEMBER 3Y</Text>
                    </View>
                </View>

                {/* Soil Quality Details */}
                <View className="px-4 mt-8">
                    <Text className="text-[#0d1b0f] dark:text-white text-lg font-bold mb-4 font-display">Soil & Technical Data</Text>
                    <View className="flex-row flex-wrap gap-3">
                        <View className="p-3 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800 w-[48%]">
                            <View className="flex-row items-center gap-2 mb-1">
                                <MaterialIcons name="science" size={20} color="#11d421" />
                                <Text className="text-xs text-zinc-500 dark:text-zinc-400 font-medium font-display">pH Level</Text>
                            </View>
                            <Text className="text-[#0d1b0f] dark:text-white font-bold font-display">6.5 (Optimal)</Text>
                        </View>
                        <View className="p-3 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800 w-[48%]">
                            <View className="flex-row items-center gap-2 mb-1">
                                <MaterialIcons name="water-drop" size={20} color="#11d421" />
                                <Text className="text-xs text-zinc-500 dark:text-zinc-400 font-medium font-display">Irrigation</Text>
                            </View>
                            <Text className="text-[#0d1b0f] dark:text-white font-bold font-display">Full Borehole</Text>
                        </View>
                        <View className="p-3 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800 w-[48%]">
                            <View className="flex-row items-center gap-2 mb-1">
                                <MaterialIcons name="grass" size={20} color="#11d421" />
                                <Text className="text-xs text-zinc-500 dark:text-zinc-400 font-medium font-display">Organic Matter</Text>
                            </View>
                            <Text className="text-[#0d1b0f] dark:text-white font-bold font-display">4.2%</Text>
                        </View>
                        <View className="p-3 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800 w-[48%]">
                            <View className="flex-row items-center gap-2 mb-1">
                                <MaterialIcons name="history" size={20} color="#11d421" />
                                <Text className="text-xs text-zinc-500 dark:text-zinc-400 font-medium font-display">Previous Crop</Text>
                            </View>
                            <Text className="text-[#0d1b0f] dark:text-white font-bold font-display">Maize & Soy</Text>
                        </View>
                    </View>
                </View>

                {/* Financial Projection Graph Section */}
                <View className="px-4 mt-8">
                    <View className="flex-row items-center justify-between mb-4">
                        <Text className="text-[#0d1b0f] dark:text-white text-lg font-bold font-display">Financial Projections</Text>
                        <TouchableOpacity className="flex-row items-center gap-1">
                            <MaterialIcons name="description" size={14} color="#11d421" />
                            <Text className="text-primary text-xs font-bold font-display">View Prospectus</Text>
                        </TouchableOpacity>
                    </View>

                    <View className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800">
                        <View className="flex-row justify-between items-end mb-6">
                            <View>
                                <Text className="text-zinc-500 dark:text-zinc-400 text-xs font-medium font-display">Est. Annual Yield</Text>
                                <Text className="text-2xl font-extrabold text-[#0d1b0f] dark:text-white font-display">
                                    12.4% <Text className="text-xs font-bold text-primary">ROI</Text>
                                </Text>
                            </View>
                            <View className="items-end">
                                <Text className="text-xs text-zinc-500 dark:text-zinc-400 font-medium font-display">Risk Level</Text>
                                <View className="px-2 py-1 bg-primary/20 rounded-md mt-1">
                                    <Text className="text-xs font-bold text-primary font-display">LOW</Text>
                                </View>
                            </View>
                        </View>

                        {/* Abstract Graph Visualization */}
                        <View className="h-24 w-full flex-row items-end gap-1 relative">
                            <View className="h-1/4 flex-1 bg-primary/10 rounded-t-sm" />
                            <View className="h-2/5 flex-1 bg-primary/20 rounded-t-sm" />
                            <View className="h-1/2 flex-1 bg-primary/30 rounded-t-sm" />
                            <View className="h-3/5 flex-1 bg-primary/40 rounded-t-sm" />
                            <View className="h-2/3 flex-1 bg-primary/60 rounded-t-sm" />
                            <View className="h-3/4 flex-1 bg-primary/80 rounded-t-sm" />
                            <View className="h-full flex-1 bg-primary rounded-t-sm" />

                            {/* Legend */}
                            <View className="absolute -bottom-6 left-0 w-full flex-row justify-between px-1">
                                <Text className="text-[10px] text-zinc-400 font-bold font-display">2024</Text>
                                <Text className="text-[10px] text-zinc-400 font-bold font-display">2030</Text>
                            </View>
                        </View>

                        <View className="mt-10 flex-row gap-4 border-t border-zinc-50 dark:border-zinc-800 pt-4">
                            <View className="flex-1">
                                <Text className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest font-display">MIN INVEST</Text>
                                <Text className="text-lg font-bold text-[#0d1b0f] dark:text-white font-display">$2,500</Text>
                            </View>
                            <View className="flex-1">
                                <Text className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest font-display">TERM</Text>
                                <Text className="text-lg font-bold text-[#0d1b0f] dark:text-white font-display">5 Years</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Deal Options Toggle */}
                <View className="px-4 mt-8 pb-10">
                    <Text className="text-[#0d1b0f] dark:text-white text-lg font-bold mb-4 font-display">Deal Options</Text>
                    <View className="flex-row p-1 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
                        <TouchableOpacity className="flex-1 py-2 rounded-lg bg-white dark:bg-zinc-900 shadow-sm items-center justify-center">
                            <Text className="text-sm font-bold text-[#0d1b0f] dark:text-white font-display">Rent</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-1 py-2 rounded-lg items-center justify-center">
                            <Text className="text-sm font-bold text-zinc-500 dark:text-zinc-400 font-display">Share</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-1 py-2 rounded-lg items-center justify-center">
                            <Text className="text-sm font-bold text-zinc-500 dark:text-zinc-400 font-display">Buy</Text>
                        </TouchableOpacity>
                    </View>
                    <Text className="mt-4 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed italic font-display">
                        * Renting gives you exclusive farming rights for the season. Returns are based on direct crop yields minus service fees.
                    </Text>
                </View>

            </ScrollView>

            {/* Sticky Bottom Action Bar */}
            <View className="absolute bottom-0 w-full p-6 bg-white/90 dark:bg-background-dark/95 border-t border-zinc-100 dark:border-zinc-800 gap-3 z-50">
                <View className="flex-row gap-3">
                    <TouchableOpacity
                        className="flex-1 h-14 bg-white dark:bg-zinc-800 border-2 border-primary rounded-xl flex-row items-center justify-center gap-2"
                        onPress={() => router.push("/farmer-investor-chat")}
                    >
                        <MaterialIcons name="send" size={20} color="#11d421" />
                        <Text className="text-primary font-bold font-display">Send Offer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="flex-[1.5] h-14 bg-primary rounded-xl shadow-lg shadow-primary/30 flex-row items-center justify-center gap-2"
                        onPress={() => router.push("/(tabs)/wallet")}
                    >
                        <MaterialIcons name="account-balance-wallet" size={20} color="white" />
                        <Text className="text-white font-bold font-display">Invest Now</Text>
                    </TouchableOpacity>
                </View>
                <View className="w-24 h-1 bg-zinc-300 dark:bg-zinc-700 mx-auto rounded-full mt-2" />
            </View>
        </View>
    );
}
