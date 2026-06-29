import { router } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

import { AppButton } from '@/components/workers/AppButton';
import { ProgressBar } from '@/components/workers/ProgressBar';
import { Screen } from '@/components/workers/Screen';
import { useProgress } from '@/context/progress-context';
import { getTrackById } from '@/data/tracks';
import { colors, radius, spacing } from '@/theme/colors';

export default function ProfileScreen() {
  const { user, selectedTrackId, getTrackProgress, getCompletedCount, evidences, logout } = useProgress();
  const track = getTrackById(selectedTrackId);
  const name = user?.name ?? 'Aprendiz Workers';
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('');

  function handleLogout() {
    logout();
    router.replace('/' as never);
  }

  return (
    <Screen>
      <View style={styles.brandRow}>
        <Image source={require('../../assets/images/workers/logo-full.png')} style={styles.logo} />
      </View>

      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initials || 'A'}</Text>
        </View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{user?.email ?? 'aprendiz@workers.app'}</Text>
        {track ? <Text style={styles.role}>{track.targetRole}</Text> : <Text style={styles.role}>Trilha ainda não escolhida</Text>}
        {track ? <ProgressBar value={getTrackProgress(track)} label="Progresso atual" /> : null}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Resumo</Text>
        <Text style={styles.bodyText}>Trilha atual: {track?.title ?? 'nenhuma selecionada'}</Text>
        <Text style={styles.bodyText}>
          Etapas concluídas: {track ? `${getCompletedCount(track)} de ${track.modules.length}` : '0'}
        </Text>
        <Text style={styles.bodyText}>Evidências registradas: {evidences.length}</Text>
      </View>

      <View style={styles.cardAccent}>
        <Text style={styles.cardTitle}>Evidências de aprendizado</Text>
        <Text style={styles.bodyText}>
          Aqui ficam certificados, prints, documentos ou atividades que mostram que você praticou uma etapa da trilha.
        </Text>
        <AppButton title="Ver evidências" variant="secondary" onPress={() => router.push('/certificates' as never)} />
      </View>

      <AppButton title="Sair" variant="outline" onPress={handleLogout} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  brandRow: {
    alignItems: 'center',
  },
  logo: {
    width: 124,
    height: 34,
    resizeMode: 'contain',
  },
  profileCard: {
    backgroundColor: colors.white,
    borderRadius: radius.xxl,
    padding: spacing.lg,
    alignItems: 'center',
    gap: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  avatar: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: colors.navy900,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: colors.cyan500,
    fontSize: 30,
    fontWeight: '900',
  },
  name: {
    color: colors.text,
    fontSize: 25,
    fontWeight: '900',
    textAlign: 'center',
  },
  email: {
    color: colors.textSecondary,
    fontSize: 13,
    fontWeight: '700',
  },
  role: {
    color: colors.navy800,
    fontSize: 14,
    fontWeight: '900',
    textAlign: 'center',
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    padding: spacing.lg,
    gap: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardAccent: {
    backgroundColor: colors.cyanSoft,
    borderRadius: radius.lg,
    padding: spacing.lg,
    gap: spacing.md,
    borderWidth: 1,
    borderColor: '#CFEFF7',
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
