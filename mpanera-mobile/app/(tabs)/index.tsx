import { ScrollView, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-slate-100">
      <View className="px-6 pb-10 pt-16">
        <View className="mb-6 rounded-3xl bg-emerald-600 p-6 shadow-sm">
          <Text className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-emerald-100">
            NativeWind Test
          </Text>
          <Text className="mb-3 text-3xl font-bold text-white">Tailwind is active</Text>
          <Text className="text-sm leading-6 text-emerald-50">
            If this screen shows spacing, colors, rounded cards, and styled badges, NativeWind is
            correctly configured in the Expo app.
          </Text>
        </View>

        <View className="mb-6 flex-row gap-3">
          <View className="rounded-full bg-white px-4 py-2">
            <Text className="text-xs font-semibold text-slate-700">React Native</Text>
          </View>
          <View className="rounded-full bg-white px-4 py-2">
            <Text className="text-xs font-semibold text-slate-700">Expo</Text>
          </View>
          <View className="rounded-full bg-white px-4 py-2">
            <Text className="text-xs font-semibold text-slate-700">Tailwind</Text>
          </View>
        </View>

        <View className="gap-4">
          <View className="rounded-2xl bg-white p-5 shadow-sm">
            <Text className="mb-2 text-lg font-bold text-slate-900">Visual checks</Text>
            <Text className="text-sm leading-6 text-slate-600">
              This block validates common utility classes like `bg-*`, `text-*`, `p-*`, `rounded-*`
              and `shadow-*`.
            </Text>
          </View>

          <View className="rounded-2xl border border-dashed border-emerald-300 bg-emerald-50 p-5">
            <Text className="mb-3 text-base font-semibold text-emerald-900">Expected result</Text>
            <View className="gap-2">
              <Text className="text-sm text-emerald-800">• Green hero card with white text</Text>
              <Text className="text-sm text-emerald-800">• White rounded pills under the hero</Text>
              <Text className="text-sm text-emerald-800">• White and pale green cards with padding</Text>
            </View>
          </View>

          <View className="rounded-2xl bg-slate-900 p-5">
            <Text className="mb-1 text-sm font-semibold uppercase tracking-[1.5px] text-slate-400">
              Test file
            </Text>
            <Text className="text-base font-medium text-white">app/(tabs)/index.tsx</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
