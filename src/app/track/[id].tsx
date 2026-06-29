import { router, useLocalSearchParams } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

import { AppButton } from '@/components/workers/AppButton';
import { ModuleCard } from '@/components/workers/ModuleCard';
import { ProgressBar } from '@/components/workers/ProgressBar';
import { Screen } from '@/components/workers/Screen';
import { useProgress } from '@/context/progress-context';
import { getPhaseModules, getTrackById, phaseLabels } from '@/data/tracks';
import { colors, radius, spacing } from '@/theme/colors';
import type { TrackPhase } from '@/types/learning';

const phases: TrackPhase[] = ['base', 'pratica', 'autonomia'];

export default function TrackDetailScreen() {
  const params = useLocalSearchParams<{ id: string }>();
  const { getTrackProgress, getCompletedCount, isModuleCompleted, hasEvidence } = useProgress();
  const track = getTrackById(params.id);

  if (!track) {
    return (
      <Screen>
        <Text style={styles.titleDark}>Trilha não encontrada</Text>
        <AppButton title="Voltar" onPress={() => router.back()} />
      </Screen>
    );
  }

  return (
    <Screen>
      <AppButton title="Voltar" variant="outline" onPress={() => router.back()} />

      <View style={styles.headerCard}>
        <View style={styles.headerText}>
          <Text style={styles.kicker}>{track.area}</Text>
          <Text style={styles.title}>{track.targetRole}</Text>
          <Text style={styles.description}>{track.audience}</Text>
        </View>
        <Image source={track.icon} style={styles.trackIcon} />
        <View style={styles.progressBox}>
          <Text style={styles.progressLabel}>
            {getCompletedCount(track)}/{track.modules.length} etapas concluídas
          </Text>
          <ProgressBar value={getTrackProgress(track)} showLabel={false} dark />
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.titleDark}>Roadmap</Text>
        <Text style={styles.sectionDescription}>
          A sequência abaixo mostra o que aprender, praticar e comprovar para evoluir em direção à efetivação.
        </Text>
      </View>

      {phases.map((phase) => {
        const modules = getPhaseModules(track, phase);
        return (
          <View key={phase} style={styles.phaseBlock}>
            <Text style={styles.phaseTitle}>{phaseLabels[phase].title}</Text>
            <Text style={styles.phaseDescription}>{phaseLabels[phase].description}</Text>
            <View style={styles.list}>
              {modules.map((module) => {
                const index = track.modules.findIndex((item) => item.id === module.id);
                return (
                  <ModuleCard
                    key={module.id}
                    module={module}
                    index={index}
                    completed={isModuleCompleted(module.id)}
                    hasEvidence={hasEvidence(module.id)}
                    onPress={() => router.push(`/module/${module.id}` as never)}
                  />
                );
              })}
            </View>
          </View>
        );
      })}
    </Screen>
  );
}

const styles = StyleSheet.create({
  headerCard: {
    backgroundColor: colors.navy900,
    borderRadius: radius.xxl,
    padding: spacing.lg,
    gap: spacing.md,
    overflow: 'hidden',
  },
  headerText: {
    maxWidth: '72%',
    gap: spacing.sm,
  },
  kicker: {
    color: colors.cyan500,
    fontSize: 12,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: 1.4,
  },
  title: {
    color: colors.white,
    fontSize: 31,
    lineHeight: 38,
    fontWeight: '900',
  },
  titleDark: {
    color: colors.text,
    fontSize: 29,
    lineHeight: 35,
    fontWeight: '900',
  },
  description: {
    color: '#D7EEF7',
    fontSize: 15,
    lineHeight: 24,
  },
  trackIcon: {
    position: 'absolute',
    right: 12,
    top: 92,
    width: 132,
    height: 132,
    resizeMode: 'contain',
    opacity: 0.94,
  },
  progressBox: {
    backgroundColor: 'rgba(255,255,255,0.10)',
    borderRadius: radius.lg,
    padding: spacing.md,
    gap: spacing.sm,
  },
  progressLabel: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '900',
  },
  sectionHeader: {
    gap: spacing.sm,
  },
  sectionDescription: {
    color: colors.textSecondary,
    fontSize: 15,
    lineHeight: 23,
  },
  phaseBlock: {
    gap: spacing.md,
  },
  phaseTitle: {
    color: colors.navy800,
    fontSize: 14,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  phaseDescription: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 21,
    marginTop: -spacing.sm,
  },
  list: {
    gap: spacing.md,
  },
});
