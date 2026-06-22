import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { Track } from '@/types/learning';
import { colors, radius, spacing } from '@/theme/colors';

type TrackCardProps = {
  track: Track;
  onPress: () => void;
};

export function TrackCard({ track, onPress }: TrackCardProps) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View style={styles.iconCircle}>
        <Text style={styles.iconText}>{track.title.substring(0, 1)}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{track.title}</Text>
        <Text style={styles.role}>{track.targetRole}</Text>
        <Text style={styles.description}>{track.description}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: spacing.md,
    backgroundColor: colors.card,
    padding: spacing.md,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: colors.navy900,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
    elevation: 2,
  },
  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.99 }],
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.navy800,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    color: colors.cyan500,
    fontSize: 22,
    fontWeight: '800',
  },
  content: {
    flex: 1,
    gap: 4,
  },
  title: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
  },
  role: {
    color: colors.cyan600,
    fontSize: 13,
    fontWeight: '700',
  },
  description: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 18,
  },
});
