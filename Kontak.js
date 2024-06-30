import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import KontakDetail from './KontakDetail';

const Kontak = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Kontak</Text>
      <KontakDetail
        gambar={require('../assets/satu.jpeg')}
        judul="Pascal Ahar Ma'ruf"
        telpon="089638409228"
      />
      <KontakDetail
        gambar={require('../assets/dua.jpeg')}
        judul="Pjar Dhiya Ulhaq"
        telpon="089634528293"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Kontak;