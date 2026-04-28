import '../global.css';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack, useRouter, useSegments, useRootNavigationState } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { useUserStore } from '@/store/useUserStore';

export const unstable_settings = {
  anchor: 'onboarding',
};

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: true,
//     shouldSetBadge: true,
//   }),
// });

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const { isAuthenticated, onboardingComplete, role } = useUserStore();
  const segments = useSegments();
  const router = useRouter();
  const navigationState = useRootNavigationState();

  useEffect(() => {
    // Si l'état de navigation n'est pas prêt, on ne fait rien
    if (!navigationState?.key) return;

    const inAuthGroup = segments[0] === 'onboarding';

    // Utiliser un microtask ou un court délai pour s'assurer que le composant est monté
    const timeout = setTimeout(() => {
      if (!isAuthenticated || !onboardingComplete) {
        if (!inAuthGroup) {
          router.replace('/onboarding');
        }
      } else if (inAuthGroup) {
        if (role === 'provider') {
          router.replace('/provider');
        } else {
          router.replace('/researcher');
        }
      }
    }, 1);

    return () => clearTimeout(timeout);
  }, [isAuthenticated, onboardingComplete, role, segments, navigationState?.key]);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="researcher" options={{ headerShown: false }} />
        <Stack.Screen name="provider" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
