import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  TouchableOpacity,
  Image
} from 'react-native';

export default function CharactersListScreen({ navigation }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  const renderCharacter = ({ item }) => (
    <TouchableOpacity
      style={styles.characterCard}
      onPress={() => navigation.navigate('CharacterDetails', { character: item })}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.characterImage}
      />
      <View style={styles.characterInfo}>
        <Text style={styles.characterName}>{item.name}</Text>
        <Text style={styles.characterStatus}>
          {item.status} - {item.species}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personagens</Text>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCharacter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff',
    padding: 10
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold',
    marginBottom: 10
  },
  characterCard: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8
  },
  characterImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  characterInfo: {
    flex: 1,
  },
  characterName: { 
    fontSize: 16, 
    fontWeight: 'bold'
  },
  characterStatus: { 
    fontSize: 14, 
    color: '#666'
  }
});