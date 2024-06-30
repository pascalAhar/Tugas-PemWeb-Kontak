import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const KontakDetail = (props) => {
  return(
    <View style={styles.container}>
      <Image source={props.gambar} style={styles.img}/>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.judul}</Text>
        <Text style={styles.tel}>{props.telpon}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'blue',
  },
  img: {
    margin: 15,
    width: 50,
    height: 50,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  tel: {
    fontSize: 14,
    color: '#3498db',
  },
});

export default KontakDetail;