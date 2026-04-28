import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const roleOptions = [
  {
    id: 'client',
    title: 'Je suis client',
    text: 'Je veux poster une demande et comparer les offres.',
    icon: 'person-outline' as const,
    route: '/onboarding/client',
  },
  {
    id: 'provider',
    title: 'Je suis prestataire',
    text: 'Je veux recevoir des demandes et envoyer mes offres.',
    icon: 'construct-outline' as const,
    route: '/onboarding/provider',
  },
];

export default function OnboardingStartScreen() {
  const [role, setRole] = useState<'client' | 'provider' | null>(null);

  const continueToNext = () => {
    if (!role) return;
    const target = roleOptions.find((item) => item.id === role)?.route;
    if (target) router.push(target as '/onboarding/client' | '/onboarding/provider');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 32 }}>
        <View className="bg-white px-5 pb-6 pt-3">
          <View className="flex-row items-center justify-between">
            <TouchableOpacity
              onPress={() => router.replace('/researcher')}
              className="rounded-full bg-slate-100 px-4 py-2">
              <Text className="text-sm font-bold text-primary">Passer</Text>
            </TouchableOpacity>
          </View>

          <View className="items-center pt-8">
            <Image
              source={require('@/assets/images/onboarding_img.png')}
              resizeMode="contain"
              className="h-[320px] w-full max-w-[340px]"
            />
          </View>

          <Text className="mt-6 text-center text-[30px] font-bold leading-10 text-slate-900">
            Bienvenue sur Mpanera
          </Text>
          <Text className="mt-3 text-center text-sm leading-6 text-slate-500">
            Choisissez votre rôle pour aller vers le bon espace.
          </Text>
        </View>

        <View className="px-5">
          <View className="mb-5 rounded-[28px] bg-white p-5">
            <View className="mt-4 gap-3">
              {roleOptions.map((option) => {
                const selected = role === option.id;

                return (
                  <TouchableOpacity
                    key={option.id}
                    onPress={() => setRole(option.id as 'client' | 'provider')}
                    className={`rounded-[24px] border px-4 py-4 ${
                      selected ? 'border-primary bg-primary-soft/20' : 'border-slate-200 bg-white'
                    }`}>
                    <View className="flex-row items-start">
                      <View
                        className={`mr-3 h-11 w-11 items-center justify-center rounded-2xl ${
                          selected ? 'bg-primary-soft' : 'bg-slate-100'
                        }`}>
                        <Ionicons name={option.icon} size={20} color="#6B6E50" />
                      </View>
                      <View className="flex-1">
                        <Text className="text-base font-bold text-slate-900">{option.title}</Text>
                        <Text className="mt-1 text-sm leading-6 text-slate-600">{option.text}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <TouchableOpacity
            onPress={continueToNext}
            disabled={!role}
            className={`rounded-[26px] px-5 py-5 ${role ? 'bg-primary' : 'bg-slate-300'}`}>
            <Text className="text-center text-base font-bold text-white">Continuer</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
