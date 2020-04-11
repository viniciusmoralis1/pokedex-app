import React from 'react';
import { View, Text, Image, FlatList, useState } from 'react-native';

import styles from './style';

import logo from '../../img/logo.png';

export default function Home() {
  // const [setPokemons, pokemons] = useState([]);

  const pokemons = [{name: "Bulbasaur", type:"Grass", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", id: 1},
                    {name: "Charmander", type:"Fire", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", id: 2},
                    {name: "Squirtle", type:"Water", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", id: 3}];

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
            <Image style={styles.avatar} source={{uri: pokemon.sprite}} />
            <Text styles={styles.pokemonValue}>{pokemon.name}</Text>
            <Text styles={styles.pokemonValue}>{pokemon.type}</Text>
          </View>
        )}
      />
    </View>
  )
}