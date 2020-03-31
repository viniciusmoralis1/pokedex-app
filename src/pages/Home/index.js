import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './style';

import logo from '../../img/logo.png';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo}/>
        <Text style={styles.textHeader}>Total de 150 Pokémons</Text>
      </View>
      
    </View>
  )
}