import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUserStore } from '@/store/useUserStore';

const roleOptions = [
  {
    id: 'client',
    title: 'Je suis un client',
    text: 'Je veux trouver un prestataire et comparer les offres.',
    route: '/onboarding/client',
    overlayClassName: 'bg-black/38',
    actionIdleClassName: 'bg-white/20',
    actionSelectedClassName: 'bg-white',
    image: require('@/assets/images/tantine.png'),
  },
  {
    id: 'provider',
    title: 'Je suis un prestataire',
    text: 'Je veux recevoir des demandes et envoyer mes offres.',
    route: '/onboarding/provider',
    overlayClassName: 'bg-black/42',
    actionIdleClassName: 'bg-white/20',
    actionSelectedClassName: 'bg-primary-soft',
    image: require('@/assets/images/plombier.png'),
  },
] as const;

export default function OnboardingRoleScreen() {
  const setRole = useUserStore((state) => state.setRole);

  const goToRole = (nextRole: 'client' | 'provider') => {
    setRole(nextRole);
    const target = roleOptions.find((item) => item.id === nextRole)?.route;
    if (target) {
      router.push(target as '/onboarding/client' | '/onboarding/provider');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}>
        <View className="flex-1 px-5 pb-8 pt-3">
          <View className="flex-row items-center">
            <TouchableOpacity
              onPress={() => router.back()}
              className="h-11 w-11 items-center justify-center rounded-2xl bg-slate-100">
              <Ionicons name="chevron-back" size={20} color="#6B6E50" />
            </TouchableOpacity>

            <View className="ml-4 flex-1">
              <View className="h-2 w-full rounded-full bg-slate-200">
                <View className="h-2 w-1/2 rounded-full bg-primary" />
              </View>
            </View>
          </View>

          <View className="flex-1 justify-center gap-5 pt-8">
            {roleOptions.map((option) => {
              return (
                <TouchableOpacity
                  key={option.id}
                  onPress={() => goToRole(option.id)}
                  className="min-h-[290px] overflow-hidden rounded-[32px]">
                  <ImageBackground
                    source={option.image}
                    resizeMode="cover"
                    imageStyle={{ borderRadius: 32 }}
                    className="min-h-[290px] flex-1 rounded-[32px]">
                    <View className={`absolute inset-0 rounded-[32px] ${option.overlayClassName}`} />
                    <View className="absolute bottom-0 left-0 right-0 h-[132px] rounded-b-[32px] bg-black/50" />
                    <View className="flex-1 rounded-[32px] px-5 py-5">
                      <View className="flex-1 justify-between">
                        <View className="items-end">
                          <View
                            className={`h-10 w-10 items-center justify-center rounded-full ${option.actionIdleClassName}`}>
                            <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
                          </View>
                        </View>

                        <View className="max-w-[65%] rounded-[20px] bg-black/62 px-4 py-3">
                          <Text className="text-xl font-bold text-white">{option.title}</Text>
                          <Text className="mt-1 text-sm leading-6 text-white/90">{option.text}</Text>
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
