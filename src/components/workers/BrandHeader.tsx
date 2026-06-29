import { Image, StyleSheet, Text, View } from 'react-native';

import { colors, spacing } from '@/theme/colors';

type BrandHeaderProps = {
  title?: string;
  subtitle?: string;
  compact?: boolean;
};

export function BrandHeader({ title, subtitle, compact }: BrandHeaderProps) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/workers/logo-full.png')}
        style={[styles.logo, compact && styles.logoCompact]}
      />
      {title && <Text style={styles.title}>{title}</Text>}
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.sm,
  },
  logo: {
    width: 150,
    height: 54,
    resizeMode: 'contain',
  },
  logoCompact: {
    width: 120,
    height: 42,
  },
  title: {
    color: colors.text,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '900',
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 15,
    lineHeight: 23,
  },
});
