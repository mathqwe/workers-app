import { router } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

import { AppButton } from '@/components/workers/AppButton';
import { Screen } from '@/components/workers/Screen';
import { TrackCard } from '@/components/workers/TrackCard';
import { useProgress } from '@/context/progress-context';
import { tracks } from '@/data/tracks';
import { colors, radius, spacing } from '@/theme/colors';

export default function SelectTrackScreen() {
  const { selectedTrackId, setSelectedTrackId } = useProgress();

  function handleSelectTrack(trackId: string) {
    setSelectedTrackId(trackId);
    router.replace('/home' as never);
  }

  return (
    <Screen>
      <View style={styles.brandRow}>
        <Image source={require('../../assets/images/workers/logo-full.png')} style={styles.logo} />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>Escolha sua trilha</Text>
        <Text style={styles.description}>
          Veja o que aprender, praticar e registrar para evoluir na área escolhida.
        </Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoKicker}>Como funciona</Text>
        <Text style={styles.infoText}>
          Escolha uma área, siga o roadmap, abra materiais gratuitos e registre evidências quando concluir uma etapa.
        </Text>
      </View>

      <View style={styles.list}>
        {tracks.map((track) => (
          <TrackCard
            key={track.id}
            track={track}
            selected={track.id === selectedTrackId}
            onPress={() => handleSelectTrack(track.id)}
          />
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  brandRow: {
    alignItems: 'center',
  },
  mark: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  logo: {
    width: 124,
    height: 34,
    resizeMode: 'contain',
  },
  header: {
    gap: spacing.sm,
  },
  title: {
    color: colors.text,
    fontSize: 31,
    lineHeight: 37,
    fontWeight: '900',
  },
  description: {
    color: colors.textSecondary,
    fontSize: 16,
    lineHeight: 24,
  },
  infoCard: {
    backgroundColor: colors.navy900,
    borderRadius: radius.xl,
    padding: spacing.lg,
    gap: spacing.sm,
  },
  infoKicker: {
    color: colors.cyan500,
    fontSize: 13,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: 1.6,
  },
  infoText: {
    color: '#D7EEF7',
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '600',
  },
  list: {
    gap: spacing.md,
  },
});
