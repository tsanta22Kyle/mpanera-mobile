import { Ionicons } from '@expo/vector-icons';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const categories = ['Plomberie', 'Électricité', 'Peinture', 'Nettoyage', 'Beauté', 'Informatique'];

const providers = [
  {
    id: '1',
    name: 'Toky Plumbing',
    category: 'Plomberie',
    area: 'Analamahitsy',
    rating: '4.8',
    badge: 'Vérifié',
    subtitle: 'Intervention rapide à domicile',
  },
  {
    id: '2',
    name: 'Noro Clean Home',
    category: 'Nettoyage',
    area: 'Ankadifotsy',
    rating: '4.7',
    badge: 'Bien noté',
    subtitle: 'Maisons, bureaux et nettoyage régulier',
  },
  {
    id: '3',
    name: 'Mika Elec Pro',
    category: 'Électricité',
    area: 'Ivato',
    rating: '4.9',
    badge: 'Vérifié',
    subtitle: 'Dépannage, installation et contrôle',
  },
];

export default function ResearcherSearchScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="bg-primary px-5 pb-6 pt-3">
          <Text className="text-xs font-semibold uppercase tracking-[1.8px] text-white/70">
            Rechercher
          </Text>
          <Text className="mt-1 text-3xl font-bold text-white">Trouver par besoin ou zone</Text>
          <Text className="mt-3 text-sm leading-6 text-white/80">
            Cherchez un prestataire fiable selon votre besoin ou votre quartier.
          </Text>

          <View className="mt-5 flex-row items-center rounded-[26px] bg-white px-4 py-3">
            <Ionicons name="search-outline" size={20} color="#64748B" />
            <TextInput
              placeholder="Chercher plomberie, nettoyage, quartier..."
              placeholderTextColor="#94A3B8"
              className="ml-3 flex-1 text-base text-slate-900"
            />
          </View>
        </View>

        <View className="-mt-4 px-5">
          <View className="mb-5 rounded-[28px] bg-white p-4">
            <Text className="mb-3 text-lg font-bold text-slate-900">Catégories populaires</Text>
            <View className="flex-row flex-wrap gap-2">
              {categories.map((category, index) =>
                index === 0 ? (
                  <TouchableOpacity key={category} className="rounded-full bg-primary px-4 py-3">
                    <Text className="text-sm font-semibold text-white">{category}</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity key={category} className="rounded-full bg-slate-100 px-4 py-3">
                    <Text className="text-sm font-semibold text-slate-700">{category}</Text>
                  </TouchableOpacity>
                )
              )}
            </View>
          </View>

          <View className="mb-5 flex-row gap-3">
            <View className="flex-1 rounded-3xl bg-white p-4">
              <Text className="text-xs font-semibold uppercase tracking-[1.2px] text-slate-400">
                Actifs aujourd&apos;hui
              </Text>
              <Text className="mt-2 text-3xl font-bold text-slate-900">28</Text>
              <Text className="mt-1 text-sm text-slate-500">Prestataires vérifiés proches</Text>
            </View>
            <View className="flex-1 rounded-3xl bg-white p-4">
              <Text className="text-xs font-semibold uppercase tracking-[1.2px] text-slate-400">
                Zone active
              </Text>
              <Text className="mt-2 text-2xl font-bold text-slate-900">Analakely</Text>
              <Text className="mt-1 text-sm text-slate-500">Plus de réponses dans cette zone</Text>
            </View>
          </View>

          <View className="mb-3 flex-row items-center justify-between">
            <Text className="text-2xl font-bold text-slate-900">Prestataires conseillés</Text>
            <TouchableOpacity>
              <Text className="text-sm font-semibold text-primary">Filtrer</Text>
            </TouchableOpacity>
          </View>

          <View className="gap-3">
            {providers.map((provider) => (
              <TouchableOpacity key={provider.id} className="rounded-[28px] bg-white p-4">
                <View className="flex-row items-start justify-between">
                  <View className="mr-4 flex-1">
                    <View className="mb-3 flex-row items-center">
                      <View className="mr-3 h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft">
                        <Ionicons name="person-outline" size={20} color="#6B6E50" />
                      </View>
                      <View className="flex-1">
                        <Text className="text-base font-bold text-slate-900">{provider.name}</Text>
                        <Text className="mt-1 text-sm text-slate-500">
                          {provider.category} · {provider.area}
                        </Text>
                      </View>
                    </View>

                    <Text className="text-sm leading-6 text-slate-600">{provider.subtitle}</Text>
                  </View>

                  <View className="items-end">
                    <View className="rounded-full bg-amber-50 px-3 py-2">
                      <Text className="text-xs font-bold text-amber-700">{provider.rating} ★</Text>
                    </View>
                    <View className="mt-2 rounded-full bg-primary-soft px-3 py-2">
                      <Text className="text-xs font-bold text-slate-900">{provider.badge}</Text>
                    </View>
                  </View>
                </View>

                <View className="mt-4 flex-row gap-3">
                  <TouchableOpacity className="flex-1 rounded-2xl bg-slate-100 px-4 py-3">
                    <Text className="text-center text-sm font-semibold text-slate-700">
                      Voir profil
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="flex-1 rounded-2xl bg-primary-accent px-4 py-3">
                    <Text className="text-center text-sm font-semibold text-white">
                      Poster une demande
                    </Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
