import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default function CharacterDetailsScreen({ navigation, route }) {
  const { character } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>← Voltar</Text>
      </TouchableOpacity>
      
      <Image
        source={{ uri: character.image }}
        style={styles.characterImage}
      />
      
      <Text style={styles.characterName}>{character.name}</Text>
      <Text style={styles.characterStatus}>
        {character.status} - {character.species}
      </Text>
      
      <View style={styles.infoSection}>
        <Text>Origem: {character.origin?.name}</Text>
        <Text>Localização: {character.location?.name}</Text>
        <Text>Gênero: {character.gender}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  backButton: {
    fontSize: 18,
    color: '#007AFF',
    marginBottom: 10
  },
  characterImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 10
  },
  characterName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5
  },
  characterStatus: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10
  },
  infoSection: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8
  }
});