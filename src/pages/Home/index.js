import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';

import styles from './style';

import logo from '../../img/logo.png';

export default function Home() {

  const pokemons = [{name: "Bulbasaur", type:"Grass", id: 1},{name: "Squirtle", type:"Water", id: 2},{name: "Charmander", type:"Fire", id: 3}];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo}/>
        <Text style={styles.textHeader}>Total de 150 Pokémons</Text>
      </View>
      

      <FlatList 
        data={pokemons}
        style={styles.pokemonList}
        keyExtractor={pokemon => String(pokemon.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: pokemon}) => (
          <View style={styles.pokemon}>
            <Text styles={styles.pokemonValue}>{pokemon.name}</Text>
            <Text styles={styles.pokemonValue}>{pokemon.type}</Text>
          </View>
        )}
      />
    </View>
  )
}