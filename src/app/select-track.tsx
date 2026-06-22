import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TrackCard } from '@/components/workers/TrackCard';
import { useProgress } from '@/context/progress-context';
import { tracks } from '@/data/tracks';
import { colors, spacing } from '@/theme/colors';

export default function SelectTrackScreen() {
  const { setSelectedTrackId } = useProgress();

  function handleSelectTrack(trackId: string) {
    setSelectedTrackId(trackId);
    router.push('/home' as never);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.kicker}>Workers</Text>
          <Text style={styles.title}>Qual trilha combina com seu objetivo?</Text>
          <Text style={styles.description}>
            Escolha uma área para visualizar competências, materiais e progresso recomendado para
            efetivação.
          </Text>
        </View>

        <View style={styles.list}>
          {tracks.map((track) => (
            <TrackCard key={track.id} track={track} onPress={() => handleSelectTrack(track.id)} />
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
  header: {
    gap: spacing.sm,
  },
  kicker: {
    color: colors.cyan600,
    fontSize: 14,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  title: {
    color: colors.text,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '900',
  },
  description: {
    color: colors.textSecondary,
    fontSize: 15,
    lineHeight: 22,
  },
  list: {
    gap: spacing.md,
  },
});
