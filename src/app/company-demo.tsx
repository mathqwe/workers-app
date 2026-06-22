import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton } from '@/components/workers/AppButton';
import { ProgressBar } from '@/components/workers/ProgressBar';
import { useProgress } from '@/context/progress-context';
import { getTrackById } from '@/data/tracks';
import { colors, radius, spacing } from '@/theme/colors';

export default function CompanyDemoScreen() {
  const { selectedTrackId, getTrackProgress, isModuleCompleted } = useProgress();
  const track = getTrackById(selectedTrackId ?? 'facilities');

  if (!track) {
    return null;
  }

  const completed = track.modules.filter((module) => isModuleCompleted(module.id));
  const pending = track.modules.filter((module) => !isModuleCompleted(module.id));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <AppButton title="Voltar" variant="outline" onPress={() => router.back()} />

        <View style={styles.headerCard}>
          <Text style={styles.kicker}>Visão demonstrativa da empresa</Text>
          <Text style={styles.title}>Acompanhamento do aprendiz</Text>
          <Text style={styles.description}>
            Esta tela mostra como a empresa poderia visualizar o desenvolvimento do aprendiz sem
            criar um dashboard completo nesta primeira versão.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Aprendiz Workers</Text>
          <Text style={styles.bodyText}>Objetivo: {track.targetRole}</Text>
          <Text style={styles.bodyText}>Área: {track.area}</Text>
          <ProgressBar value={getTrackProgress(track)} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Competências concluídas</Text>
          {completed.length === 0 ? (
            <Text style={styles.bodyText}>Nenhuma competência concluída ainda.</Text>
          ) : (
            completed.map((module) => (
              <Text key={module.id} style={styles.doneItem}>
                ✓ {module.shortTitle}
              </Text>
            ))
          )}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Próximas competências</Text>
          {pending.slice(0, 3).map((module) => (
            <Text key={module.id} style={styles.pendingItem}>
              • {module.shortTitle}
            </Text>
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
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.lg,
    gap: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '900',
  },
  bodyText: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 22,
  },
  doneItem: {
    color: '#166534',
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 22,
  },
  pendingItem: {
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 22,
  },
});
