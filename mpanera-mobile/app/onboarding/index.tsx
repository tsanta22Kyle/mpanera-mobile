import { router } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OnboardingWelcomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}>
        <View className="flex-1 px-5 pb-8 pt-3">
          <View className="flex-row justify-end">
            <TouchableOpacity
              onPress={() => router.replace('/researcher')}
              className="rounded-full bg-slate-100 px-4 py-2">
              <Text className="text-sm font-bold text-primary">Passer</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-1 items-center justify-center">
            <Image
              source={require('@/assets/images/onboarding_img.png')}
              resizeMode="contain"
              className="h-[340px] w-full max-w-[360px]"
            />

            <Text className="mt-8 text-center text-[32px] font-bold leading-10 text-slate-900">
              Bienvenue sur 
            </Text>
            <Image source={require('@/assets/images/logo.png')} ></Image>
            <Text className="mt-4 max-w-[320px] text-center text-sm leading-6 text-slate-500">
              Trouvez un prestataire ou proposez vos services en quelques étapes simples.
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => router.push('/onboarding/role')}
            className="rounded-[26px] bg-primary px-5 py-5">
            <Text className="text-center text-base font-bold text-white">Commencer</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
