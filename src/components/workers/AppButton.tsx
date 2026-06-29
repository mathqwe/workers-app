import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';

import { colors, radius, spacing } from '@/theme/colors';

type AppButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'success';
  style?: ViewStyle;
  disabled?: boolean;
};

export function AppButton({ title, onPress, variant = 'primary', style, disabled }: AppButtonProps) {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        variant === 'primary' && styles.primary,
        variant === 'secondary' && styles.secondary,
        variant === 'outline' && styles.outline,
        variant === 'ghost' && styles.ghost,
        variant === 'success' && styles.success,
        pressed && !disabled && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}>
      <Text
        style={[
          styles.text,
          variant === 'outline' && styles.outlineText,
          variant === 'ghost' && styles.ghostText,
          disabled && styles.disabledText,
        ]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: 52,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.md,
  },
  primary: {
    backgroundColor: colors.navy900,
  },
  secondary: {
    backgroundColor: colors.cyan600,
  },
  outline: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderStrong,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  success: {
    backgroundColor: colors.success,
  },
  pressed: {
    opacity: 0.82,
    transform: [{ scale: 0.99 }],
  },
  disabled: {
    backgroundColor: colors.border,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '800',
  },
  outlineText: {
    color: colors.navy900,
  },
  ghostText: {
    color: colors.cyan600,
  },
  disabledText: {
    color: colors.textMuted,
  },
});
