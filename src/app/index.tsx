import { router } from 'expo-router';
import { Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton } from '@/components/workers/AppButton';
import { colors, radius, spacing } from '@/theme/colors';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardView}>
        <View style={styles.logoArea}>
          <Image source={require('../../assets/images/logo-glow.png')} style={styles.logo} />
          <Text style={styles.subtitle}>Trilhas práticas para sua efetivação</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Entrar</Text>
          <Text style={styles.description}>Acesse seu roadmap de desenvolvimento profissional.</Text>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              placeholder="Digite seu e-mail"
              placeholderTextColor="#9CA3AF"
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
            />
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              placeholder="Digite sua senha"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              style={styles.input}
            />
          </View>

          <AppButton title="Entrar no protótipo" onPress={() => router.push('/select-track' as never)} />

          <Text style={styles.helperText}>Esqueci minha senha</Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.navy900,
  },
  keyboardView: {
    flex: 1,
    justifyContent: 'center',
    padding: spacing.lg,
  },
  logoArea: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  logo: {
    width: 250,
    height: 95,
    resizeMode: 'contain',
  },
  subtitle: {
    color: '#B8D9E8',
    fontSize: 14,
    fontWeight: '600',
    marginTop: -8,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    padding: spacing.lg,
    gap: spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.2,
    shadowRadius: 24,
    elevation: 6,
  },
  title: {
    color: colors.text,
    fontSize: 26,
    fontWeight: '800',
  },
  description: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 20,
  },
  fieldGroup: {
    gap: spacing.sm,
  },
  label: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '700',
  },
  input: {
    height: 50,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    color: colors.text,
    backgroundColor: colors.white,
  },
  helperText: {
    color: colors.cyan600,
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '700',
  },
});
