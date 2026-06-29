import { router } from 'expo-router';
import { Image, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

import { AppButton } from '@/components/workers/AppButton';
import { colors, radius, spacing } from '@/theme/colors';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardView}>
        <View style={styles.topBar}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backText}>‹</Text>
          </Pressable>
          <Image source={require('../../assets/images/workers/logo-full.png')} style={styles.logo} />
          <View style={styles.backButtonPlaceholder} />
        </View>

        <Text style={styles.title}>Recuperar senha</Text>
        <Text style={styles.subtitle}>Informe o e-mail da sua conta para receber as orientações de acesso.</Text>

        <View style={styles.card}>
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Digite seu e-mail"
              placeholderTextColor={colors.textMuted}
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
            />
          </View>

          {sent ? (
            <View style={styles.successBox}>
              <Text style={styles.successTitle}>Solicitação registrada</Text>
              <Text style={styles.successText}>
                Se este e-mail estiver cadastrado, você receberá as orientações para recuperar o acesso.
              </Text>
            </View>
          ) : null}

          <AppButton title={sent ? 'Voltar para login' : 'Enviar orientação'} onPress={() => (sent ? router.replace('/' as never) : setSent(true))} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  keyboardView: {
    flex: 1,
    padding: spacing.lg,
    gap: spacing.lg,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonPlaceholder: {
    width: 46,
    height: 46,
  },
  backText: {
    color: colors.navy900,
    fontSize: 34,
    lineHeight: 34,
    fontWeight: '800',
    marginTop: -4,
  },
  logo: {
    width: 126,
    height: 34,
    resizeMode: 'contain',
  },
  title: {
    color: colors.text,
    fontSize: 34,
    lineHeight: 40,
    fontWeight: '900',
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 16,
    lineHeight: 24,
    marginTop: -spacing.sm,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.xxl,
    padding: spacing.lg,
    gap: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
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
  successBox: {
    backgroundColor: colors.cyanSoft,
    borderRadius: radius.md,
    padding: spacing.md,
    gap: spacing.xs,
  },
  successTitle: {
    color: colors.navy800,
    fontSize: 15,
    fontWeight: '900',
  },
  successText: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 20,
  },
});
