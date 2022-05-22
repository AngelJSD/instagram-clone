
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@instagram-clone/instagram-ui';

export function App() {
  return (
    <View style={styles.box}>
      <Button title="Button web" />
      <Button title="Button outlined web" variant="outlined"/>
      <Text style={styles.text}>This is a demo page.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontSize: 18 },
});

export default App;
