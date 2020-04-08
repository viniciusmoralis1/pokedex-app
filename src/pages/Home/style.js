import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Constants.statusBarHeight + 18,
    backgroundColor: "#E24134",
  },
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logo: {
    width: '32%'
  },
  
  textHeader: {
    fontSize: 13,
    color: "#EEE"
  },

  pokemonList: {
    marginTop: 32
  },

  pokemon: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginBottom: 10
  },
});