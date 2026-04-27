import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { recentRequests, requestFilters } from './data';

export default function ResearcherRequestsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <View className="bg-primary px-5 pb-5 pt-3">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity
            onPress={() => router.back()}
            className="h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
            <Ionicons name="chevron-back" size={20} color="#FFFFFF" />
          </TouchableOpacity>

          <Text className="text-[22px] font-bold text-white">Toutes mes demandes</Text>

          <View className="h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
            <Ionicons name="options-outline" size={18} color="#FFFFFF" />
          </View>
        </View>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 28 }}
        showsVerticalScrollIndicator={false}>
        <View className="px-4 pt-5">
          <View className="mb-5 rounded-[24px] bg-white p-4">
            <Text className="mb-3 text-lg font-bold text-slate-900">Filtres simples</Text>
            <View className="flex-row flex-wrap gap-2">
              {requestFilters.map((filter, index) =>
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

          <View className="mb-4 flex-row items-center justify-between">
            <Text className="text-[24px] font-bold text-slate-900">Demandes</Text>
            <Text className="text-sm font-semibold text-slate-500">{recentRequests.length} au total</Text>
          </View>

          <View className="gap-3">
            {recentRequests.map((request) => (
              <TouchableOpacity
                key={request.id}
                onPress={() => router.push(`/researcher/request/${request.id}`)}
                className="rounded-[24px] bg-white p-4 shadow-sm">
                <View className="mb-3 flex-row items-start justify-between">
                  <View className="mr-3 flex-1">
                    <Text className="text-[18px] font-bold text-slate-900">{request.title}</Text>
                    <Text className="mt-1 text-sm font-medium text-slate-400">
                      {request.category} · {request.subtitle}
                    </Text>
                  </View>

                  <View className="rounded-full bg-primary-soft px-3 py-2">
                    <Text className="text-xs font-bold text-slate-900">{request.status}</Text>
                  </View>
                </View>

                <View className="mb-4 flex-row gap-3">
                  <View className="flex-1 rounded-[18px] bg-slate-50 px-3 py-3">
                    <Text className="text-xs font-semibold uppercase tracking-[1px] text-slate-400">
                      Offres
                    </Text>
                    <Text className="mt-1 text-lg font-bold text-primary">{request.offers}</Text>
                  </View>
                  <View className="flex-1 rounded-[18px] bg-slate-50 px-3 py-3">
                    <Text className="text-xs font-semibold uppercase tracking-[1px] text-slate-400">
                      Budget
                    </Text>
                    <Text className="mt-1 text-sm font-bold text-slate-800">{request.budget}</Text>
                  </View>
                </View>

                <View className="flex-row items-center justify-between">
                  <Text className="text-sm font-medium text-slate-500">{request.date}</Text>
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
