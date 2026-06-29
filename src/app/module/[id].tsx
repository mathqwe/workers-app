import { router, useLocalSearchParams } from 'expo-router';
import { Alert, Linking, Pressable, StyleSheet, Text, View } from 'react-native';

import { AppButton } from '@/components/workers/AppButton';
import { Screen } from '@/components/workers/Screen';
import { useProgress } from '@/context/progress-context';
import { getModuleById, phaseLabels } from '@/data/tracks';
import { colors, radius, spacing } from '@/theme/colors';

export default function ModuleDetailScreen() {
  const params = useLocalSearchParams<{ id: string }>();
  const result = getModuleById(params.id);
  const { isModuleCompleted, toggleModule, addEvidence, hasEvidence, getEvidenceByModule } = useProgress();

  if (!result) {
    return (
      <Screen>
        <Text style={styles.titleDark}>Etapa não encontrada</Text>
        <AppButton title="Voltar" onPress={() => router.back()} />
      </Screen>
    );
  }

  const { module, track } = result;
  const completed = isModuleCompleted(module.id);
  const evidence = getEvidenceByModule(module.id);
  const evidenceAdded = hasEvidence(module.id);

  function handleAddEvidence() {
    addEvidence(module.id, track.id, module.title);
    Alert.alert('Evidência registrada', 'Depois, este botão poderá enviar um certificado, print ou documento para o perfil do aprendiz.');
  }

  return (
    <Screen>
      <AppButton title="Voltar" variant="outline" onPress={() => router.back()} />

      <View style={styles.headerCard}>
        <Text style={styles.kicker}>{track.title}</Text>
        <Text style={styles.title}>{module.title}</Text>
        <Text style={styles.description}>{module.summary}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Por que isso importa</Text>
        <Text style={styles.bodyText}>{module.whyItMatters}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>O que você precisa aprender</Text>
        <View style={styles.checklist}>
          {module.learnChecklist.map((item, index) => (
            <View key={`${module.id}-${index}`} style={styles.checkItem}>
              <Text style={styles.checkIcon}>✓</Text>
              <Text style={styles.checkText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.cardAccent}>
        <Text style={styles.cardTitle}>Como aplicar na prática</Text>
        <Text style={styles.bodyText}>{module.practice}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Materiais recomendados</Text>
        <Text style={styles.bodyText}>
          Use os links como ponto de partida. O objetivo é aprender o suficiente para aplicar na rotina, não assistir conteúdo sem praticar.
        </Text>
        <View style={styles.materialsList}>
          {module.materials.map((material) => (
            <Pressable
              key={material.id}
              onPress={() => Linking.openURL(material.url)}
              style={({ pressed }) => [styles.materialItem, pressed && styles.materialPressed]}>
              <View style={styles.materialTextArea}>
                <Text style={styles.materialTitle}>{material.title}</Text>
                <Text style={styles.materialProvider}>{material.provider}</Text>
                <Text style={styles.materialNote}>{material.note}</Text>
              </View>
              <Text style={styles.openText}>Abrir</Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Comprovar aprendizado</Text>
        <Text style={styles.bodyText}>{module.evidencePrompt}</Text>
        {evidence ? (
          <View style={styles.evidenceBox}>
            <Text style={styles.evidenceTitle}>Evidência adicionada</Text>
            <Text style={styles.evidenceText}>{evidence.fileName}</Text>
          </View>
        ) : null}
        <AppButton
          title={evidenceAdded ? 'Evidência registrada' : 'Adicionar evidência'}
          variant={evidenceAdded ? 'success' : 'outline'}
          onPress={handleAddEvidence}
        />
      </View>

      <View style={styles.cardFooter}>
        <Text style={styles.phaseText}>{phaseLabels[module.phase].title}</Text>
        <AppButton
          title={completed ? 'Marcar como pendente' : 'Concluir etapa'}
          variant={completed ? 'outline' : 'primary'}
          onPress={() => toggleModule(module.id)}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  headerCard: {
    backgroundColor: colors.navy900,
    borderRadius: radius.xxl,
    padding: spacing.lg,
    gap: spacing.md,
  },
  kicker: {
    color: colors.cyan500,
    fontSize: 12,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  title: {
    color: colors.white,
    fontSize: 28,
    lineHeight: 35,
    fontWeight: '900',
  },
  titleDark: {
    color: colors.text,
    fontSize: 26,
    fontWeight: '900',
  },
  description: {
    color: '#D7EEF7',
    fontSize: 15,
    lineHeight: 24,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    padding: spacing.lg,
    gap: spacing.md,
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
  cardFooter: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    padding: spacing.lg,
    gap: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  phaseText: {
    color: colors.cyan600,
    fontSize: 13,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: 1.3,
  },
  cardTitle: {
    color: colors.text,
    fontSize: 19,
    fontWeight: '900',
  },
  bodyText: {
    color: colors.textSecondary,
    fontSize: 15,
    lineHeight: 24,
  },
  checklist: {
    gap: spacing.sm,
  },
  checkItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
  },
  checkIcon: {
    color: colors.success,
    fontSize: 16,
    fontWeight: '900',
    marginTop: 2,
  },
  checkText: {
    flex: 1,
    color: colors.text,
    fontSize: 15,
    lineHeight: 23,
    fontWeight: '600',
  },
  materialsList: {
    gap: spacing.md,
  },
  materialItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: '#FBFDFF',
  },
  materialPressed: {
    opacity: 0.85,
  },
  materialTextArea: {
    flex: 1,
    gap: 3,
  },
  materialTitle: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '900',
  },
  materialProvider: {
    color: colors.cyan600,
    fontSize: 12,
    fontWeight: '900',
  },
  materialNote: {
    color: colors.textSecondary,
    fontSize: 12,
    lineHeight: 18,
  },
  openText: {
    color: colors.navy900,
    fontSize: 13,
    fontWeight: '900',
  },
  evidenceBox: {
    backgroundColor: colors.successSoft,
    borderRadius: radius.md,
    padding: spacing.md,
    gap: 2,
  },
  evidenceTitle: {
    color: '#166534',
    fontSize: 14,
    fontWeight: '900',
  },
  evidenceText: {
    color: '#166534',
    fontSize: 13,
    fontWeight: '700',
  },
});
