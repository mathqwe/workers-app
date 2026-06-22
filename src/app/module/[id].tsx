import { router, useLocalSearchParams } from 'expo-router';
import { Linking, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton } from '@/components/workers/AppButton';
import { useProgress } from '@/context/progress-context';
import { getModuleById } from '@/data/tracks';
import { colors, radius, spacing } from '@/theme/colors';

export default function ModuleDetailScreen() {
  const params = useLocalSearchParams<{ id: string }>();
  const result = getModuleById(params.id);
  const { isModuleCompleted, toggleModule } = useProgress();

  if (!result) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titleDark}>Módulo não encontrado</Text>
          <AppButton title="Voltar" onPress={() => router.back()} />
        </View>
      </SafeAreaView>
    );
  }

  const { module, track } = result;
  const completed = isModuleCompleted(module.id);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <AppButton title="Voltar" variant="outline" onPress={() => router.back()} />

        <View style={styles.headerCard}>
          <Text style={styles.kicker}>{track.title}</Text>
          <Text style={styles.title}>{module.title}</Text>
          <Text style={styles.description}>{module.description}</Text>
          <Text style={styles.time}>Tempo estimado: {module.estimatedTime}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Por que isso importa?</Text>
          <Text style={styles.bodyText}>{module.whyItMatters}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Competências trabalhadas</Text>
          <View style={styles.skillsWrap}>
            {module.skills.map((skill) => (
              <Text key={skill} style={styles.skillBadge}>
                {skill}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Materiais recomendados</Text>
          <View style={styles.materialsList}>
            {module.materials.map((material) => (
              <View key={material.id} style={styles.materialItem}>
                <View style={styles.materialTextArea}>
                  <Text style={styles.materialTitle}>{material.title}</Text>
                  <Text style={styles.materialProvider}>{material.provider}</Text>
                </View>
                <AppButton
                  title="Abrir"
                  onPress={() => Linking.openURL(material.url)}
                  style={styles.smallButton}
                />
              </View>
            ))}
          </View>
        </View>

        <AppButton
          title={completed ? 'Marcar como pendente' : 'Marcar como concluído'}
          variant={completed ? 'outline' : 'primary'}
          onPress={() => toggleModule(module.id)}
        />
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
  titleDark: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '900',
  },
  description: {
    color: '#D6EAF3',
    fontSize: 14,
    lineHeight: 21,
  },
  time: {
    color: colors.cyan500,
    fontSize: 13,
    fontWeight: '900',
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.lg,
    gap: spacing.md,
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
  skillsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  skillBadge: {
    backgroundColor: '#E0F7FF',
    color: colors.navy800,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: '800',
    overflow: 'hidden',
  },
  materialsList: {
    gap: spacing.md,
  },
  materialItem: {
    gap: spacing.md,
    paddingBottom: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  materialTextArea: {
    gap: 4,
  },
  materialTitle: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '800',
  },
  materialProvider: {
    color: colors.textSecondary,
    fontSize: 13,
    fontWeight: '600',
  },
  smallButton: {
    minHeight: 42,
  },
});
