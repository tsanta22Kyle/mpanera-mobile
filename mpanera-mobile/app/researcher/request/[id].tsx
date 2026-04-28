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
  const { id, paid, method, providerName, providerPhone, providerEmail } = useLocalSearchParams<{
    id: string;
    paid?: string;
    method?: string;
    providerName?: string;
    providerPhone?: string;
    providerEmail?: string;
  }>();
  const request = recentRequests.find((item) => item.id === id) ?? recentRequests[0];
  const paymentDone = paid === '1';

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}>
        <View className="px-5 pb-8 pt-3">
          <View className="mb-8 flex-row items-center justify-between">
            <TouchableOpacity
              onPress={() => router.back()}
              className="h-11 w-11 items-center justify-center rounded-2xl bg-slate-100">
              <Ionicons name="chevron-back" size={20} color="#6B6E50" />
            </TouchableOpacity>

            <Text className="text-base font-semibold text-slate-400">Demande</Text>
          </View>

          {paymentDone ? (
            <View className="mb-6 rounded-[22px] border border-primary bg-primary-soft px-4 py-4">
              <View className="flex-row items-start">
                <View className="mr-3 mt-1 h-9 w-9 items-center justify-center rounded-full bg-primary-accent">
                  <Ionicons name="notifications-outline" size={18} color="#FFFFFF" />
                </View>
                <View className="flex-1">
                  <Text className="text-sm font-bold text-slate-900">Paiement confirmé</Text>
                  <Text className="mt-1 text-sm leading-6 text-slate-700">
                    Contact débloqué via {method === 'mvola' ? 'Mvola' : 'Orange Money'}.
                  </Text>
                  <Text className="mt-3 text-sm font-semibold text-slate-900">
                    {providerName}
                  </Text>
                  <Text className="mt-1 text-sm text-slate-700">{providerPhone}</Text>
                  <Text className="mt-1 text-sm text-slate-700">{providerEmail}</Text>
                </View>
              </View>
            </View>
          ) : null}

          <View className="mb-8">
            <View className="mb-4 flex-row items-start justify-between">
              <View className="mr-4 flex-1">
                <Text className="text-[28px] font-bold leading-9 text-slate-900">{request.title}</Text>
                <Text className="mt-2 text-sm text-slate-500">
                  {request.category} · {request.subtitle}
                </Text>
              </View>

              <View className="rounded-full bg-primary-soft px-3 py-2">
                <Text className="text-xs font-bold text-slate-900">{request.status}</Text>
              </View>
            </View>

            <Text className="text-sm leading-6 text-slate-600">{request.description}</Text>
          </View>

          <View className="mb-8 flex-row gap-3">
            <View className="flex-1 rounded-[20px] bg-slate-50 px-4 py-4">
              <Text className="text-xs font-semibold uppercase tracking-[1px] text-slate-400">
                Budget
              </Text>
              <Text className="mt-2 text-sm font-bold text-slate-900">{request.budget}</Text>
            </View>
            <View className="flex-1 rounded-[20px] bg-slate-50 px-4 py-4">
              <Text className="text-xs font-semibold uppercase tracking-[1px] text-slate-400">
                Date
              </Text>
              <Text className="mt-2 text-sm font-bold text-slate-900">{request.date}</Text>
            </View>
          </View>

          <View className="mb-4 flex-row items-center justify-between">
            <Text className="text-[24px] font-bold text-slate-900">Offres</Text>
            <Text className="text-sm font-semibold text-primary">{request.offers}</Text>
          </View>

          <View className="gap-3">
            {sampleOffers.slice(0, Math.max(request.offers, 1)).map((offer) => (
              <TouchableOpacity key={offer.id} className="rounded-[22px] bg-slate-50 px-4 py-4">
                <View className="flex-row items-center justify-between">
                  <View className="flex-1 pr-3">
                    <Text className="text-base font-bold text-slate-900">{offer.name}</Text>
                    <Text className="mt-1 text-sm text-slate-500">
                      {offer.rating} ★ · {offer.delay}
                    </Text>
                  </View>

                  <Text className="text-base font-bold text-primary">{offer.price}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {paymentDone ? (
            <TouchableOpacity className="mt-6 rounded-[24px] bg-primary-soft px-5 py-5">
              <Text className="text-center text-base font-bold text-slate-900">
                Contact déjà débloqué
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => router.push(`/researcher/request/${request.id}/payment`)}
              className="mt-6 rounded-[24px] bg-primary px-5 py-5">
              <Text className="text-center text-base font-bold text-white">
                Payer les frais de contact
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
