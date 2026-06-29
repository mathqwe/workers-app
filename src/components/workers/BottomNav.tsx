import { router, usePathname } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors, radius, spacing } from '@/theme/colors';

type NavItem = {
  label: string;
  icon: string;
  path: '/home' | '/select-track' | '/profile';
  match: string[];
};

const items: NavItem[] = [
  { label: 'Início', icon: '⌂', path: '/home', match: ['/home'] },
  { label: 'Trilhas', icon: '▦', path: '/select-track', match: ['/select-track', '/track', '/module'] },
  { label: 'Perfil', icon: '□', path: '/profile', match: ['/profile', '/certificates'] },
];

export function BottomNav() {
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrapper, { paddingBottom: Math.max(insets.bottom, spacing.sm) }]}> 
      <View style={styles.nav}>
        {items.map((item) => {
          const active = item.match.some((match) => pathname.startsWith(match));
          return (
            <Pressable
              key={item.path}
              onPress={() => router.replace(item.path as never)}
              style={({ pressed }) => [styles.item, active && styles.itemActive, pressed && styles.pressed]}>
              <Text style={[styles.icon, active && styles.iconActive]}>{item.icon}</Text>
              <Text style={[styles.label, active && styles.labelActive]} numberOfLines={1}>
                {item.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    backgroundColor: 'rgba(243,247,251,0.97)',
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderRadius: radius.xxl,
    padding: 6,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 8,
  },
  item: {
    flex: 1,
    minHeight: 58,
    borderRadius: radius.xl,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  itemActive: {
    backgroundColor: colors.navy900,
  },
  pressed: {
    opacity: 0.85,
  },
  icon: {
    color: colors.textMuted,
    fontSize: 18,
    fontWeight: '900',
  },
  iconActive: {
    color: colors.cyan500,
  },
  label: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '900',
  },
  labelActive: {
    color: colors.white,
  },
});
