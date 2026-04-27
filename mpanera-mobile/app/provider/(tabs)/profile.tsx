import { Ionicons } from '@expo/vector-icons';
import type { ComponentProps } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type IoniconName = ComponentProps<typeof Ionicons>['name'];

const profileActions = [
  { icon: 'person-outline' as IoniconName, label: 'Informations personnelles', value: 'Modifier profil' },
  { icon: 'construct-outline' as IoniconName, label: 'Services proposés', value: 'Plomberie, dépannage' },
  { icon: 'location-outline' as IoniconName, label: 'Zones d’intervention', value: 'Analakely et alentours' },
  { icon: 'shield-checkmark-outline' as IoniconName, label: 'Vérification', value: 'Compte vérifié' },
  { icon: 'chatbubble-ellipses-outline' as IoniconName, label: 'Support', value: 'Centre d’aide' },
];

export default function ProviderProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="bg-primary px-5 pb-8 pt-3">
          <View className="items-center">
            <View className="mb-4 h-24 w-24 items-center justify-center rounded-full border-4 border-white/20 bg-white/15">
              <Ionicons name="person" size={42} color="#FFFFFF" />
            </View>
            <Text className="text-2xl font-bold text-white">Toky Rakoto</Text>
            <Text className="mt-2 text-sm text-white/75">Prestataire · Plomberie</Text>

            <View className="mt-4 rounded-full bg-white px-4 py-2">
              <Text className="text-xs font-bold uppercase tracking-[1.4px] text-primary-accent">
                Profil vérifié
              </Text>
            </View>
          </View>
        </View>

        <View className="-mt-4 px-5">
          <View className="mb-5 flex-row gap-3">
            <View className="flex-1 rounded-3xl bg-white p-4">
              <Text className="text-xs font-semibold uppercase tracking-[1.2px] text-slate-400">
                Offres envoyées
              </Text>
              <Text className="mt-2 text-3xl font-bold text-slate-900">24</Text>
              <Text className="mt-1 text-sm text-slate-500">Ce mois-ci</Text>
            </View>
            <View className="flex-1 rounded-3xl bg-white p-4">
              <Text className="text-xs font-semibold uppercase tracking-[1.2px] text-slate-400">
                Offres acceptées
              </Text>
              <Text className="mt-2 text-3xl font-bold text-slate-900">8</Text>
              <Text className="mt-1 text-sm text-slate-500">Clients intéressés</Text>
            </View>
          </View>

          <View className="mb-5 rounded-[28px] bg-white p-5">
            <Text className="text-xl font-bold text-slate-900">Résumé du profil</Text>
            <Text className="mt-2 text-sm leading-6 text-slate-600">
              Votre compte prestataire est actif. Vous pouvez recevoir des demandes, envoyer vos
              offres et attendre qu&apos;un client vous choisisse.
            </Text>

            <View className="mt-4 rounded-[24px] bg-primary-soft p-4">
              <Text className="text-sm font-semibold text-slate-900">Conseil</Text>
              <Text className="mt-2 text-sm leading-6 text-slate-700">
                Gardez votre description claire et répondez vite pour recevoir plus de choix.
              </Text>
            </View>
          </View>

          <View className="mb-3 flex-row items-center justify-between">
            <Text className="text-2xl font-bold text-slate-900">Paramètres du profil</Text>
            <TouchableOpacity>
              <Text className="text-sm font-semibold text-primary">Gérer</Text>
            </TouchableOpacity>
          </View>

          <View className="gap-3">
            {profileActions.map((item) => (
              <TouchableOpacity
                key={item.label}
                className="flex-row items-center rounded-[24px] bg-white px-4 py-4">
                <View className="mr-3 h-11 w-11 items-center justify-center rounded-2xl bg-slate-100">
                  <Ionicons name={item.icon} size={20} color="#334155" />
                </View>
                <View className="flex-1">
                  <Text className="text-sm font-bold text-slate-900">{item.label}</Text>
                  <Text className="mt-1 text-sm text-slate-500">{item.value}</Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color="#94A3B8" />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
