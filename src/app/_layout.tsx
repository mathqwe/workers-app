import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { ProgressProvider } from '@/context/progress-context';

export default function RootLayout() {
  return (
    <ProgressProvider>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false }} />
    </ProgressProvider>
  );
}
