import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton } from '@/components/workers/AppButton';
import { ProgressBar } from '@/components/workers/ProgressBar';
import { useProgress } from '@/context/progress-context';
import { getTrackById } from '@/data/tracks';
import { colors, radius, spacing } from '@/theme/colors';

export default function ProfileScreen() {
  const { selectedTrackId, getTrackProgress, getCompletedCount } = useProgress();
  const track = getTrackById(selectedTrackId ?? 'facilities');

  if (!track) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <AppButton title="Voltar" variant="outline" onPress={() => router.back()} />

        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>A</Text>
          </View>
          <Text style={styles.name}>Aprendiz Workers</Text>
          <Text style={styles.role}>{track.targetRole}</Text>
          <ProgressBar value={getTrackProgress(track)} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Resumo</Text>
          <Text style={styles.bodyText}>Trilha atual: {track.title}</Text>
          <Text style={styles.bodyText}>
            Módulos concluídos: {getCompletedCount(track)} de {track.modules.length}
          </Text>
          <Text style={styles.bodyText}>
            Certificados: funcionalidade prevista para próxima versão do protótipo.
          </Text>
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
  profileCard: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    padding: spacing.lg,
    alignItems: 'center',
    gap: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  avatar: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: colors.navy900,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: colors.cyan500,
    fontSize: 32,
    fontWeight: '900',
  },
  name: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '900',
  },
  role: {
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: '700',
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
});
