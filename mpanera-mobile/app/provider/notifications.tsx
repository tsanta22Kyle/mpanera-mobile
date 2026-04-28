import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNotificationStore } from '@/store/useNotificationStore';

export default function ProviderNotificationsScreen() {
  const { notifications, markAsRead, clearAll } = useNotificationStore();

  const handleNotificationClick = (notification: any) => {
    markAsRead(notification.id);
    if (notification.type === 'demande' && notification.data?.requestId) {
      // Pour l'instant on reste sur notifications ou on redirige vers offers
      // router.push('/provider/(tabs)/offers');
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'demande': return 'construct-outline';
      case 'reponse': return 'chatbubble-outline';
      case 'payment': return 'card-outline';
      default: return 'notifications-outline';
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <View className="bg-primary px-5 pb-5 pt-3">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity
            onPress={() => router.back()}
            className="h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
            <Ionicons name="chevron-back" size={20} color="#FFFFFF" />
          </TouchableOpacity>

          <Text className="text-[22px] font-bold text-white">Notifications</Text>

          <TouchableOpacity
            onPress={clearAll}
            className="h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
            <Ionicons name="trash-outline" size={18} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 28 }}
        showsVerticalScrollIndicator={false}>
        <View className="px-4 pt-5">
          {notifications.length > 0 ? (
            <View className="gap-3">
              {notifications.map((notif) => (
                <TouchableOpacity
                  key={notif.id}
                  onPress={() => handleNotificationClick(notif)}
                  className={`rounded-[24px] bg-white p-4 shadow-sm border-l-4 ${notif.read ? 'border-transparent' : 'border-primary'}`}>
                  <View className="flex-row items-start">
                    <View className={`mr-3 h-10 w-10 items-center justify-center rounded-full ${notif.read ? 'bg-slate-100' : 'bg-primary-soft'}`}>
                      <Ionicons name={getIcon(notif.type)} size={18} color={notif.read ? '#64748B' : '#6B6E50'} />
                    </View>
                    <View className="flex-1">
                      <View className="flex-row justify-between items-start">
                        <Text className={`text-base font-bold ${notif.read ? 'text-slate-600' : 'text-slate-900'}`}>
                          {notif.title}
                        </Text>
                        {!notif.read && <View className="h-2 w-2 rounded-full bg-primary mt-2" />}
                      </View>
                      <Text className="mt-1 text-sm text-slate-500 leading-5">{notif.body}</Text>
                      <Text className="mt-2 text-[10px] font-medium text-slate-400 uppercase">
                        {new Date(notif.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <View className="items-center justify-center py-20">
              <View className="h-20 w-20 items-center justify-center rounded-full bg-slate-200 mb-4">
                <Ionicons name="notifications-off-outline" size={40} color="#94A3B8" />
              </View>
              <Text className="text-lg font-bold text-slate-400">Aucune notification</Text>
              <Text className="text-sm text-slate-400 mt-2 text-center px-10">
                Vous recevrez une notification ici dès qu'une nouvelle demande correspondra à vos services.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
