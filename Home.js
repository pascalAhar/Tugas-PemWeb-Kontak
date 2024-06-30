import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const Home = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button title="Kontak" onPress={()=> navigation.navigate('Kontak')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: '',
    alignItems: '',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Home;