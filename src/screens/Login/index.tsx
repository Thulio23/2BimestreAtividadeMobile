import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './stytes';

export function Home() {
  return (
    <View style={styles.container}>
      <Text>Bora de Moon Board</Text>
      <StatusBar style="auto" />
    </View>
  );
}

