import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { recentRequests } from '../data';

const faqs = [
  'Comment payer les frais de contact ?',
  'Pourquoi utiliser Mpanera ?',
  'Les prestataires sont-ils vérifiés ?',
];

export default function ResearcherHomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <View className="bg-primary px-5 pb-5 pt-3">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <View className="mr-3 h-11 w-11 items-center justify-center rounded-2xl bg-white/15">
              <Ionicons name="construct-outline" size={24} color="#FFFFFF" />
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
          <View className="mb-4 flex-col justify-between gap-5">
            <Text className="text-[28px] font-bold text-slate-900">Mes demandes récentes</Text>
            <TouchableOpacity onPress={() => router.push('/researcher/requests')}>
              <Text className="self-end text-sm font-bold uppercase tracking-[1px] text-primary">
                Tout voir
              </Text>
            </TouchableOpacity>
          </View>

          <View className="gap-3">
            {recentRequests.map((request) => (
              <TouchableOpacity
                key={request.id}
                onPress={() => router.push(`/researcher/request/${request.id}`)}
                className="flex-row items-center rounded-[24px] bg-white px-4 py-4 shadow-sm">
                <View className="flex-1 pr-4">
                  <Text className="text-[18px] font-bold text-slate-900">{request.title}</Text>
                  <Text className="mt-1 text-sm font-medium text-slate-400">
                    {request.subtitle}
                  </Text>
                </View>

                <View className="mr-3 items-center">
                  <Text className="text-[30px] font-bold leading-none text-primary">
                    {request.offers}
                  </Text>
                  <Text className="mt-1 text-xs font-medium text-slate-400">offres</Text>
                </View>

                <View className="h-11 w-11 items-center justify-center rounded-full bg-primary-accent">
                  <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity className="mt-5 overflow-hidden rounded-[24px] bg-primary px-5 py-6">
            <Text className="max-w-[72%] text-[22px] font-bold leading-8 text-white">
              Comment utiliser Mpanera ?
            </Text>
            <Text className="mt-2 text-sm font-medium text-white/80">
              Apprenez en quelques minutes
            </Text>

            <View className="absolute bottom-5 right-5 rounded-full bg-primary-soft px-5 py-3">
              <Text className="text-sm font-bold text-slate-900">Allons-y</Text>
            </View>
          </TouchableOpacity>

          <View className="mt-6">
            <Text className="mb-4 text-[28px] font-bold text-slate-900">Questions fréquentes</Text>

            <View className="gap-3">
              {faqs.map((faq) => (
                <TouchableOpacity
                  key={faq}
                  className="flex-row items-center rounded-[20px] bg-white px-4 py-4">
                  <View className="mr-3 h-9 w-9 items-center justify-center rounded-full bg-primary-soft">
                    <Text className="text-base font-bold text-slate-900">?</Text>
                  </View>

                  <Text className="flex-1 text-[15px] font-semibold text-slate-700">{faq}</Text>

                  <Ionicons name="chevron-forward" size={18} color="#CBD5E1" />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
