import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { useUserStore } from '@/store/useUserStore';

export default function ProviderVerificationScreen() {
  const setAuthenticated = useUserStore((state) => state.setAuthenticated);
  const setOnboardingComplete = useUserStore((state) => state.setOnboardingComplete);

  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<{ front: string | null; back: string | null }>({
    front: null,
    back: null,
  });

  const pickImage = async (type: 'front' | 'back') => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permission requise', 'Nous avons besoin de votre permission pour accéder à vos photos.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5,
    });

    if (!result.canceled) {
      setImages({ ...images, [type]: result.assets[0].uri });
    }
  };

  const handleFinish = () => {
    if (!images.front || !images.back) {
      Alert.alert('Photos manquantes', 'Veuillez ajouter les deux photos de votre carte d’identité.');
      return;
    }

    setIsLoading(true);

    // Simuler le téléchargement et la validation
    setTimeout(() => {
      setAuthenticated(true);
      setOnboardingComplete(true);
      setIsLoading(false);
      router.replace('/provider');
    }, 2000);
  };

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 bg-white items-center justify-center">
        <ActivityIndicator size="large" color="#6B6E50" />
        <Text className="mt-4 text-slate-500 font-medium">Vérification de vos documents...</Text>
        <Text className="mt-1 text-slate-400 text-xs">Cela peut prendre quelques instants</Text>
      </SafeAreaView>
    );
  }

  };

  const documentItems = [
    {
      id: 'front' as const,
      title: 'Carte d’identité recto',
      text: 'Ajoutez la photo du devant de votre carte.',
    },
    {
      id: 'back' as const,
      title: 'Carte d’identité verso',
      text: 'Ajoutez la photo du dos de votre carte.',
    },
  ];

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
                onPress={() => pickImage(item.id)}
                className="overflow-hidden rounded-[28px] border border-dashed border-slate-300 bg-slate-50 min-h-[160px]">
                {images[item.id] ? (
                  <View className="flex-1 relative">
                    <Image source={{ uri: images[item.id]! }} className="w-full h-[160px]" resizeMode="cover" />
                    <View className="absolute inset-0 bg-black/20 items-center justify-center">
                      <View className="bg-white/80 rounded-full p-2">
                        <Ionicons name="refresh" size={20} color="#171717" />
                      </View>
                    </View>
                  </View>
                ) : (
                  <View className="flex-1 items-center justify-center py-6">
                    <View className="mb-4 h-14 w-14 items-center justify-center rounded-full bg-primary-soft">
                      <Ionicons name="camera-outline" size={24} color="#6B6E50" />
                    </View>
                    <Text className="text-center text-base font-bold text-slate-900">{item.title}</Text>
                    <Text className="mt-2 text-center text-sm leading-6 text-slate-500">{item.text}</Text>
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            onPress={handleFinish}
            className="mt-8 rounded-[26px] bg-primary px-5 py-5">
            <Text className="text-center text-base font-bold text-white">Envoyer et continuer</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
