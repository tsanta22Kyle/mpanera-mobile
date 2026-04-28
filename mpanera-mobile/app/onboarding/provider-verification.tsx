import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const documentItems = [
  {
    id: 'front',
    title: 'Carte d’identité recto',
    text: 'Ajoutez la photo du devant de votre carte.',
  },
  {
    id: 'back',
    title: 'Carte d’identité verso',
    text: 'Ajoutez la photo du dos de votre carte.',
  },
];

export default function ProviderVerificationScreen() {
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
              Vérification d’identité
            </Text>
            <Text className="mt-3 text-center text-sm leading-6 text-slate-500">
              Ajoutez les photos demandées pour activer votre compte.
            </Text>
          </View>

          <View className="gap-4">
            {documentItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                className="rounded-[28px] border border-dashed border-slate-300 bg-slate-50 px-5 py-6">
                <View className="items-center">
                  <View className="mb-4 h-14 w-14 items-center justify-center rounded-full bg-primary-soft">
                    <Ionicons name="camera-outline" size={24} color="#6B6E50" />
                  </View>
                  <Text className="text-center text-base font-bold text-slate-900">{item.title}</Text>
                  <Text className="mt-2 text-center text-sm leading-6 text-slate-500">{item.text}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            onPress={() => router.replace('/provider/(tabs)/offers')}
            className="mt-8 rounded-[26px] bg-primary px-5 py-5">
            <Text className="text-center text-base font-bold text-white">Envoyer et continuer</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
