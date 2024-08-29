import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppButton from 'awesome-library';

export default function App() {
  const [result, setResult] = useState<number | undefined>();

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
