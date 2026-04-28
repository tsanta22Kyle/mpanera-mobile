import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const options = [
  {
    id: 'visitor',
    title: 'Continuer comme visiteur',
    text: 'Entrer vite dans l’espace client sans créer de compte maintenant.',
    icon: 'flash-outline' as const,
    tone: 'filled',
  },
  {
    id: 'create',
    title: 'Créer un compte client',
    text: 'Pour garder vos demandes et retrouver vos offres plus tard.',
    icon: 'person-add-outline' as const,
    tone: 'light',
  },
  {
    id: 'login',
    title: 'Se connecter',
    text: 'Si vous avez déjà un compte client.',
    icon: 'log-in-outline' as const,
    tone: 'light',
  },
];

export default function ClientOnboardingScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 32 }}>
        <View className="bg-primary px-5 pb-8 pt-3">
          <View className="flex-row items-center justify-between">
            <TouchableOpacity
              onPress={() => router.back()}
              className="h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
              <Ionicons name="chevron-back" size={20} color="#FFFFFF" />
            </TouchableOpacity>

            <View className="h-2 flex-1 rounded-full bg-white/15 mx-4">
              <View className="h-2 w-1/2 rounded-full bg-primary-soft" />
            </View>

            <Text className="text-sm font-semibold text-white">Étape 2</Text>
          </View>

          <Text className="mt-8 text-[32px] font-bold leading-10 text-white">Espace client</Text>
          <Text className="mt-3 text-sm leading-6 text-white/80">
            Choisissez comment vous voulez continuer.
          </Text>
        </View>

        <View className="-mt-4 px-5">
          <View className="gap-3">
            {options.map((option) => {
              const filled = option.tone === 'filled';

              return (
                <TouchableOpacity
                  key={option.id}
                  onPress={() => router.replace('/researcher')}
                  className={`rounded-[28px] px-5 py-5 ${filled ? 'bg-primary' : 'bg-white'}`}>
                  <View className="flex-row items-center justify-between">
                    <View className="mr-4 flex-1">
                      <View
                        className={`mb-3 h-11 w-11 items-center justify-center rounded-2xl ${
                          filled ? 'bg-white/15' : 'bg-primary-soft'
                        }`}>
                        <Ionicons
                          name={option.icon}
                          size={20}
                          color={filled ? '#FFFFFF' : '#6B6E50'}
                        />
                      </View>
                      <Text className={`text-lg font-bold ${filled ? 'text-white' : 'text-slate-900'}`}>
                        {option.title}
                      </Text>
                      <Text
                        className={`mt-2 text-sm leading-6 ${
                          filled ? 'text-white/80' : 'text-slate-600'
                        }`}>
                        {option.text}
                      </Text>
                    </View>

                    <View
                      className={`h-11 w-11 items-center justify-center rounded-full ${
                        filled ? 'bg-primary-soft' : 'bg-primary-accent'
                      }`}>
                      <Ionicons
                        name="arrow-forward"
                        size={18}
                        color={filled ? '#1F2937' : '#FFFFFF'}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>

          <View className="mt-5 rounded-[26px] bg-white p-5">
            <Text className="text-lg font-bold text-slate-900">Vous êtes client</Text>
            <Text className="mt-3 text-sm leading-6 text-slate-600">
              Vous pourrez poster une demande, recevoir des offres et choisir le bon prestataire.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
