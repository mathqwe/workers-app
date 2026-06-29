import { StyleSheet, Text, View } from 'react-native';

import { colors, radius } from '@/theme/colors';

type ProgressBarProps = {
  value: number;
  showLabel?: boolean;
  label?: string;
  dark?: boolean;
};

export function ProgressBar({ value, showLabel = true, label, dark }: ProgressBarProps) {
  const safeValue = Math.max(0, Math.min(100, value));

  return (
    <View style={styles.container}>
      {showLabel && (
        <View style={styles.labelRow}>
          <Text style={[styles.label, dark && styles.labelDark]}>{label ?? 'Progresso'}</Text>
          <Text style={[styles.percent, dark && styles.percentDark]}>{safeValue}%</Text>
        </View>
      )}
      <View style={[styles.track, dark && styles.trackDark]}>
        <View style={[styles.fill, { width: `${safeValue}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    color: colors.textSecondary,
    fontSize: 13,
    fontWeight: '800',
  },
  labelDark: {
    color: '#D7EEF7',
  },
  percent: {
    color: colors.navy900,
    fontSize: 16,
    fontWeight: '900',
  },
  percentDark: {
    color: colors.white,
  },
  track: {
    height: 10,
    backgroundColor: colors.border,
    borderRadius: radius.sm,
    overflow: 'hidden',
  },
  trackDark: {
    backgroundColor: 'rgba(255,255,255,0.18)',
  },
  fill: {
    height: '100%',
    backgroundColor: colors.cyan500,
    borderRadius: radius.sm,
  },
});
