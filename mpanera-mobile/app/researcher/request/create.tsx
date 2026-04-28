import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Notifications from 'expo-notifications';
import { useRequestStore } from '@/store/useRequestStore';
import { useNotificationStore } from '@/store/useNotificationStore';

const CATEGORIES = [
  'Plomberie',
  'Électricité',
  'Peinture',
  'Nettoyage',
  'Maçonnerie',
  'Menuiserie',
  'Mécanique auto',
  'Informatique',
  'Jardinage',
  'Beauté & Soins',
  'Déménagement',
];

export default function CreateRequestScreen() {
  const addRequest = useRequestStore((state) => state.addRequest);
  const addNotification = useNotificationStore((state) => state.addNotification);
  
  const [form, setForm] = useState({
    title: '',
    category: '',
    subtitle: '',
    budget: '',
    date: '',
    description: '',
  });

  const [showCategories, setShowCategories] = useState(false);

  const handleSubmit = async () => {
    if (!form.title || !form.category) return;
    
    const newRequest = {
      title: form.title,
      category: form.category,
      subtitle: form.subtitle || 'Antananarivo',
      budget: form.budget || 'À discuter',
      date: form.date || 'Dès que possible',
      description: form.description,
    };

    addRequest(newRequest);

    // Simulation d'envoi de notification aux prestataires
    addNotification({
      type: 'demande',
      title: 'Nouvelle demande disponible !',
      body: `${newRequest.title} à ${newRequest.subtitle}. Budget: ${newRequest.budget}`,
      data: { category: newRequest.category },
    });

    // Déclencher une notification push locale (pour la démo)
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Mpanera : Nouvelle demande !",
        body: `Un client recherche un service de ${newRequest.category} à ${newRequest.subtitle}.`,
        data: { screen: 'notifications' },
      },
      trigger: null,
    });
    
    router.back();
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
            <Text className="text-lg font-bold text-slate-900">Nouvelle demande</Text>
            <View className="w-11" />
          </View>

          <View className="gap-4">
            <View>
              <Text className="mb-2 text-sm font-semibold text-slate-700">Titre du besoin</Text>
              <TextInput
                placeholder="Ex: Réparation fuite évier"
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                value={form.title}
                onChangeText={(text) => setForm({ ...form, title: text })}
              />
            </View>

            <View className="relative z-50">
              <Text className="mb-2 text-sm font-semibold text-slate-700">Catégorie</Text>
              <TouchableOpacity
                onPress={() => setShowCategories(!showCategories)}
                className="flex-row items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                <Text className={form.category ? 'text-slate-900' : 'text-slate-400'}>
                  {form.category || 'Sélectionnez une catégorie'}
                </Text>
                <Ionicons name={showCategories ? 'chevron-up' : 'chevron-down'} size={20} color="#64748B" />
              </TouchableOpacity>

              {showCategories && (
                <View className="absolute top-[85px] left-0 right-0 rounded-2xl border border-slate-100 bg-white shadow-xl shadow-black/10 z-50 overflow-hidden">
                  <ScrollView className="max-h-[240px]" nestedScrollEnabled={true}>
                    {CATEGORIES.map((cat) => (
                      <TouchableOpacity
                        key={cat}
                        onPress={() => {
                          setForm({ ...form, category: cat });
                          setShowCategories(false);
                        }}
                        className={`px-4 py-4 border-b border-slate-50 ${form.category === cat ? 'bg-primary-soft' : ''}`}>
                        <Text className={`text-base ${form.category === cat ? 'font-bold text-primary' : 'text-slate-700'}`}>
                          {cat}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
              )}
            </View>

            <View>
              <Text className="mb-2 text-sm font-semibold text-slate-700">Localisation (Quartier)</Text>
              <TextInput
                placeholder="Ex: Analakely"
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                value={form.subtitle}
                onChangeText={(text) => setForm({ ...form, subtitle: text })}
              />
            </View>

            <View>
              <Text className="mb-2 text-sm font-semibold text-slate-700">Budget indicatif</Text>
              <TextInput
                placeholder="Ex: 50 000 Ar"
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                value={form.budget}
                onChangeText={(text) => setForm({ ...form, budget: text })}
              />
            </View>

            <View>
              <Text className="mb-2 text-sm font-semibold text-slate-700">Délai souhaité</Text>
              <TextInput
                placeholder="Ex: Demain matin"
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                value={form.date}
                onChangeText={(text) => setForm({ ...form, date: text })}
              />
            </View>

            <View>
              <Text className="mb-2 text-sm font-semibold text-slate-700">Description détaillée</Text>
              <TextInput
                placeholder="Décrivez votre problème précisément..."
                multiline
                numberOfLines={4}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-start"
                textAlignVertical="top"
                value={form.description}
                onChangeText={(text) => setForm({ ...form, description: text })}
              />
            </View>

            <TouchableOpacity
              onPress={handleSubmit}
              className="mt-4 rounded-[26px] bg-primary px-5 py-5">
              <Text className="text-center text-base font-bold text-white">Publier ma demande</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
