import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing } from '@/theme/colors';
import type { Track } from '@/types/learning';

type TrackCardProps = {
  track: Track;
  onPress: () => void;
  selected?: boolean;
};

export function TrackCard({ track, onPress, selected }: TrackCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, selected && styles.selected, pressed && styles.pressed]}>
      <View style={styles.iconBox}>
        <Image source={track.icon} style={styles.icon} />
      </View>

      <View style={styles.textArea}>
        <View style={styles.metaRow}>
          <Text style={styles.steps}>{track.modules.length} etapas</Text>
        </View>
        <Text style={styles.title} numberOfLines={2}>{track.title}</Text>
        <Text style={styles.role} numberOfLines={1}>{track.targetRole}</Text>
        <Text style={styles.description} numberOfLines={3}>{track.description}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: spacing.md,
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.07,
    shadowRadius: 14,
    elevation: 2,
  },
  selected: {
    borderColor: colors.cyan600,
    backgroundColor: '#F8FDFF',
  },
  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.995 }],
  },
  iconBox: {
    width: 76,
    height: 76,
    borderRadius: 22,
    backgroundColor: colors.cyanSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 66,
    height: 66,
    resizeMode: 'contain',
  },
  textArea: {
    flex: 1,
    minWidth: 0,
    gap: 3,
  },
  metaRow: {
    alignItems: 'flex-end',
  },
  title: {
    color: colors.text,
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '900',
  },
  steps: {
    color: colors.cyan600,
    fontSize: 11,
    fontWeight: '900',
    backgroundColor: colors.cyanSoft,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 999,
    overflow: 'hidden',
  },
  role: {
    color: colors.navy800,
    fontSize: 13,
    lineHeight: 17,
    fontWeight: '900',
  },
  description: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 18,
  },
});
