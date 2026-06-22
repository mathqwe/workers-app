import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { LearningModule } from '@/types/learning';
import { colors, radius, spacing } from '@/theme/colors';

type ModuleCardProps = {
  module: LearningModule;
  index: number;
  completed: boolean;
  onPress: () => void;
};

export function ModuleCard({ module, index, completed, onPress }: ModuleCardProps) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View style={[styles.step, completed && styles.stepCompleted]}>
        <Text style={[styles.stepText, completed && styles.stepTextCompleted]}>
          {completed ? '✓' : index + 1}
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{module.title}</Text>
          <Text style={[styles.badge, completed && styles.badgeCompleted]}>
            {completed ? 'Concluído' : 'Pendente'}
          </Text>
        </View>
        <Text style={styles.description}>{module.description}</Text>
        <Text style={styles.time}>Tempo estimado: {module.estimatedTime}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: spacing.md,
    padding: spacing.md,
    borderRadius: radius.lg,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },
  pressed: {
    opacity: 0.85,
  },
  step: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  stepCompleted: {
    backgroundColor: colors.success,
    borderColor: colors.success,
  },
  stepText: {
    color: colors.textSecondary,
    fontWeight: '800',
  },
  stepTextCompleted: {
    color: colors.white,
  },
  content: {
    flex: 1,
    gap: 8,
  },
  header: {
    gap: 8,
  },
  title: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '800',
  },
  description: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 18,
  },
  time: {
    color: colors.navy700,
    fontSize: 12,
    fontWeight: '700',
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.background,
    color: colors.textSecondary,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    fontSize: 11,
    fontWeight: '800',
    overflow: 'hidden',
  },
  badgeCompleted: {
    backgroundColor: '#DCFCE7',
    color: '#166534',
  },
});
