import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { recentRequests } from '../data';

const sampleOffers = [
  { id: '1', name: 'Toky Services', price: '55 000 Ar', delay: 'Aujourd’hui', rating: '4.8' },
  { id: '2', name: 'Rija Pro', price: '65 000 Ar', delay: 'Demain', rating: '4.6' },
  { id: '3', name: 'Mamy Express', price: '70 000 Ar', delay: 'Sous 2 jours', rating: '4.7' },
];

export default function RequestDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const request = recentRequests.find((item) => item.id === id) ?? recentRequests[0];

  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <View className="bg-primary px-5 pb-5 pt-3">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity
            onPress={() => router.back()}
            className="h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
            <Ionicons name="chevron-back" size={20} color="#FFFFFF" />
          </TouchableOpacity>

          <Text className="text-[22px] font-bold text-white">Détail demande</Text>

          <View className="h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
            <Ionicons name="ellipsis-horizontal" size={18} color="#FFFFFF" />
          </View>
        </View>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 28 }}
        showsVerticalScrollIndicator={false}>
        <View className="px-4 pt-5">
          <View className="mb-4 rounded-[24px] bg-white p-5 shadow-sm">
            <View className="mb-4 flex-row items-start justify-between">
              <View className="mr-4 flex-1">
                <Text className="text-[24px] font-bold text-slate-900">{request.title}</Text>
                <Text className="mt-2 text-sm font-medium text-slate-400">
                  {request.category} · {request.subtitle}
                </Text>
              </View>

              <View className="rounded-full bg-primary-soft px-3 py-2">
                <Text className="text-xs font-bold text-slate-900">{request.status}</Text>
              </View>
            </View>

            <Text className="text-sm leading-6 text-slate-600">{request.description}</Text>

            <View className="mt-5 gap-3">
              <View className="rounded-[18px] bg-slate-50 px-4 py-4">
                <Text className="text-xs font-semibold uppercase tracking-[1px] text-slate-400">
                  Budget
                </Text>
                <Text className="mt-1 text-base font-bold text-slate-900">{request.budget}</Text>
              </View>

              <View className="rounded-[18px] bg-slate-50 px-4 py-4">
                <Text className="text-xs font-semibold uppercase tracking-[1px] text-slate-400">
                  Date souhaitée
                </Text>
                <Text className="mt-1 text-base font-bold text-slate-900">{request.date}</Text>
              </View>

              <View className="rounded-[18px] bg-slate-50 px-4 py-4">
                <Text className="text-xs font-semibold uppercase tracking-[1px] text-slate-400">
                  Offres reçues
                </Text>
                <Text className="mt-1 text-base font-bold text-primary">{request.offers}</Text>
              </View>
            </View>
          </View>

          <View className="mb-4 flex-row items-center justify-between">
            <Text className="text-[24px] font-bold text-slate-900">Offres disponibles</Text>
            <TouchableOpacity>
              <Text className="text-sm font-semibold text-primary">Comparer</Text>
            </TouchableOpacity>
          </View>

          <View className="gap-3">
            {sampleOffers.slice(0, Math.max(request.offers, 1)).map((offer) => (
              <TouchableOpacity key={offer.id} className="rounded-[24px] bg-white p-4 shadow-sm">
                <View className="mb-3 flex-row items-center justify-between">
                  <View className="flex-row items-center">
                    <View className="mr-3 h-11 w-11 items-center justify-center rounded-2xl bg-primary-soft">
                      <Ionicons name="person-outline" size={20} color="#6B6E50" />
                    </View>
                    <View>
                      <Text className="text-base font-bold text-slate-900">{offer.name}</Text>
                      <Text className="mt-1 text-sm text-slate-500">{offer.rating} ★</Text>
                    </View>
                  </View>

                  <View className="rounded-full bg-amber-50 px-3 py-2">
                    <Text className="text-xs font-bold text-amber-700">{offer.delay}</Text>
                  </View>
                </View>

                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-bold text-primary">{offer.price}</Text>
                  <View className="h-10 w-10 items-center justify-center rounded-full bg-primary-accent">
                    <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity className="mt-5 rounded-[24px] bg-primary px-5 py-5">
            <Text className="text-center text-base font-bold text-white">Voir toutes les offres</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
