import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useOfferStore } from '@/store/useOfferStore';
import { useNotificationStore } from '@/store/useNotificationStore';

const offerFilters = ['Toutes', 'Envoyées', 'En attente', 'Acceptées'];

export default function ProviderOffersScreen() {
  const offers = useOfferStore((state) => state.offers);
  const notifications = useNotificationStore((state) => state.notifications);
  const unreadCount = notifications.filter(n => !n.read).length;
  const [selectedFilter, setSelectedFilter] = useState('Toutes');

  const filteredOffers = offers.filter((offer) => {
    if (selectedFilter === 'Toutes') return true;
    return offer.status === selectedFilter;
  });

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

          <TouchableOpacity 
            onPress={() => router.push('/provider/notifications')}
            className="h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
            <Ionicons name="notifications-outline" size={20} color="#FFFFFF" />
            {unreadCount > 0 && (
              <View className="absolute -right-1 -top-1 h-5 w-5 items-center justify-center rounded-full bg-red-500">
                <Text className="text-[10px] font-bold text-white">{unreadCount}</Text>
              </View>
            )}
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
            <Text className="text-sm font-semibold text-primary">{filteredOffers.length} au total</Text>
          </View>

          <View className="mb-5 rounded-[24px] bg-white p-4">
            <Text className="mb-3 text-lg font-bold text-slate-900">Filtres simples</Text>
            <View className="flex-row flex-wrap gap-2">
              {offerFilters.map((filter) => {
                const isSelected = selectedFilter === filter;
                return (
                  <TouchableOpacity
                    key={filter}
                    onPress={() => setSelectedFilter(filter)}
                    className={`rounded-full px-4 py-3 ${isSelected ? 'bg-primary' : 'bg-slate-100'}`}>
                    <Text
                      className={`text-sm font-semibold ${isSelected ? 'text-white' : 'text-slate-700'}`}>
                      {filter}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <View className="gap-3">
            {filteredOffers.map((offer) => (
              <TouchableOpacity 
                key={offer.id} 
                onPress={() => router.push(`/provider/offer/${offer.id}`)}
                className="flex-row items-center rounded-[24px] bg-white p-4 shadow-sm">
                <View className="flex-1 pr-3">
                  <View className="flex-row items-center gap-2">
                    <Text className="text-[17px] font-bold text-slate-900">{offer.title}</Text>
                    <View className="rounded-full bg-primary-soft px-2 py-1">
                      <Text className="text-[10px] font-bold text-slate-700">{offer.status}</Text>
                    </View>
                  </View>
                  <Text className="mt-1 text-sm text-slate-400">
                    {offer.client} · {offer.location}
                  </Text>
                  <Text className="mt-1 text-sm font-bold text-primary">{offer.price}</Text>
                </View>

                <View className="h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                  <Ionicons name="chevron-forward" size={18} color="#6B6E50" />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
