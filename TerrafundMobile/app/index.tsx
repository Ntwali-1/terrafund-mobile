import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';

export default function OnboardingScreen() {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
            <StatusBar style="auto" />

            {/* Header */}
            <View className="flex-row items-center p-4 pb-2 justify-between sticky top-0 z-10 bg-background-light dark:bg-background-dark">
                <View className="size-12 items-center justify-center">
                    <MaterialIcons name="eco" size={32} color="#11d421" />
                </View>
                <Text className="text-[#0d1b0f] dark:text-white text-lg font-bold flex-1 text-center pr-12 font-display">
                    TerraFund
                </Text>
            </View>

            <ScrollView contentContainerClassName="px-4 pb-8 grow">
                <View className="max-w-md mx-auto w-full flex-1">

                    {/* Headline */}
                    <View className="py-8">
                        <Text className="text-[#0d1b0f] dark:text-white text-[32px] font-extrabold leading-tight text-center font-display">
                            Invest in Land.{"\n"}Grow Together.
                        </Text>
                        <Text className="text-[#4c9a52] dark:text-primary/80 text-center mt-3 text-base font-display">
                            Select your role to get started with sustainable growth.
                        </Text>
                    </View>

                    {/* Role Selection Cards */}
                    <View className="space-y-4 flex-1">

                        {/* Investor Card */}
                        <View className="p-1">
                            <TouchableOpacity
                                className="flex-col rounded-xl shadow-sm bg-white dark:bg-[#1a2e1c] border border-transparent hover:border-primary overflow-hidden"
                                onPress={() => router.push("/(tabs)/")}
                            >
                                <ImageBackground
                                    source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkLkJlXIbue2MKlCpwIZed7L-ggsCsXGuLdRE7xqcKuac9YT1ltdpT2MgLXUGmz0DP_PZ_Xx5yRRsc1IqqDmhkb0H1RAH7tcj9C4v92Be2fH1RHMdWpXiwoiRMXyuEPnuy9_IrGIEep7bodSvb1SSBJjgsAQ4mNH0tTulTwBjfKovt2kLVB8psgczFBcK3e8vrPTP141R33y-_SkC5761byWfkrXMBkmIgkzVk3Ds4nqQGxoUGFyiYkaWQuBH3aREL9pqK1Kg5CG7p" }}
                                    className="w-full aspect-[16/7]"
                                >
                                    <View className="absolute inset-0 bg-black/20" />
                                    <View className="absolute top-4 left-4 bg-white/90 dark:bg-background-dark/90 p-2 rounded-lg">
                                        <MaterialIcons name="trending-up" size={24} color="#11d421" />
                                    </View>
                                </ImageBackground>

                                <View className="p-5 gap-1">
                                    <Text className="text-[#0d1b0f] dark:text-white text-xl font-bold font-display">
                                        I am an Investor
                                    </Text>
                                    <View className="flex-row items-end gap-3 justify-between">
                                        <Text className="text-[#4c9a52] dark:text-gray-400 text-sm flex-1 font-display">
                                            Browse verified agricultural projects and build your green portfolio.
                                        </Text>
                                        <View className="h-10 px-5 bg-primary rounded-xl items-center justify-center">
                                            <Text className="text-white text-sm font-semibold font-display">Select</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        {/* Land Owner Card */}
                        <View className="p-1">
                            <TouchableOpacity
                                className="flex-col rounded-xl shadow-sm bg-white dark:bg-[#1a2e1c] border border-transparent hover:border-primary overflow-hidden"
                                onPress={() => router.push("/(tabs)/owner")}
                            >
                                <ImageBackground
                                    source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAc-mVE7tTe57i-neMfcv81O5tvKUGrQ6iZY_ijS1glWVuht7qR__evfJHnUOXOXCLvaC5sU4sqSpSuDd-LL6iOJoJ3XxJfBsHs_P9gK-DFWMFv_LkSGQWyUeEH6ka2MiKXv4ZGm5efgq0jg4G169C5ixI_i7Qd7EkI3yfbt_9hUu8c4UyzNEJT2Ela9CIKEV9T-AoBMAdFv6XM9HvmONhByhIVg-dZEceuWAxDHxy-48wJsLZ7w390P2HNts3GJay31FyUoxw2p7" }}
                                    className="w-full aspect-[16/7]"
                                >
                                    <View className="absolute inset-0 bg-black/20" />
                                    <View className="absolute top-4 left-4 bg-white/90 dark:bg-background-dark/90 p-2 rounded-lg">
                                        <MaterialIcons name="agriculture" size={24} color="#11d421" />
                                    </View>
                                </ImageBackground>

                                <View className="p-5 gap-1">
                                    <Text className="text-[#0d1b0f] dark:text-white text-xl font-bold font-display">
                                        I am a Land Owner
                                    </Text>
                                    <View className="flex-row items-end gap-3 justify-between">
                                        <Text className="text-[#4c9a52] dark:text-gray-400 text-sm flex-1 font-display">
                                            Access funding for your farm and scale your production efficiently.
                                        </Text>
                                        <View className="h-10 px-5 bg-primary rounded-xl items-center justify-center">
                                            <Text className="text-white text-sm font-semibold font-display">Select</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                    {/* Footer */}
                    <View className="mt-8 py-8">
                        <Text className="text-[#4c9a52] dark:text-primary text-sm font-medium text-center font-display">
                            Already have an account? <Text className="font-bold" onPress={() => router.push('/(tabs)/')}>Log In</Text>
                        </Text>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
