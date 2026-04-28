import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ClientOnboardingScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}>
        <View className="flex-1 px-5 pb-8 pt-3">
          <View className="flex-row items-center">
            <TouchableOpacity
              onPress={() => router.back()}
              className="h-11 w-11 items-center justify-center rounded-2xl bg-slate-100">
              <Ionicons name="chevron-back" size={20} color="#6B6E50" />
            </TouchableOpacity>

            <View className="ml-4 flex-1">
              <View className="h-2 w-full rounded-full bg-slate-200">
                <View className="h-2 w-full rounded-full bg-primary" />
              </View>
            </View>
          </View>

          <View className="mb-8 mt-8">
            <Text className="text-center text-[30px] font-bold leading-10 text-slate-900">
              Créer un compte client
            </Text>
            <Text className="mt-3 text-center text-sm leading-6 text-slate-500">
              Entrez vos informations pour continuer.
            </Text>
          </View>

          <View className="rounded-[28px] bg-white">
            <View className="mb-4">
              <Text className="mb-2 text-sm font-semibold text-slate-700">Nom complet</Text>
              <TextInput
                placeholder="Votre nom complet"
                placeholderTextColor="#94A3B8"
                className="rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-4 text-base text-slate-900"
              />
            </View>

            <View className="mb-4">
              <Text className="mb-2 text-sm font-semibold text-slate-700">Téléphone</Text>
              <TextInput
                placeholder="034 XX XXX XX"
                placeholderTextColor="#94A3B8"
                keyboardType="phone-pad"
                className="rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-4 text-base text-slate-900"
              />
            </View>

            <View className="mb-4">
              <Text className="mb-2 text-sm font-semibold text-slate-700">Email</Text>
              <TextInput
                placeholder="Votre email"
                placeholderTextColor="#94A3B8"
                keyboardType="email-address"
                autoCapitalize="none"
                className="rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-4 text-base text-slate-900"
              />
            </View>

            <View className="mb-6">
              <Text className="mb-2 text-sm font-semibold text-slate-700">Mot de passe</Text>
              <TextInput
                placeholder="Créer un mot de passe"
                placeholderTextColor="#94A3B8"
                secureTextEntry
                className="rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-4 text-base text-slate-900"
              />
            </View>

            <TouchableOpacity
              onPress={() => router.replace('/researcher')}
              className="rounded-[26px] bg-primary px-5 py-5">
              <Text className="text-center text-base font-bold text-white">Créer mon compte</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => router.replace('/researcher')} className="mt-6 self-center">
            <Text className="text-sm font-semibold text-primary">Déjà un compte ?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
