import { View, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ExploreFarmland() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark" edges={['top']}>
      <View className="flex-1 relative">
        {/* Top App Bar */}
        <View className="flex-row items-center justify-between px-4 py-4 bg-background-light/80 dark:bg-background-dark/80 z-50">
          <View className="flex-row items-center gap-2">
            <MaterialIcons name="local-florist" size={28} color="#11d421" />
            <Text className="text-[#0d1b0f] dark:text-white text-xl font-bold leading-tight font-display">Explore Lands</Text>
          </View>
          <View className="flex-row items-center gap-3">
            <TouchableOpacity className="p-2 rounded-full bg-white dark:bg-white/10 shadow-sm items-center justify-center">
              <MaterialIcons name="search" size={24} color="#0d1b0f" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 rounded-full bg-white dark:bg-white/10 shadow-sm items-center justify-center relative">
              <MaterialIcons name="notifications" size={24} color="#0d1b0f" />
              <View className="absolute top-2 right-2 size-2 rounded-full bg-primary" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Filter Chips */}
        <View className="px-4 pb-2">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12 }}>
            <TouchableOpacity className="flex-row h-10 items-center justify-center gap-x-2 rounded-xl bg-primary px-4">
              <MaterialIcons name="filter-list" size={18} color="white" />
              <Text className="text-sm font-semibold text-white font-display">Filters</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row h-10 items-center justify-center gap-x-2 rounded-xl bg-white dark:bg-white/10 px-4 border border-gray-100 dark:border-white/5">
              <MaterialIcons name="agriculture" size={18} color="#0d1b0f" />
              <Text className="text-sm font-medium text-[#0d1b0f] dark:text-white font-display">Crop</Text>
              <MaterialIcons name="expand-more" size={18} color="#0d1b0f" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row h-10 items-center justify-center gap-x-2 rounded-xl bg-white dark:bg-white/10 px-4 border border-gray-100 dark:border-white/5">
              <MaterialIcons name="location-on" size={18} color="#0d1b0f" />
              <Text className="text-sm font-medium text-[#0d1b0f] dark:text-white font-display">Location</Text>
              <MaterialIcons name="expand-more" size={18} color="#0d1b0f" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row h-10 items-center justify-center gap-x-2 rounded-xl bg-white dark:bg-white/10 px-4 border border-gray-100 dark:border-white/5">
              <MaterialIcons name="verified-user" size={18} color="#0d1b0f" />
              <Text className="text-sm font-medium text-[#0d1b0f] dark:text-white font-display">Risk</Text>
              <MaterialIcons name="expand-more" size={18} color="#0d1b0f" />
            </TouchableOpacity>
          </ScrollView>
        </View>

        <ScrollView contentContainerClassName="px-4 pb-24 pt-4 space-y-6">
          {/* Card 1 */}
          <View className="rounded-xl shadow-md bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 overflow-hidden">
            <ImageBackground
              source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTMzob97wzOdbextG8kkBB6JD_9Vcnr4fqZYSqKq0eUTmIH5mE8130doxFGqal7qrNn2HwWZNhHe49a24nPp6u8RtFbXlUXc6Z5Ee9ZJLeaWX8iA3wz3MXBmA6Yrt-tZd8CjQR1J5ZdXxsgw6sjaevpxmJnTk73OJHBQ0rNUakVSbOAhwX6Xxic8TBAHI0pwGF3iZDFYeK4Q8jRh1hpU1Bsv-I6r9kaL2YNsfZTeKvMvMrQi59rjN8L-tKjC29QvB7DSotS3Gy4K6Z" }}
              className="w-full aspect-[16/10]"
            >
              <View className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-black/60 rounded-full flex-row items-center gap-1">
                <MaterialIcons name="location-on" size={12} color="#11d421" />
                <Text className="text-[10px] font-bold uppercase tracking-wider text-[#0d1b0f] dark:text-white font-display">Ghana</Text>
              </View>
              <View className="absolute top-4 right-4 px-3 py-1 bg-primary rounded-full flex-row items-center gap-1">
                <MaterialIcons name="eco" size={12} color="white" />
                <Text className="text-[10px] font-bold uppercase tracking-wider text-white font-display">Cocoa</Text>
              </View>
            </ImageBackground>
            <View className="p-5">
              <View className="flex-row justify-between items-start mb-2">
                <View>
                  <Text className="text-primary text-xs font-bold uppercase tracking-widest mb-1 font-display">High Growth</Text>
                  <Text className="text-xl font-extrabold text-[#0d1b0f] dark:text-white leading-tight font-display">Organic Cocoa Plantation</Text>
                </View>
                <View className="bg-primary/10 px-2 py-1 rounded">
                  <Text className="text-primary text-xs font-bold font-display">14.5% ROI</Text>
                </View>
              </View>
              <Text className="text-[#4c9a52] dark:text-gray-400 text-sm mb-4 font-display">Kumasi, Ashanti Region</Text>

              <View className="flex-row gap-4 mb-5 border-t border-gray-50 dark:border-white/5 pt-4">
                <View className="flex-1">
                  <Text className="text-gray-500 text-[10px] uppercase font-bold tracking-tighter font-display">Min Investment</Text>
                  <Text className="text-[#0d1b0f] dark:text-white font-bold font-display">$5,000</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-gray-500 text-[10px] uppercase font-bold tracking-tighter font-display">Risk Level</Text>
                  <Text className="text-[#0d1b0f] dark:text-white font-bold font-display">Medium</Text>
                </View>
              </View>

              <TouchableOpacity
                className="w-full bg-primary py-3 rounded-xl flex-row items-center justify-center gap-2 shadow-sm"
                onPress={() => router.push("/land-investment-details")}
              >
                <Text className="text-white font-bold font-display">View Investment Details</Text>
                <MaterialIcons name="arrow-forward-ios" size={14} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Card 2 */}
          <View className="rounded-xl shadow-md bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 overflow-hidden">
            <ImageBackground
              source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW3stKw_cvh6eN8sKfzcuwfxstYIncK6aDfWO4XN7opQLOF5g9HpNHoQR8k9FhAxXlmvrLcEe_rBL9GFZp3BaYM5NfyJGO8Jq0CHQJQAfhWWacC8wtM2pJV5hsVaHcLA5JceYwnl-CiKsCKEyzESBI6N6KTeEyva1jT2-aI4fZqi7erd8z8HsUwN9smEUnqlRIcgfsvq2B_ejAfWDKB5jLA21-Y6FvwkL2ONCD6KML_34w4ieZEWzEmD4PlfKDXtexCHj--Uplfx-O" }}
              className="w-full aspect-[16/10]"
            >
              <View className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-black/60 rounded-full flex-row items-center gap-1">
                <MaterialIcons name="location-on" size={12} color="#11d421" />
                <Text className="text-[10px] font-bold uppercase tracking-wider text-[#0d1b0f] dark:text-white font-display">Kenya</Text>
              </View>
              <View className="absolute top-4 right-4 px-3 py-1 bg-primary rounded-full flex-row items-center gap-1">
                <MaterialIcons name="grain" size={12} color="white" />
                <Text className="text-[10px] font-bold uppercase tracking-wider text-white font-display">Maize</Text>
              </View>
            </ImageBackground>
            <View className="p-5">
              <View className="flex-row justify-between items-start mb-2">
                <View>
                  <Text className="text-primary text-xs font-bold uppercase tracking-widest mb-1 font-display">Stable Return</Text>
                  <Text className="text-xl font-extrabold text-[#0d1b0f] dark:text-white leading-tight font-display">Premium Maize Farm</Text>
                </View>
                <View className="bg-primary/10 px-2 py-1 rounded">
                  <Text className="text-primary text-xs font-bold font-display">11.2% ROI</Text>
                </View>
              </View>
              <Text className="text-[#4c9a52] dark:text-gray-400 text-sm mb-4 font-display">Nakuru County, Rift Valley</Text>

              <View className="flex-row gap-4 mb-5 border-t border-gray-50 dark:border-white/5 pt-4">
                <View className="flex-1">
                  <Text className="text-gray-500 text-[10px] uppercase font-bold tracking-tighter font-display">Min Investment</Text>
                  <Text className="text-[#0d1b0f] dark:text-white font-bold font-display">$2,500</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-gray-500 text-[10px] uppercase font-bold tracking-tighter font-display">Risk Level</Text>
                  <Text className="text-[#0d1b0f] dark:text-white font-bold font-display">Low</Text>
                </View>
              </View>

              <TouchableOpacity className="w-full bg-primary py-3 rounded-xl flex-row items-center justify-center gap-2 shadow-sm"
                onPress={() => router.push("/land-investment-details")}
              >
                <Text className="text-white font-bold font-display">View Investment Details</Text>
                <MaterialIcons name="arrow-forward-ios" size={14} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Card 3 */}
          <View className="rounded-xl shadow-md bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 overflow-hidden">
            <ImageBackground
              source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgi0k0kK7EAVJlM4HPznIpFto02Hdr1OgTAWpp1UL2KyZekFzTUM-TK5T8h-XpAJiEZRujMP49MAOwU_yLfEH90L2mg9OwY9iRZTeplIGkkKNWju7vh4ydOjRPhGLbY5D9yPb4allCH02lJchdkLR2E2E0qS4opSHGNAfaRMb_L9dlps2qCkfF2t-5eZKW6U3mBNN0tJIeelQTpjY9Xt2QMaB2vWlAEJvfXa-9tTSY9cZEwkQnLuCrtaA4RKxll7fON535xrH5ZCdb" }}
              className="w-full aspect-[16/10]"
            >
              <View className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-black/60 rounded-full flex-row items-center gap-1">
                <MaterialIcons name="location-on" size={12} color="#11d421" />
                <Text className="text-[10px] font-bold uppercase tracking-wider text-[#0d1b0f] dark:text-white font-display">South Africa</Text>
              </View>
              <View className="absolute top-4 right-4 px-3 py-1 bg-primary rounded-full flex-row items-center gap-1">
                <MaterialIcons name="grass" size={12} color="white" />
                <Text className="text-[10px] font-bold uppercase tracking-wider text-white font-display">Wheat</Text>
              </View>
            </ImageBackground>
            <View className="p-5">
              <View className="flex-row justify-between items-start mb-2">
                <View>
                  <Text className="text-primary text-xs font-bold uppercase tracking-widest mb-1 font-display">Low Risk</Text>
                  <Text className="text-xl font-extrabold text-[#0d1b0f] dark:text-white leading-tight font-display">Sustainable Wheat Field</Text>
                </View>
                <View className="bg-primary/10 px-2 py-1 rounded">
                  <Text className="text-primary text-xs font-bold font-display">12.0% ROI</Text>
                </View>
              </View>
              <Text className="text-[#4c9a52] dark:text-gray-400 text-sm mb-4 font-display">Free State Province</Text>

              <View className="flex-row gap-4 mb-5 border-t border-gray-50 dark:border-white/5 pt-4">
                <View className="flex-1">
                  <Text className="text-gray-500 text-[10px] uppercase font-bold tracking-tighter font-display">Min Investment</Text>
                  <Text className="text-[#0d1b0f] dark:text-white font-bold font-display">$8,000</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-gray-500 text-[10px] uppercase font-bold tracking-tighter font-display">Risk Level</Text>
                  <Text className="text-[#0d1b0f] dark:text-white font-bold font-display">Low</Text>
                </View>
              </View>

              <TouchableOpacity className="w-full bg-primary py-3 rounded-xl flex-row items-center justify-center gap-2 shadow-sm">
                <Text className="text-white font-bold font-display">View Investment Details</Text>
                <MaterialIcons name="arrow-forward-ios" size={14} color="white" />
              </TouchableOpacity>
            </View>
          </View>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
