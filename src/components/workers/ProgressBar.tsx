import { StyleSheet, Text, View } from 'react-native';

import { colors, radius } from '@/theme/colors';

type ProgressBarProps = {
  value: number;
  showLabel?: boolean;
};

export function ProgressBar({ value, showLabel = true }: ProgressBarProps) {
  const safeValue = Math.max(0, Math.min(100, value));

  return (
    <View style={styles.container}>
      {showLabel && <Text style={styles.label}>{safeValue}% concluído</Text>}
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${safeValue}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  label: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '700',
  },
  track: {
    height: 10,
    backgroundColor: colors.border,
    borderRadius: radius.sm,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: colors.cyan500,
    borderRadius: radius.sm,
  },
});
