import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton } from '@/components/workers/AppButton';
import { ProgressBar } from '@/components/workers/ProgressBar';
import { useProgress } from '@/context/progress-context';
import { getTrackById } from '@/data/tracks';
import { colors, radius, spacing } from '@/theme/colors';

export default function CompanyDashboardScreen() {
  const { user, selectedTrackId, getTrackProgress, getCompletedCount, evidences } = useProgress();
  const track = getTrackById(selectedTrackId);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.headerCard}>
          <Text style={styles.kicker}>Portal da empresa</Text>
          <Text style={styles.title}>Visão de acompanhamento</Text>
          <Text style={styles.description}>
            Demonstração web do que a empresa verá quando o Firebase estiver conectado.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>{user?.name ?? 'Aprendiz Workers'}</Text>
          <Text style={styles.bodyText}>Trilha: {track?.title ?? 'não selecionada'}</Text>
          <Text style={styles.bodyText}>Objetivo: {track?.targetRole ?? 'aguardando escolha'}</Text>
          {track ? <ProgressBar value={getTrackProgress(track)} label={`${getCompletedCount(track)} etapas concluídas`} /> : null}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Evidências</Text>
          <Text style={styles.bodyText}>{evidences.length} evidência(s) registrada(s).</Text>
        </View>

        <AppButton title="Voltar ao app do aprendiz" onPress={() => router.replace('/home' as never)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    padding: spacing.lg,
    gap: spacing.lg,
  },
  headerCard: {
    backgroundColor: colors.navy900,
    borderRadius: radius.xxl,
    padding: spacing.lg,
    gap: spacing.md,
  },
  kicker: {
    color: colors.cyan500,
    fontSize: 13,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  title: {
    color: colors.white,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '900',
  },
  description: {
    color: '#D7EEF7',
    fontSize: 15,
    lineHeight: 23,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    padding: spacing.lg,
    gap: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardTitle: {
    color: colors.text,
    fontSize: 19,
    fontWeight: '900',
  },
  bodyText: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 22,
  },
});
