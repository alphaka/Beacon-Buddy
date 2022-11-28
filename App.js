import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import screen_loader from './app/images/loader1.jpeg';

export default function App() {
  return (
    <View style={styles.container}>
      <img src={screen_loader} alt="welcome_page" />
      <Text>WELCOME TO BEACON BUDDY</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
