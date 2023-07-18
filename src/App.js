import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button, { ButtonTypes } from './components/Button';
import { useState } from 'react';

export default function App() {
  const [result, setResult] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.resultContainer}>
        <Text style={styles.result}>{result}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Text>Button</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  result: {
    color: '#ffffff',
    fontSize: 60,
    fontWeight: '700',
    paddingBottom: 30,
    paddingRight: 10,
  },
});
