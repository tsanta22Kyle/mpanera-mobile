import { Ionicons } from '@expo/vector-icons';
// import * as Notifications from 'expo-notifications';
import { router, useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { recentRequests } from '../../data';

const paymentOptions = [
  {
    id: 'orange-money',
    title: 'Orange Money',
    subtitle: 'Paiement mobile rapide',
    colorClassName: 'bg-[#FF7A00]',
  },
  {
    id: 'mvola',
    title: 'Mvola',
    subtitle: 'Paiement via Telma',
    colorClassName: 'bg-[#E53935]',
  },
] as const;

const unlockedProvider = {
  name: 'Toky Services',
  phone: '034 12 345 67',
  email: 'tokyservices@email.com',
};

export default function RequestPaymentScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const request = recentRequests.find((item) => item.id === id) ?? recentRequests[0];

  const confirmPayment = async (method: 'orange-money' | 'mvola') => {
    // const permission = await Notifications.requestPermissionsAsync();

    // if (permission.status === 'granted') {
    //   await Notifications.scheduleNotificationAsync({
    //     content: {
    //       title: 'Paiement confirmé',
    //       body: `${unlockedProvider.name} est débloqué. ${unlockedProvider.phone}`,
    //       data: {
    //         requestId: request.id,
    //         providerName: unlockedProvider.name,
    //       },
    //     },
    //     trigger: null,
    //   });
    // }

    router.replace({
      pathname: '/researcher/request/[id]',
      params: {
        id: request.id,
        paid: '1',
        method,
        providerName: unlockedProvider.name,
        providerPhone: unlockedProvider.phone,
        providerEmail: unlockedProvider.email,
      },
    });
  };

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

            <Text className="text-base font-semibold text-slate-400">Paiement</Text>
          </View>

          <View className="mb-8">
            <Text className="text-[28px] font-bold leading-9 text-slate-900">
              Payer les frais de contact
            </Text>
            <Text className="mt-3 text-sm leading-6 text-slate-500">
              Choisissez un moyen de paiement pour débloquer le contact du prestataire.
            </Text>
          </View>

          <View className="mb-6 rounded-[22px] bg-slate-50 px-4 py-4">
            <Text className="text-xs font-semibold uppercase tracking-[1px] text-slate-400">
              Demande
            </Text>
            <Text className="mt-2 text-base font-bold text-slate-900">{request.title}</Text>
            <Text className="mt-1 text-sm text-slate-500">{request.category}</Text>
          </View>

          <View className="mb-8 rounded-[22px] bg-primary-soft px-4 py-4">
            <Text className="text-xs font-semibold uppercase tracking-[1px] text-slate-500">
              Montant
            </Text>
            <Text className="mt-2 text-2xl font-bold text-slate-900">5 000 Ar</Text>
            <Text className="mt-1 text-sm text-slate-600">Frais de contact à payer une seule fois</Text>
          </View>

          <View className="gap-3">
            {paymentOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                onPress={() => confirmPayment(option.id)}
                className="flex-row items-center rounded-[24px] border border-slate-200 bg-white px-4 py-4">
                <View
                  className={`mr-4 h-12 w-12 items-center justify-center rounded-2xl ${option.colorClassName}`}>
                  <Ionicons name="phone-portrait-outline" size={20} color="#FFFFFF" />
                </View>
                <View className="flex-1">
                  <Text className="text-base font-bold text-slate-900">{option.title}</Text>
                  <Text className="mt-1 text-sm text-slate-500">{option.subtitle}</Text>
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
