import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { router } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <ThemedText type="title" style={styles.title}>
          Beyond
        </ThemedText>

        <ThemedText style={styles.subtitle}>
          Your interests. Your future. Your Beyond.
        </ThemedText>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">A world of possibilities.</ThemedText>

          <ThemedText>
            Discover careers beyond the obvious. Explore your interests and find paths you never knew existed.
          </ThemedText>

          <Pressable style={styles.button}
            onPress={() => router.navigate('/explore')}
          >
            <ThemedText style={styles.buttonText}>Explore Careers</ThemedText>
          </Pressable>
        </ThemedView>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
    justifyContent: 'center',
    gap: 24,
  },
  title: {
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
  },
  section: {
    padding: 20,
    gap: 12,
    borderRadius: 12,
  },
  button: {
    backgroundColor: '#426B52',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
