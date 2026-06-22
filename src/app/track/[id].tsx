import { router, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton } from '@/components/workers/AppButton';
import { ModuleCard } from '@/components/workers/ModuleCard';
import { ProgressBar } from '@/components/workers/ProgressBar';
import { useProgress } from '@/context/progress-context';
import { getTrackById } from '@/data/tracks';
import { colors, radius, spacing } from '@/theme/colors';

export default function TrackDetailScreen() {
  const params = useLocalSearchParams<{ id: string }>();
  const { getTrackProgress, isModuleCompleted } = useProgress();
  const track = getTrackById(params.id);

  if (!track) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Trilha não encontrada</Text>
          <AppButton title="Voltar" onPress={() => router.back()} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <AppButton title="Voltar" variant="outline" onPress={() => router.back()} />

        <View style={styles.headerCard}>
          <Text style={styles.kicker}>{track.area}</Text>
          <Text style={styles.title}>{track.targetRole}</Text>
          <Text style={styles.description}>{track.description}</Text>
          <ProgressBar value={getTrackProgress(track)} />
        </View>

        <View style={styles.modulesHeader}>
          <Text style={styles.sectionTitle}>Roadmap de competências</Text>
          <Text style={styles.sectionDescription}>
            Avance módulo por módulo e marque o que já foi concluído.
          </Text>
        </View>

        <View style={styles.list}>
          {track.modules.map((module, index) => (
            <ModuleCard
              key={module.id}
              module={module}
              index={index}
              completed={isModuleCompleted(module.id)}
              onPress={() => router.push(`/module/${module.id}` as never)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.lg,
    gap: spacing.lg,
  },
  headerCard: {
    backgroundColor: colors.navy900,
    borderRadius: radius.xl,
    padding: spacing.lg,
    gap: spacing.md,
  },
  kicker: {
    color: colors.cyan500,
    fontSize: 13,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  title: {
    color: colors.white,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '900',
  },
  description: {
    color: '#D6EAF3',
    fontSize: 14,
    lineHeight: 21,
  },
  modulesHeader: {
    gap: spacing.sm,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '900',
  },
  sectionDescription: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 20,
  },
  list: {
    gap: spacing.md,
  },
});
