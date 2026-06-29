import { router } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing } from '@/theme/colors';

type ScreenHeaderProps = {
  title?: string;
  subtitle?: string;
  showBack?: boolean;
  rightLabel?: string;
  onRightPress?: () => void;
};

export function ScreenHeader({ title, subtitle, showBack = false, rightLabel, onRightPress }: ScreenHeaderProps) {
  return (
    <View style={styles.wrap}>
      <View style={styles.topRow}>
        {showBack ? (
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backText}>‹</Text>
          </Pressable>
        ) : (
          <Image source={require('../../../assets/images/workers/workers-mark.png')} style={styles.mark} />
        )}

        <Image source={require('../../../assets/images/workers/workers-logo.png')} style={styles.logo} />

        {rightLabel ? (
          <Pressable onPress={onRightPress} style={styles.rightButton}>
            <Text style={styles.rightText}>{rightLabel}</Text>
          </Pressable>
        ) : (
          <View style={styles.rightPlaceholder} />
        )}
      </View>

      {(title || subtitle) && (
        <View style={styles.textArea}>
          {title && <Text style={styles.title}>{title}</Text>}
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    gap: spacing.md,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mark: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },
  logo: {
    width: 138,
    height: 44,
    resizeMode: 'contain',
  },
  backButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  backText: {
    color: colors.brandNavy,
    fontSize: 34,
    fontWeight: '600',
    marginTop: -4,
  },
  rightPlaceholder: {
    width: 38,
    height: 38,
  },
  rightButton: {
    minWidth: 38,
    minHeight: 34,
    borderRadius: radius.pill,
    backgroundColor: colors.surfaceBlue,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.sm,
  },
  rightText: {
    color: colors.brandBlue,
    fontSize: 12,
    fontWeight: '900',
  },
  textArea: {
    gap: spacing.xs,
  },
  title: {
    color: colors.textStrong,
    fontSize: 30,
    lineHeight: 35,
    fontWeight: '900',
    letterSpacing: -0.7,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 15,
    lineHeight: 22,
  },
});
