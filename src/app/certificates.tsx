import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { AppButton } from '@/components/workers/AppButton';
import { Screen } from '@/components/workers/Screen';
import { useProgress } from '@/context/progress-context';
import { getModuleById } from '@/data/tracks';
import { colors, radius, spacing } from '@/theme/colors';

export default function CertificatesScreen() {
  const { evidences } = useProgress();

  return (
    <Screen>
      <View style={styles.header}>
        <Text style={styles.kicker}>Evidências</Text>
        <Text style={styles.title}>Registros de aprendizado</Text>
        <Text style={styles.description}>
          Guarde aqui certificados, prints ou documentos que mostram que você praticou uma etapa da trilha.
        </Text>
      </View>

      {evidences.length === 0 ? (
        <View style={styles.emptyCard}>
          <Text style={styles.emptyTitle}>Nenhuma evidência ainda</Text>
          <Text style={styles.bodyText}>
            Abra uma etapa da trilha e toque em “Adicionar evidência” para registrar um certificado, print ou atividade prática.
          </Text>
          <AppButton title="Ir para trilhas" onPress={() => router.push('/select-track' as never)} />
        </View>
      ) : (
        <View style={styles.list}>
          {evidences.map((evidence) => {
            const result = getModuleById(evidence.moduleId);
            return (
              <View key={evidence.id} style={styles.evidenceCard}>
                <Text style={styles.evidenceTitle}>{evidence.title}</Text>
                <Text style={styles.evidenceTrack}>{result?.track.title ?? 'Trilha'}</Text>
                <Text style={styles.bodyText}>{evidence.fileName}</Text>
                <Text style={styles.status}>Registrado no dispositivo</Text>
              </View>
            );
          })}
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    gap: spacing.sm,
  },
  kicker: {
    color: colors.cyan600,
    fontSize: 13,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  title: {
    color: colors.text,
    fontSize: 31,
    lineHeight: 38,
    fontWeight: '900',
  },
  description: {
    color: colors.textSecondary,
    fontSize: 15,
    lineHeight: 23,
  },
  emptyCard: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    padding: spacing.lg,
    gap: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  emptyTitle: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '900',
  },
  bodyText: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 22,
  },
  list: {
    gap: spacing.md,
  },
  evidenceCard: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    padding: spacing.lg,
    gap: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  evidenceTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '900',
  },
  evidenceTrack: {
    color: colors.cyan600,
    fontSize: 13,
    fontWeight: '900',
  },
  status: {
    color: '#166534',
    fontSize: 12,
    fontWeight: '900',
  },
});
