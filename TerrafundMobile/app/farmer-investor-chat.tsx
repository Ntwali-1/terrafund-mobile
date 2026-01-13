import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

import { useRouter } from 'expo-router';

export default function FarmerInvestorChat() {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark" edges={['top']}>
            <View className="flex-1 relative">
                {/* Header / TopAppBar */}
                <View className="flex-row items-center p-4 pb-2 justify-between bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 z-10">
                    <View className="flex-row items-center gap-3">
                        <TouchableOpacity
                            className="items-center justify-center p-1 -ml-2"
                            onPress={() => router.back()}
                        >
                            <MaterialIcons name="chevron-left" size={32} color="#0d1b0f" />
                        </TouchableOpacity>
                        <View className="size-10 shrink-0">
                            <Image
                                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0CMAY5G93U68yGlaChxD3jOkeg38Qd_byDYOMeQuz8ySDd6b4m8H0CoWRUTJokY70ozQYCTVyfwswJmvN_99pMRuyYChrr0uwUl1ZyAKfl93ulc4jE-1PBeLh0M8VoHSkJWLqAlbFGdQYklxwZOdM_00fBPrdW15vAYu86AzKSpsrfcyPB_Wk38WrfMrIFoZe5S-9c9mneuPOQCRfnUIv7Ux_TiHb9rE48uAEJSMGEOxtFfV7LRfg43FOuDlO4eFmN55Ndsx-maHH" }}
                                className="size-10 rounded-full"
                            />
                        </View>
                        <View>
                            <Text className="text-[#0d1b0f] dark:text-white text-base font-bold leading-tight font-display">Kofi Mensah</Text>
                            <View className="flex-row items-center gap-1.5">
                                <View className="size-2 rounded-full bg-primary" />
                                <Text className="text-[#4c9a52] text-xs font-medium font-display">Maize Farmer • Active now</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                        <MaterialIcons name="info" size={20} color="#0d1b0f" />
                    </TouchableOpacity>
                </View>

                {/* Chat Content */}
                <ScrollView contentContainerClassName="px-4 py-6 space-y-6 flex-1">
                    {/* Date Divider */}
                    <View className="items-center mb-6">
                        <Text className="text-[#4c9a52] text-xs font-semibold uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full font-display">Yesterday</Text>
                    </View>

                    {/* Received Message */}
                    <View className="flex-row items-end gap-3 max-w-[85%] self-start mb-6">
                        <View className="size-8 shrink-0">
                            <Image
                                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-r4fh0sIWA9n3-9eYhTl5uMx5dCeW2x-CQjVdBykNugjPw26XH7X_h_Ry8LOQ5KUprFhjkKlGwc0JnBjR9ZGiEs6WFYAGqRo68SDzdnpuC4ynZkbtSiuzg3DW2Zwu2YCAqS_Ccm8cLruV_HYsN-AiiuWkpwM6ctSysm9lXU3yDbV8wwc30GL4C6Tx0jYAigLy5JXd12XbwAr34_S2bu1s12_erjDhlZ726Q4ZWMnCkQPbmKFnRl9doDmUn5TxsDOwPL3UMeZU2r3X" }}
                                className="size-8 rounded-full"
                            />
                        </View>
                        <View className="gap-1 items-start">
                            <View className="bg-[#e7f3e8] dark:bg-gray-800 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                                <Text className="text-sm font-medium leading-normal text-[#0d1b0f] dark:text-white font-display">Hello! The maize crops are growing well after the recent rain.</Text>
                            </View>
                            <Text className="text-[10px] text-gray-500 ml-1 font-display">10:42 AM</Text>
                        </View>
                    </View>

                    {/* Sent Message */}
                    <View className="flex-row items-end justify-end gap-3 ml-auto max-w-[85%] self-end mb-6">
                        <View className="items-end gap-1">
                            <View className="bg-primary rounded-2xl rounded-br-none px-4 py-3 shadow-md">
                                <Text className="text-sm font-medium leading-normal text-white font-display">That's great news, Kofi. How is the soil moisture level in the north field?</Text>
                            </View>
                            <View className="flex-row items-center gap-1">
                                <Text className="text-[10px] text-gray-500 mr-1 font-display">11:05 AM</Text>
                                <MaterialIcons name="done-all" size={14} color="#11d421" />
                            </View>
                        </View>
                    </View>

                    {/* Date Divider */}
                    <View className="items-center mb-6">
                        <Text className="text-[#4c9a52] text-xs font-semibold uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full font-display">Today</Text>
                    </View>

                    {/* Received Message with Image */}
                    <View className="flex-row items-end gap-3 max-w-[85%] self-start mb-6">
                        <View className="size-8 shrink-0">
                            <Image
                                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsqwjq2tQsuVJfvYKVbi-6QncuvAloQq98jcVFLnGx9zWnx_T3SP4VvOItj_BRQCdkhWWVp3J81rmI_ZXKsijFLlbZYdU4rzpSJ7wEt9niKPm8UMbm2fPZZ3qcRFnUk1R4Hl1XCG9i8bnOcjYC6isYbScxUftRKNO03nIb9EMWTA0ZW3HkoM5QJUA-SalASok1d3rIRJQVZGgzZhTogc7F9U_MJU_UcT6Tp-PjfWNrmKAcvdJ2e1o_IDfP3kEB0W-y4hdMAvBbUuVk" }}
                                className="size-8 rounded-full"
                            />
                        </View>
                        <View className="gap-2 items-start w-full flex-1">
                            <View className="bg-[#e7f3e8] dark:bg-gray-800 p-2 rounded-2xl rounded-bl-none shadow-sm w-full">
                                <Image
                                    source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1iiTMa2cftTYsHem9HSMU2h6W1VpsWWwmEOL4EaalUgn5pJJvr8bWI_2bE8YzniI6k9DZQhpgvN1S0PcX6Vfd9z5XpC-10vtvYRB6tLQl5nU5ooXGoiHbBMYN73StQVjxCCYX20TUg6CAFAEz4-5TxIxCsak6YcporVUbzMV5LArcKGs4VMfJTXQQjEmMmWvUINhPoq0SFqXeRJ-6lQ_PQrgf5rg0klZfHK68fdeoppm8kegcYbaoeVOZyGOXWkFFT_S4aIKz4oGw" }}
                                    className="aspect-video w-full rounded-xl mb-1"
                                />
                                <Text className="text-sm font-medium leading-normal text-[#0d1b0f] dark:text-white px-2 pt-2 pb-1 font-display">North field is doing excellent. Moisture levels are perfect for this stage of growth.</Text>
                            </View>
                            <Text className="text-[10px] text-gray-500 ml-1 font-display">08:15 AM</Text>
                        </View>
                    </View>

                    {/* Sent Message */}
                    <View className="flex-row items-end justify-end gap-3 ml-auto max-w-[85%] self-end">
                        <View className="items-end gap-1">
                            <View className="bg-primary rounded-2xl rounded-br-none px-4 py-3 shadow-md">
                                <Text className="text-sm font-medium leading-normal text-white font-display">The progress looks impressive! Keep up the good work. I'll check the investment dashboard for the monthly report.</Text>
                            </View>
                            <View className="flex-row items-center gap-1">
                                <Text className="text-[10px] text-gray-500 mr-1 font-display">09:30 AM</Text>
                                <MaterialIcons name="done-all" size={14} color="#11d421" />
                            </View>
                        </View>
                    </View>

                </ScrollView>

                {/* Bottom Input Bar */}
                <View className="p-4 bg-background-light dark:bg-background-dark border-t border-gray-100 dark:border-gray-800">
                    <View className="flex-row items-center gap-3">
                        <TouchableOpacity className="items-center justify-center size-10 rounded-full bg-gray-100 dark:bg-gray-800">
                            <MaterialIcons name="add-circle" size={24} color="#4b5563" />
                        </TouchableOpacity>
                        <TouchableOpacity className="items-center justify-center size-10 rounded-full bg-gray-100 dark:bg-gray-800">
                            <MaterialIcons name="photo-camera" size={24} color="#4b5563" />
                        </TouchableOpacity>
                        <View className="flex-1 relative">
                            <TextInput
                                className="w-full bg-gray-100 dark:bg-gray-800 border-none rounded-full px-5 py-3 text-sm dark:text-white font-display"
                                placeholder="Message..."
                                placeholderTextColor="#6b7280"
                            />
                        </View>
                        <TouchableOpacity className="items-center justify-center size-10 rounded-full bg-primary shadow-lg shadow-primary/30">
                            <MaterialIcons name="send" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
