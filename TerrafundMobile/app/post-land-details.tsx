import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function PostLandDetails() {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark" edges={['top']}>
            <View className="flex-1 relative">
                {/* TopAppBar */}
                <View className="flex-row items-center p-4 pb-2 justify-between bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10">
                    <TouchableOpacity
                        className="size-12 items-center justify-center rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
                        onPress={() => router.back()}
                    >
                        <MaterialIcons name="arrow-back" size={24} color="#0d1b0f" />
                    </TouchableOpacity>
                    <Text className="text-[#0d1b0f] dark:text-white text-lg font-bold leading-tight flex-1 text-center pr-12 font-display">Post Land Details</Text>
                </View>

                <ScrollView contentContainerClassName="pb-32">
                    {/* ProgressBar */}
                    <View className="gap-3 p-4">
                        <View className="flex-row gap-6 justify-between items-center">
                            <Text className="text-[#0d1b0f] dark:text-white text-base font-semibold font-display">Listing Progress</Text>
                            <Text className="text-[#11d421] text-sm font-bold font-display">Step 1 of 3</Text>
                        </View>
                        <View className="rounded-full bg-[#cfe7d1] dark:bg-gray-700 h-2 w-full overflow-hidden">
                            <View className="h-full rounded-full bg-primary w-1/3" />
                        </View>
                    </View>

                    {/* Headline & Body */}
                    <View className="px-4 pt-4">
                        <Text className="text-[#0d1b0f] dark:text-white tracking-tight text-2xl font-extrabold leading-tight font-display">Land Information</Text>
                        <Text className="text-[#4c6a4e] dark:text-gray-400 text-base font-medium leading-normal mt-2 font-display">Provide the essential details about your property to attract investors.</Text>
                    </View>

                    {/* Form Section: Land Size */}
                    <View className="px-4 py-4">
                        <View className="gap-2">
                            <Text className="text-[#0d1b0f] dark:text-white text-base font-bold font-display">Land Size (hectares)</Text>
                            <View className="relative">
                                <TextInput
                                    className="w-full rounded-xl text-[#0d1b0f] dark:text-white border border-[#cfe7d1] dark:border-gray-700 bg-white dark:bg-gray-800 h-14 p-4 text-lg font-medium font-display"
                                    placeholder="e.g. 10.5"
                                    placeholderTextColor="#9ca3af"
                                    keyboardType="numeric"
                                />
                                <View className="absolute right-4 top-0 h-full justify-center">
                                    <Text className="text-gray-500 font-bold font-display">ha</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Map Picker Section */}
                    <View className="px-4 py-4">
                        <Text className="text-[#0d1b0f] dark:text-white text-base font-bold mb-2 font-display">Location</Text>
                        <TouchableOpacity className="relative w-full h-48 rounded-xl overflow-hidden border border-[#cfe7d1] dark:border-gray-700">
                            <Image
                                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJWoHlrD6pLilx1CloTHEnQiIhk0jcL0DbaNRSBFZKhsvyK02tIcwIZVqstG37UwLUrbXCNGjEUZvT_IDqcH6jb1msp6vAUoUwQlWBMXJ6AeL7JXfOTTlAfYO9fDY7hy9KWg4smOAOTfBEQ_ZTQIwlbz1VjhIzeP9KxSy-mDQfhaVxjMDDHVpfhV0iZyic2srfQHuLUjwNLS4i20iZgNXTZo9Gw2PzL8mgfAz9WBp5S3L9LAQr1mBNRwoSawl5WcnTT10fqw9mqDFz" }}
                                className="w-full h-full"
                            />
                            <View className="absolute inset-0 bg-black/20 items-center justify-center">
                                <View className="bg-white dark:bg-gray-900 px-4 py-2 rounded-full flex-row items-center gap-2 shadow-lg">
                                    <MaterialIcons name="location-on" size={20} color="#11d421" />
                                    <Text className="text-sm font-bold text-[#0d1b0f] dark:text-white font-display">Tap to pin location</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* Soil Type & Crop Selects */}
                    <View className="px-4 py-4 flex-row gap-4">
                        <View className="flex-1 gap-2">
                            <Text className="text-[#0d1b0f] dark:text-white text-base font-bold font-display">Soil Type</Text>
                            <TouchableOpacity className="w-full rounded-xl border border-[#cfe7d1] dark:border-gray-700 bg-white dark:bg-gray-800 h-14 p-4 justify-center">
                                <Text className="text-[#0d1b0f] dark:text-white font-medium font-display">Select soil type</Text>
                            </TouchableOpacity>
                        </View>
                        <View className="flex-1 gap-2">
                            <Text className="text-[#0d1b0f] dark:text-white text-base font-bold font-display">Target Crop</Text>
                            <TouchableOpacity className="w-full rounded-xl border border-[#cfe7d1] dark:border-gray-700 bg-white dark:bg-gray-800 h-14 p-4 justify-center">
                                <Text className="text-[#0d1b0f] dark:text-white font-medium font-display">What will you grow?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Photo Upload Section */}
                    <View className="px-4 py-4">
                        <View className="flex-row justify-between items-center mb-3">
                            <Text className="text-[#0d1b0f] dark:text-white text-base font-bold font-display">Land Photos</Text>
                            <Text className="text-xs text-gray-500 font-medium font-display">Add at least 3 photos</Text>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12 }}>
                            <TouchableOpacity className="size-28 rounded-xl border-2 border-dashed border-[#cfe7d1] dark:border-gray-700 items-center justify-center bg-white dark:bg-gray-800">
                                <MaterialIcons name="add-a-photo" size={32} color="#11d421" />
                                <Text className="text-[10px] font-bold mt-1 text-gray-500 uppercase font-display">Upload</Text>
                            </TouchableOpacity>

                            <View className="size-28 rounded-xl overflow-hidden relative border border-gray-200 dark:border-gray-700">
                                <Image
                                    source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuA97BZDKrRJ0CPiBlc4oujWF_P2XVY7Gu6XfU6twIGZ-CpspZL5K3zpQw27K76uvufPuty33ajxW5aNwFj4m96kJcMPAyl_3yt55LYwqu-tt4M0FDKan_Ya6KMwqlFNqENZSjJB9Gb3vqp5p0bTC4NnVwgRoqO7IRvL06y9WxYacQ1lsMg2xbzEZxWJ-FSnKzAXRyphMIrz7o7Pe1yiRumngc4NdmA5qsg8CIU1r0gD7svlSDtzDjnx1AUgLn6c5iY9vF8tQPrdpzuT" }}
                                    className="w-full h-full"
                                />
                                <TouchableOpacity className="absolute top-1 right-1 size-6 bg-black/50 rounded-full items-center justify-center">
                                    <MaterialIcons name="close" size={14} color="white" />
                                </TouchableOpacity>
                            </View>

                            <View className="size-28 rounded-xl overflow-hidden relative border border-gray-200 dark:border-gray-700">
                                <Image
                                    source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBS9BolzGUcMDSSXlmSx3VaZBK6AwyB3KI6uFJxNq9KdW18uV2KGJAHepXlvrLG2RVaGW92TGzBe4gPr9EMLqv9RRNi1gOet3Jis7L1Th8eJVTLlrKc2JylIXSSwnvWcxhtt-e8EFiEEs3Su8lBUf3vUewvskjZZ28-1LuiknjBNbTBzVdQh4MV4NjYV4xo3T4bz8VT_WM9hvd-_gDt0IGs_GlEwHHX5BDy5nKW7SsVggTHWif3NuoKsl3_tx2TKO8j4EEZUPfirrMC" }}
                                    className="w-full h-full"
                                />
                                <TouchableOpacity className="absolute top-1 right-1 size-6 bg-black/50 rounded-full items-center justify-center">
                                    <MaterialIcons name="close" size={14} color="white" />
                                </TouchableOpacity>
                            </View>

                            <View className="size-28 rounded-xl border-2 border-dashed border-[#cfe7d1] dark:border-gray-700 bg-white/50 dark:bg-gray-800/50" />
                        </ScrollView>
                    </View>

                    {/* Offline Info */}
                    <View className="px-4 py-4 mt-2">
                        <View className="bg-primary/10 dark:bg-primary/5 rounded-lg p-3 flex-row items-center gap-3">
                            <MaterialIcons name="cloud-done" size={20} color="#11d421" />
                            <Text className="text-xs font-medium text-[#2d5c31] dark:text-primary/80 flex-1 font-display">Draft saved automatically. You can finish this listing even without internet connection.</Text>
                        </View>
                    </View>
                </ScrollView>

                {/* Bottom Navigation Button */}
                <View className="absolute bottom-0 w-full p-4 bg-background-light dark:bg-background-dark border-t border-gray-100 dark:border-gray-800">
                    <TouchableOpacity
                        className="w-full bg-primary h-16 rounded-xl shadow-lg shadow-primary/20 flex-row items-center justify-center gap-2"
                        onPress={() => router.push("/(tabs)/owner")}
                    >
                        <Text className="text-white font-extrabold text-lg font-display">Continue to Pricing</Text>
                        <MaterialIcons name="arrow-forward" size={24} color="white" />
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
}
