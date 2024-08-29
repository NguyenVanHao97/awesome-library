import { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppButton, { multiply } from 'awesome-library';

export default function App() {
  const [result, setResult] = useState<number | undefined>();

  useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <AppButton onPress={() => setResult((i) => (i ?? 0) + 1)}>
        Multiply
      </AppButton>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
