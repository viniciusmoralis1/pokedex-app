import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: Constants.statusBarHeight + 18,
    backgroundColor: "#E93134",
  },
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logo: {
    width: '32%',
  },
  
  textHeader: {
    fontSize: 13,
    color: "#EEE",
  },

  pokemonList: {
    marginTop: 32,
  },

  avatar: {
    width: 102,
    height: 102,
  },

  pokemon: {
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginBottom: 10,
  },
});