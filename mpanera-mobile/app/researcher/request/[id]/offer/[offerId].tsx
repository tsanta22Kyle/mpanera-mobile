import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useOfferStore } from '@/store/useOfferStore';
import { useRequestStore } from '@/store/useRequestStore';

export default function OfferDetailScreen() {
  const { id: requestId, offerId } = useLocalSearchParams<{ id: string; offerId: string }>();
  
  const sampleOffers = useOfferStore((state) => state.sampleOffers);
  const requests = useRequestStore((state) => state.requests);
  
  const offer = sampleOffers.find((o) => o.id === offerId) || sampleOffers[0];
  const request = requests.find((r) => r.id === requestId);

  const handlePayment = () => {
    router.push({
      pathname: `/researcher/request/${requestId}/payment`,
      params: {
        providerName: offer.name,
        providerPhone: '034 XX XXX XX', // Simulé
        providerEmail: `${offer.name?.toLowerCase().replace(' ', '')}@email.com`, // Simulé
      }
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 32 }}>
        <View className="px-5 pb-8 pt-3">
          <View className="mb-8 flex-row items-center justify-between">
            <TouchableOpacity
              onPress={() => router.back()}
              className="h-11 w-11 items-center justify-center rounded-2xl bg-slate-100">
              <Ionicons name="chevron-back" size={20} color="#6B6E50" />
            </TouchableOpacity>
            <Text className="text-lg font-bold text-slate-900">Détail de l'offre</Text>
            <View className="w-11" />
          </View>

          <View className="mb-6 items-center">
            <View className="mb-4 h-24 w-24 items-center justify-center rounded-full bg-primary-soft">
              <Ionicons name="person" size={40} color="#6B6E50" />
            </View>
            <Text className="text-2xl font-bold text-slate-900">{offer.name}</Text>
            <View className="mt-2 flex-row items-center rounded-full bg-amber-50 px-3 py-1">
              <Ionicons name="star" size={14} color="#F59E0B" />
              <Text className="ml-1 text-sm font-bold text-amber-700">{offer.rating} ★</Text>
            </View>
          </View>

          <View className="mb-8 rounded-[28px] bg-slate-50 p-5">
            <Text className="text-xs font-semibold uppercase tracking-[1px] text-slate-400">
              Ma proposition
            </Text>
            <Text className="mt-3 text-base leading-7 text-slate-700">
              {offer.description}
            </Text>
          </View>

          <View className="mb-8 flex-row gap-3">
            <View className="flex-1 rounded-[22px] border border-slate-100 bg-white p-4">
              <Text className="text-xs font-semibold uppercase tracking-[1px] text-slate-400">
                Prix
              </Text>
              <Text className="mt-2 text-lg font-bold text-primary">{offer.price}</Text>
            </View>
            <View className="flex-1 rounded-[22px] border border-slate-100 bg-white p-4">
              <Text className="text-xs font-semibold uppercase tracking-[1px] text-slate-400">
                Délai
              </Text>
              <Text className="mt-2 text-base font-bold text-slate-900">{offer.delay}</Text>
            </View>
          </View>

          <View className="mb-8">
            <Text className="mb-4 text-lg font-bold text-slate-900">Pourquoi me choisir ?</Text>
            <View className="gap-3">
              <View className="flex-row items-center gap-3">
                <Ionicons name="checkmark-circle" size={20} color="#6B6E50" />
                <Text className="text-sm text-slate-600">Identité vérifiée par Mpanera</Text>
              </View>
              <View className="flex-row items-center gap-3">
                <Ionicons name="checkmark-circle" size={20} color="#6B6E50" />
                <Text className="text-sm text-slate-600">Matériel professionnel inclus</Text>
              </View>
              <View className="flex-row items-center gap-3">
                <Ionicons name="checkmark-circle" size={20} color="#6B6E50" />
                <Text className="text-sm text-slate-600">Plus de 50 interventions réussies</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            onPress={handlePayment}
            className="rounded-[26px] bg-primary px-5 py-5">
            <Text className="text-center text-base font-bold text-white">
              Choisir ce prestataire (5 000 Ar)
            </Text>
          </TouchableOpacity>
          
          <Text className="mt-4 text-center text-xs text-slate-400 px-6">
            En choisissant ce prestataire, vous débloquerez ses coordonnées après paiement des frais de mise en relation.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
