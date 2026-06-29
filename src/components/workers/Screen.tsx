import { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors, spacing } from '@/theme/colors';
import { BottomNav } from './BottomNav';

type ScreenProps = PropsWithChildren<{
  withNav?: boolean;
  scroll?: boolean;
  dark?: boolean;
}>;

export function Screen({ children, withNav = true, scroll = true, dark }: ScreenProps) {
  const Container = scroll ? ScrollView : View;

  return (
    <SafeAreaView style={[styles.safe, dark && styles.safeDark]}>
      <Container
        style={styles.container}
        contentContainerStyle={scroll ? [styles.content, withNav && styles.contentWithNav] : undefined}>
        {children}
      </Container>
      {withNav && <BottomNav />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  safeDark: {
    backgroundColor: colors.navy950,
  },
  container: {
    flex: 1,
  },
  content: {
    padding: spacing.lg,
    gap: spacing.lg,
  },
  contentWithNav: {
    paddingBottom: 124,
  },
});
