import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  const [images, setImages] = useState([
    { id: '1', source: require('./images/arkaplanLogin.jpg') },
    { id: '2', source: require('./images/Berkaycan.jpg') },
    { id: '3', source: require('./images/guts.jpg') },
    { id: '4', source: require('./images/Ekleme.jpg') }
  ]);

  const renderImageItem = ({ item }) => (
    <TouchableOpacity style={styles.imageContainer}>
      <Image source={item.source} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorilerim</Text>
      <FlatList
        data={images}
        renderItem={renderImageItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.imageList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  imageList: {
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 1,
    margin: 5,
    aspectRatio: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default HomeScreen;
