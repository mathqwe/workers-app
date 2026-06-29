import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing } from '@/theme/colors';
import type { LearningModule } from '@/types/learning';

type ModuleCardProps = {
  module: LearningModule;
  index: number;
  completed: boolean;
  hasEvidence: boolean;
  onPress: () => void;
};

export function ModuleCard({ module, index, completed, hasEvidence, onPress }: ModuleCardProps) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View style={styles.timelineArea}>
        <View style={[styles.step, completed && styles.stepCompleted]}>
          <Text style={[styles.stepText, completed && styles.stepTextCompleted]}>
            {completed ? '✓' : index + 1}
          </Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.topRow}>
          <Text style={styles.phase}>{phaseText[module.phase]}</Text>
          <Text style={[styles.status, completed && styles.statusDone]}>{completed ? 'Concluído' : 'A fazer'}</Text>
        </View>
        <Text style={styles.title}>{module.title}</Text>
        <Text style={styles.summary}>{module.summary}</Text>
        {hasEvidence ? (
          <View style={styles.metaRow}>
            <Text style={styles.evidence}>Evidência adicionada</Text>
          </View>
        ) : null}
      </View>
    </Pressable>
  );
}

const phaseText = {
  base: 'Base',
  pratica: 'Prática',
  autonomia: 'Autonomia',
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: spacing.md,
    padding: spacing.md,
    borderRadius: radius.lg,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
  },
  pressed: {
    opacity: 0.88,
  },
  timelineArea: {
    alignItems: 'center',
  },
  step: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.cyanSoft,
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
    color: colors.navy800,
    fontSize: 14,
    fontWeight: '900',
  },
  stepTextCompleted: {
    color: colors.white,
  },
  content: {
    flex: 1,
    gap: 8,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  phase: {
    color: colors.cyan600,
    fontSize: 11,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  status: {
    backgroundColor: colors.background,
    color: colors.textMuted,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    fontSize: 11,
    fontWeight: '900',
    overflow: 'hidden',
  },
  statusDone: {
    backgroundColor: colors.successSoft,
    color: '#166534',
  },
  title: {
    color: colors.text,
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '900',
  },
  summary: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 19,
  },
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  evidence: {
    color: '#166534',
    fontSize: 12,
    fontWeight: '800',
  },
});
