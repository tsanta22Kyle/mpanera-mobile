import { Ionicons } from '@expo/vector-icons';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { providerOffers } from '../data';

const offerFilters = ['Toutes', 'Envoyées', 'En attente', 'Acceptées'];

export default function ProviderOffersScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <View className="bg-primary px-5 pb-5 pt-3">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <View className="mr-3 h-11 w-11 items-center justify-center rounded-2xl bg-white/15">
              <Ionicons name="briefcase-outline" size={24} color="#FFFFFF" />
            </View>
            <Text className="text-[30px] font-bold text-white">Mpanera</Text>
          </View>

          <TouchableOpacity className="h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
            <Ionicons name="notifications-outline" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}>
        <View className="px-4 pt-5">
          <View className="mb-5 flex-row items-center justify-between">
            <Text className="text-[28px] font-bold text-slate-900">Mes offres</Text>
            <Text className="text-sm font-semibold text-primary">{providerOffers.length} au total</Text>
          </View>

          <View className="mb-5 rounded-[24px] bg-white p-4">
            <Text className="mb-3 text-lg font-bold text-slate-900">Filtres simples</Text>
            <View className="flex-row flex-wrap gap-2">
              {offerFilters.map((filter, index) =>
                index === 0 ? (
                  <TouchableOpacity key={filter} className="rounded-full bg-primary px-4 py-3">
                    <Text className="text-sm font-semibold text-white">{filter}</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity key={filter} className="rounded-full bg-slate-100 px-4 py-3">
                    <Text className="text-sm font-semibold text-slate-700">{filter}</Text>
                  </TouchableOpacity>
                )
              )}
            </View>
          </View>

          <View className="gap-3">
            {providerOffers.map((offer) => (
              <TouchableOpacity key={offer.id} className="rounded-[24px] bg-white p-4 shadow-sm">
                <View className="mb-3 flex-row items-start justify-between">
                  <View className="mr-3 flex-1">
                    <Text className="text-[18px] font-bold text-slate-900">{offer.title}</Text>
                    <Text className="mt-1 text-sm font-medium text-slate-400">
                      {offer.client} · {offer.location}
                    </Text>
                  </View>

                  <View className="rounded-full bg-primary-soft px-3 py-2">
                    <Text className="text-xs font-bold text-slate-900">{offer.status}</Text>
                  </View>
                </View>

                <View className="mb-4 flex-row gap-3">
                  <View className="flex-1 rounded-[18px] bg-slate-50 px-3 py-3">
                    <Text className="text-xs font-semibold uppercase tracking-[1px] text-slate-400">
                      Prix
                    </Text>
                    <Text className="mt-1 text-base font-bold text-primary">{offer.price}</Text>
                  </View>
                  <View className="flex-1 rounded-[18px] bg-slate-50 px-3 py-3">
                    <Text className="text-xs font-semibold uppercase tracking-[1px] text-slate-400">
                      Disponibilité
                    </Text>
                    <Text className="mt-1 text-sm font-bold text-slate-800">{offer.schedule}</Text>
                  </View>
                </View>

                <View className="flex-row items-center justify-between">
                  <Text className="text-sm font-medium text-slate-500">Offre envoyée au client</Text>
                  <View className="h-10 w-10 items-center justify-center rounded-full bg-primary-accent">
                    <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
