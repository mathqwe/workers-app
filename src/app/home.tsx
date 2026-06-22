import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton } from '@/components/workers/AppButton';
import { ProgressBar } from '@/components/workers/ProgressBar';
import { useProgress } from '@/context/progress-context';
import { getTrackById } from '@/data/tracks';
import { colors, radius, spacing } from '@/theme/colors';

export default function HomeScreen() {
  const { selectedTrackId, getTrackProgress, getCompletedCount, isModuleCompleted } = useProgress();
  const track = getTrackById(selectedTrackId ?? 'facilities');

  if (!track) {
    return null;
  }

  const progress = getTrackProgress(track);
  const completedCount = getCompletedCount(track);
  const nextModule = track.modules.find((module) => !isModuleCompleted(module.id)) ?? track.modules[0];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.hero}>
          <Text style={styles.logo}>Workers</Text>
          <Text style={styles.greeting}>Olá, aprendiz 👋</Text>
          <Text style={styles.title}>Seu caminho para {track.targetRole}</Text>
          <Text style={styles.description}>{track.description}</Text>
        </View>

        <View style={styles.progressCard}>
          <View style={styles.rowBetween}>
            <Text style={styles.cardTitle}>Progresso da trilha</Text>
            <Text style={styles.counter}>
              {completedCount}/{track.modules.length}
            </Text>
          </View>
          <ProgressBar value={progress} />
        </View>

        <View style={styles.nextCard}>
          <Text style={styles.cardTitle}>Próxima recomendação</Text>
          <Text style={styles.nextTitle}>{nextModule.title}</Text>
          <Text style={styles.nextDescription}>{nextModule.description}</Text>
          <AppButton
            title="Abrir módulo"
            onPress={() => router.push(`/module/${nextModule.id}` as never)}
          />
        </View>

        <View style={styles.actions}>
          <AppButton
            title="Ver roadmap completo"
            variant="secondary"
            onPress={() => router.push(`/track/${track.id}` as never)}
          />
          <AppButton
            title="Perfil do aprendiz"
            variant="outline"
            onPress={() => router.push('/profile' as never)}
          />
          <AppButton
            title="Demonstração para empresa"
            variant="outline"
            onPress={() => router.push('/company-demo' as never)}
          />
          <AppButton
            title="Trocar trilha"
            variant="outline"
            onPress={() => router.push('/select-track' as never)}
          />
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
  hero: {
    backgroundColor: colors.navy900,
    borderRadius: radius.xl,
    padding: spacing.lg,
    gap: spacing.sm,
  },
  logo: {
    color: colors.cyan500,
    fontSize: 18,
    fontWeight: '900',
  },
  greeting: {
    color: '#B8D9E8',
    fontSize: 14,
    fontWeight: '700',
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
  progressCard: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.lg,
    gap: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  nextCard: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.lg,
    gap: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '900',
  },
  counter: {
    color: colors.cyan600,
    fontSize: 14,
    fontWeight: '900',
  },
  nextTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '900',
  },
  nextDescription: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 20,
  },
  actions: {
    gap: spacing.md,
  },
});
