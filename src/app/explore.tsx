import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function ExploreScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView>
      <View style={styles.content}>
        <ThemedText type="title" style={styles.title}>
          Explore Careers
        </ThemedText>

        <ThemedText style={styles.subtitle}>
          A world of possibilities beyond the obvious.
        </ThemedText>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">
            Find your possibilities
          </ThemedText>

          <ThemedText>
            Discover careers across different fields,
            explore your interests, and learn about
            paths you may never have considered.
          </ThemedText>  
        </ThemedView>

        <ThemedText type="subtitle">
          Explore by interest
        </ThemedText>
        <View style={styles.categoryList}>
          <View style={styles.category}>
            <ThemedText>Technology</ThemedText>
          </View>

          <View style={styles.category}>
            <ThemedText>Healthcare</ThemedText>
          </View>

          <View style={styles.category}>
            <ThemedText>Design</ThemedText>
          </View>

          <View style={styles.category}>
            <ThemedText>Business</ThemedText>
          </View>

          <View style={styles.category}>
            <ThemedText>Environment</ThemedText>
          </View>

          
        </View>

        <ThemedText style={styles.note}>
          Your career journey starts here.
        </ThemedText>
     </View>
     </ScrollView>
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
    gap: 24,
  },
  subtitle: {
    textAlign: 'center',
  },
  section: {
    padding: 20,
    gap: 12,
    borderRadius: 12,
  },
  title: {
    textAlign: 'center',
  },
  note: {

    textAlign: 'center',
    opacity: 0.7,
  },
  categoryList: {
    gap:12,
  },
  category: {
    backgroundColor: '#E9F5FF',
    padding: 18,
    borderRadius: 14,

  },
});
