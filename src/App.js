import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Button, { ButtonTypes } from './components/Button';
import { useState } from 'react';

const Operators = {
  CLEAR: 'C',
  MINUS: '-',
  PLUS: '+',
  EQUAL: '=',
};

export default function App() {
  const [result, setResult] = useState(0);

  let width = (useWindowDimensions().width - 5) / 4;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.resultContainer}>
        <Text style={styles.result}>{result}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.leftContainer}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap-reverse',
              justifyContent: 'space-evenly',
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => {
              return (
                <Button
                  key={num}
                  title={num.toString()}
                  buttonStyle={{ width, height: width, marginTop: 1 }}
                  onPress={() => {}}
                  buttonType={ButtonTypes.NUMBER}
                />
              );
            })}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginBottom: 1,
            }}
          >
            <Button
              title="0"
              buttonStyle={{ width: width * 2, height: width, marginBottom: 1 }}
              buttonType={ButtonTypes.NUMBER}
              onPress={() => {}}
            />
            <Button
              title={Operators.EQUAL}
              buttonStyle={{ width: width, height: width, marginBottom: 1 }}
              buttonType={ButtonTypes.OPERATOR}
              onPress={() => {}}
            />
          </View>
        </View>
        <View style={styles.rightContainer}>
          <Button
            title={Operators.CLEAR}
            buttonStyle={{ width, height: width, marginBottom: 1 }}
            buttonType={ButtonTypes.OPERATOR}
          />
          <Button
            title={Operators.MINUS}
            buttonStyle={{ width, height: width, marginBottom: 1 }}
            buttonType={ButtonTypes.OPERATOR}
          />
          <Button
            title={Operators.PLUS}
            buttonStyle={{ width, height: width * 2, marginBottom: 1 }}
            buttonType={ButtonTypes.OPERATOR}
          />
        </View>
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
    backgroundColor: '#000000',
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: '#000',
  },
  result: {
    color: '#ffffff',
    fontSize: 60,
    fontWeight: '700',
    paddingBottom: 30,
    paddingRight: 10,
  },
  leftContainer: {
    width: '75%',
  },
  rightContainer: {},
  numberContainer: {},
});
