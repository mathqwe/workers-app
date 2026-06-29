import { router } from 'expo-router';
import { Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton } from '@/components/workers/AppButton';
import { colors, radius, spacing } from '@/theme/colors';

export default function CompanyLoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.content}>
        <Image source={require('../../../assets/images/workers/logo-full.png')} style={styles.logo} />

        <View style={styles.card}>
          <Text style={styles.kicker}>Portal da empresa</Text>
          <Text style={styles.title}>Acompanhe aprendizes</Text>
          <Text style={styles.description}>
            Este ambiente será web e separado do app mobile. A empresa poderá visualizar progresso, trilhas e evidências enviadas pelos aprendizes vinculados.
          </Text>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>E-mail corporativo</Text>
            <TextInput placeholder="empresa@exemplo.com" placeholderTextColor={colors.textMuted} style={styles.input} />
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Senha</Text>
            <TextInput placeholder="Digite sua senha" placeholderTextColor={colors.textMuted} secureTextEntry style={styles.input} />
          </View>

          <AppButton title="Entrar no portal" onPress={() => router.push('/company/dashboard' as never)} />
          <AppButton title="Voltar ao app" variant="outline" onPress={() => router.replace('/home' as never)} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.navy950,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: spacing.lg,
    gap: spacing.xl,
  },
  logo: {
    width: 180,
    height: 62,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.xxl,
    padding: spacing.lg,
    gap: spacing.md,
  },
  kicker: {
    color: colors.cyan600,
    fontSize: 13,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
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
    lineHeight: 23,
  },
  fieldGroup: {
    gap: spacing.sm,
  },
  label: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '900',
  },
  input: {
    height: 52,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.borderStrong,
    paddingHorizontal: spacing.md,
    color: colors.text,
    backgroundColor: colors.white,
    fontSize: 15,
  },
});
