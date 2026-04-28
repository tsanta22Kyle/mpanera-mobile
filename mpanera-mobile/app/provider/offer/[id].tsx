import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useOfferStore } from '@/store/useOfferStore';

export default function ProviderOfferDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const offers = useOfferStore((state) => state.offers);
  const offer = offers.find((o) => o.id === id);

  if (!offer) {
    return (
      <SafeAreaView className="flex-1 bg-white items-center justify-center">
        <Text>Offre non trouvée</Text>
        <TouchableOpacity onPress={() => router.back()} className="mt-4 bg-primary px-4 py-2 rounded-xl">
          <Text className="text-white">Retour</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

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
            <Text className="text-lg font-bold text-slate-900">Détail de mon offre</Text>
            <View className="w-11" />
          </View>

          <View className="mb-6 rounded-[28px] bg-primary-soft p-6">
            <View className="flex-row justify-between items-start mb-4">
              <View className="flex-1">
                <Text className="text-2xl font-bold text-slate-900">{offer.title}</Text>
                <Text className="mt-1 text-sm text-slate-600">{offer.client} · {offer.location}</Text>
              </View>
              <View className="rounded-full bg-white px-3 py-1">
                <Text className="text-xs font-bold text-primary">{offer.status}</Text>
              </View>
            </View>
            
            <View className="flex-row gap-4 mt-2">
              <View>
                <Text className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Prix proposé</Text>
                <Text className="text-lg font-bold text-primary">{offer.price}</Text>
              </View>
              <View>
                <Text className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Disponibilité</Text>
                <Text className="text-lg font-bold text-slate-900">{offer.schedule}</Text>
              </View>
            </View>
          </View>

          <View className="mb-8">
            <Text className="mb-4 text-lg font-bold text-slate-900">Ma proposition au client</Text>
            <View className="rounded-[24px] bg-slate-50 p-5 border border-slate-100">
              <Text className="text-base leading-7 text-slate-600">
                {offer.description || "Vous avez proposé vos services pour cette demande. Le client examinera votre offre et vous contactera si vous êtes sélectionné."}
              </Text>
            </View>
          </View>

          <View className="mb-8">
            <Text className="mb-4 text-lg font-bold text-slate-900">Statut de la mise en relation</Text>
            <View className="flex-row items-center gap-4 bg-slate-50 p-4 rounded-2xl">
              <View className="h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                <Ionicons name="time-outline" size={20} color="#B45309" />
              </View>
              <View className="flex-1">
                <Text className="text-sm font-bold text-slate-900">En attente du client</Text>
                <Text className="text-xs text-slate-500">Le client n'a pas encore débloqué vos coordonnées.</Text>
              </View>
            </View>
          </View>

          {offer.status === 'En attente' && (
            <View className="gap-3">
              <TouchableOpacity className="rounded-[22px] bg-slate-900 py-5">
                <Text className="text-center text-base font-bold text-white">Modifier mon offre</Text>
              </TouchableOpacity>
              <TouchableOpacity className="rounded-[22px] border border-red-200 py-5">
                <Text className="text-center text-base font-bold text-red-500">Retirer mon offre</Text>
              </TouchableOpacity>
            </View>
          )}

          {offer.status === 'Acceptée' && (
            <TouchableOpacity className="rounded-[22px] bg-green-500 py-5">
              <Text className="text-center text-base font-bold text-white">Voir les coordonnées du client</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
