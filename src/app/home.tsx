import { router } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

import { AppButton } from '@/components/workers/AppButton';
import { ProgressBar } from '@/components/workers/ProgressBar';
import { Screen } from '@/components/workers/Screen';
import { useProgress } from '@/context/progress-context';
import { getTrackById } from '@/data/tracks';
import { colors, radius, spacing } from '@/theme/colors';

export default function HomeScreen() {
  const { selectedTrackId, user, getTrackProgress, getCompletedCount, isModuleCompleted } = useProgress();
  const track = getTrackById(selectedTrackId);
  const userName = user?.name?.split(' ')[0] || 'aprendiz';

  if (!track) {
    return (
      <Screen>
        <View style={styles.topBrand}>
          <Image source={require('../../assets/images/workers/logo-full.png')} style={styles.logo} />
        </View>

        <View style={styles.emptyHero}>
          <Image source={require('../../assets/images/workers/logo-mark.png')} style={styles.emptyMark} />
          <Text style={styles.emptyKicker}>Olá, {userName} 👋</Text>
          <Text style={styles.emptyTitle}>Comece escolhendo uma trilha</Text>
          <Text style={styles.emptyDescription}>
            Depois disso, o Workers mostra seu roadmap, os materiais indicados e as evidências da sua evolução.
          </Text>
          <AppButton title="Escolher trilha" variant="secondary" onPress={() => router.push('/select-track' as never)} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>O que você vai testar amanhã?</Text>
          <Text style={styles.bodyText}>• Escolha de trilha por área</Text>
          <Text style={styles.bodyText}>• Roadmap com etapas práticas</Text>
          <Text style={styles.bodyText}>• Materiais recomendados</Text>
          <Text style={styles.bodyText}>• Marcação de progresso e evidências</Text>
        </View>
      </Screen>
    );
  }

  const progress = getTrackProgress(track);
  const completedCount = getCompletedCount(track);
  const nextModule = track.modules.find((module) => !isModuleCompleted(module.id));

  return (
    <Screen>
      <View style={styles.topBrand}>
        <Image source={require('../../assets/images/workers/logo-full.png')} style={styles.logo} />
      </View>

      <View style={styles.hero}>
        <View style={styles.heroText}>
          <Text style={styles.greeting}>Olá, {userName} 👋</Text>
          <Text style={styles.title}>Seu caminho para {track.targetRole}</Text>
          <Text style={styles.description}>{track.description}</Text>
        </View>
        <Image source={track.icon} style={styles.heroIcon} />
      </View>

      <View style={styles.progressCard}>
        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.cardTitle}>Progresso da trilha</Text>
            <Text style={styles.bodyText}>
              {completedCount} de {track.modules.length} etapas concluídas
            </Text>
          </View>
          <Text style={styles.progressNumber}>{progress}%</Text>
        </View>
        <ProgressBar value={progress} showLabel={false} />
      </View>

      {nextModule ? (
        <View style={styles.nextCard}>
          <Text style={styles.kicker}>Próxima etapa</Text>
          <Text style={styles.nextTitle}>{nextModule.title}</Text>
          <Text style={styles.nextDescription}>{nextModule.summary}</Text>
          <AppButton
            title="Continuar trilha"
            variant="secondary"
            onPress={() => router.push(`/module/${nextModule.id}` as never)}
          />
        </View>
      ) : (
        <View style={styles.nextCard}>
          <Text style={styles.kicker}>Trilha concluída</Text>
          <Text style={styles.nextTitle}>Você concluiu todas as etapas.</Text>
          <Text style={styles.nextDescription}>Agora revise suas evidências e prepare sua conversa de efetivação.</Text>
          <AppButton title="Ver evidências" variant="secondary" onPress={() => router.push('/certificates' as never)} />
        </View>
      )}

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Estrutura da jornada</Text>
        <View style={styles.journeyItem}>
          <Text style={styles.journeyNumber}>1</Text>
          <View style={styles.journeyText}>
            <Text style={styles.journeyTitle}>Comece pela base</Text>
            <Text style={styles.bodyText}>Comunicação, postura, organização e ferramentas essenciais.</Text>
          </View>
        </View>
        <View style={styles.journeyItem}>
          <Text style={styles.journeyNumber}>2</Text>
          <View style={styles.journeyText}>
            <Text style={styles.journeyTitle}>Pratique na rotina</Text>
            <Text style={styles.bodyText}>Use planilhas, checklists, registros e exemplos reais de trabalho.</Text>
          </View>
        </View>
        <View style={styles.journeyItem}>
          <Text style={styles.journeyNumber}>3</Text>
          <View style={styles.journeyText}>
            <Text style={styles.journeyTitle}>Mostre que está pronto</Text>
            <Text style={styles.bodyText}>Registre certificados, prints ou atividades e acompanhe sua evolução.</Text>
          </View>
        </View>
      </View>

      <AppButton title="Ver roadmap completo" onPress={() => router.push(`/track/${track.id}` as never)} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  topBrand: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mark: {
    width: 44,
    height: 44,
    resizeMode: 'contain',
  },
  logo: {
    width: 124,
    height: 34,
    resizeMode: 'contain',
  },
  emptyHero: {
    backgroundColor: colors.navy900,
    borderRadius: radius.xxl,
    padding: spacing.lg,
    gap: spacing.md,
  },
  emptyMark: {
    width: 62,
    height: 62,
    resizeMode: 'contain',
  },
  emptyKicker: {
    color: colors.cyan500,
    fontSize: 14,
    fontWeight: '900',
  },
  emptyTitle: {
    color: colors.white,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '900',
  },
  emptyDescription: {
    color: '#D7EEF7',
    fontSize: 15,
    lineHeight: 23,
  },
  hero: {
    flexDirection: 'row',
    backgroundColor: colors.navy900,
    borderRadius: radius.xxl,
    padding: spacing.lg,
    gap: spacing.md,
    overflow: 'hidden',
  },
  heroText: {
    flex: 1,
    gap: spacing.sm,
  },
  greeting: {
    color: colors.cyan500,
    fontSize: 14,
    fontWeight: '900',
  },
  title: {
    color: colors.white,
    fontSize: 26,
    lineHeight: 33,
    fontWeight: '900',
  },
  description: {
    color: '#D7EEF7',
    fontSize: 15,
    lineHeight: 23,
  },
  heroIcon: {
    width: 104,
    height: 104,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  progressCard: {
    backgroundColor: colors.white,
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
    gap: spacing.md,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    padding: spacing.lg,
    gap: spacing.md,
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
  progressNumber: {
    color: colors.cyan600,
    fontSize: 32,
    fontWeight: '900',
  },
  nextCard: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    padding: spacing.lg,
    gap: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  kicker: {
    color: colors.cyan600,
    fontSize: 12,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  nextTitle: {
    color: colors.text,
    fontSize: 23,
    lineHeight: 29,
    fontWeight: '900',
  },
  nextDescription: {
    color: colors.textSecondary,
    fontSize: 15,
    lineHeight: 23,
  },
  journeyItem: {
    flexDirection: 'row',
    gap: spacing.md,
    alignItems: 'flex-start',
  },
  journeyNumber: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.cyanSoft,
    color: colors.navy800,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
    fontWeight: '900',
    overflow: 'hidden',
    paddingTop: 7,
  },
  journeyText: {
    flex: 1,
    gap: 2,
  },
  journeyTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '900',
  },
});
