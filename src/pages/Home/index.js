import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';

import styles from './style';

import logo from '../../img/logo.png';

export default function Home() {

  const pokemons = [{name: "Bulbasaur", type:"grass", id: 1},{name: "Squirtle", type:"water", id: 2},{name: "Charmander", type:"fire", id: 3}];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo}/>
        <Text style={styles.textHeader}>Total de 150 Pokémons</Text>
      </View>
      

      <FlatList 
        data={pokemons}
        keyExtractor={pokemon => String(pokemon.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: pokemon}) => (
          <View style={styles.listaPokemons}>
            <Text styles={styles.pokemons}>{pokemon.name}</Text>
            <Text styles={styles.pokemons}>{pokemon.type}</Text>
          </View>
        )}
      />
    </View>
  )
}