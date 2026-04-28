import { Ionicons } from '@expo/vector-icons';
import type { ComponentProps } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type IoniconName = ComponentProps<typeof Ionicons>['name'];

const mainItems = [
  { icon: 'briefcase-outline' as IoniconName, label: 'Mes offres', value: '24 envoyées' },
  { icon: 'create-outline' as IoniconName, label: 'Modifier profil' },
  { icon: 'construct-outline' as IoniconName, label: 'Services proposés', value: 'Plomberie' },
  { icon: 'chatbubble-ellipses-outline' as IoniconName, label: 'Support' },
];

const settingsItems = [
  { icon: 'location-outline' as IoniconName, label: 'Zones d’intervention', value: 'Analakely' },
  { icon: 'shield-checkmark-outline' as IoniconName, label: 'Vérification', value: 'Vérifié' },
  { icon: 'document-text-outline' as IoniconName, label: 'Description' },
  { icon: 'settings-outline' as IoniconName, label: 'Paramètres' },
];

function ProfileRow({
  icon,
  label,
  value,
}: {
  icon: IoniconName;
  label: string;
  value?: string;
}) {
  return (
    <TouchableOpacity className="flex-row items-center py-4">
      <View className="mr-3 h-10 w-10 items-center justify-center rounded-2xl bg-slate-100">
        <Ionicons name={icon} size={18} color="#52525B" />
      </View>
      <View className="flex-1">
        <Text className="text-sm font-semibold text-slate-900">{label}</Text>
      </View>
      {value ? <Text className="mr-2 text-xs font-medium text-slate-400">{value}</Text> : null}
      <Ionicons name="chevron-forward" size={16} color="#C4C4C4" />
    </TouchableOpacity>
  );
}

export default function ProviderProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#F5F5F5]">
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="bg-[#171717] px-5 pb-10 pt-3">
          <View className="mb-8 flex-row items-center justify-between">
            <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-white/10">
              <Ionicons name="chevron-back" size={18} color="#FFFFFF" />
            </TouchableOpacity>
            <Text className="text-lg font-semibold text-white">Compte</Text>
            <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-white/10">
              <Ionicons name="notifications-outline" size={18} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <View className="items-center">
            <View className="relative mb-4">
              <View className="h-24 w-24 items-center justify-center rounded-full border-4 border-white/10 bg-primary-soft">
                <Ionicons name="construct-outline" size={36} color="#6B6E50" />
              </View>
              <TouchableOpacity className="absolute -bottom-1 right-0 h-8 w-8 items-center justify-center rounded-full bg-white">
                <Ionicons name="camera-outline" size={14} color="#171717" />
              </TouchableOpacity>
            </View>
            <Text className="text-2xl font-bold text-white">Toky Rakoto</Text>
            <Text className="mt-2 text-sm text-white/70">tokypro@email.com</Text>
          </View>
        </View>

        <View className="-mt-4 px-4">
          <View className="mb-4 rounded-[28px] bg-white px-4">
            {mainItems.map((item, index) => (
              <View
                key={item.label}
                className={index !== mainItems.length - 1 ? 'border-b border-slate-100' : ''}>
                <ProfileRow icon={item.icon} label={item.label} value={item.value} />
              </View>
            ))}
          </View>

          <View className="mb-4 rounded-[28px] bg-white px-4">
            {settingsItems.map((item, index) => (
              <View
                key={item.label}
                className={index !== settingsItems.length - 1 ? 'border-b border-slate-100' : ''}>
                <ProfileRow icon={item.icon} label={item.label} value={item.value} />
              </View>
            ))}
          </View>

          <TouchableOpacity className="rounded-[24px] bg-white px-4 py-5">
            <Text className="text-sm font-semibold text-[#E38B7B]">Se déconnecter</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
