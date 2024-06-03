import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { launchImageLibrary } from 'react-native-image-picker';

const Galerim = ({ navigation }) => {
  const handleGalerim = () => {
    navigation.navigate('MainGaleri'); // Galerim ekranına geçiş yap
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galerim</Text>
      <TouchableOpacity onPress={handleGalerim} style={styles.imageContainer}>
        <Image source={require("./images/Berkaycan.jpg")} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const Favorilerim = ({ navigation }) => {
  const handleFavorilerim = () => {
    navigation.navigate('MainFavori'); // Favorilerim ekranına geçiş yap
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorilerim</Text>
      <TouchableOpacity onPress={handleFavorilerim} style={styles.imageContainer}>
        <Image source={require("./images/guts.jpg")} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  const [images, setImages] = useState([
    { id: 1, source: require("./images/Berkaycan.jpg") },
    { id: 2, source: require("./images/guts.jpg") }
  ]);

  const handleImagePress = (id) => {
    if (id === 1) {
      navigation.navigate('MainGaleri'); // Galerim ekranına geçiş yap
    } else if (id === 2) {
      navigation.navigate('favorite'); // Favorilerim ekranına geçiş yap
    }
  };

  const handleAddImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets && response.assets.length > 0) {
        const newImage = {
          id: images.length + 1,
          source: { uri: response.assets[0].uri }
        };
        setImages([...images, newImage]);
      }
    });
  };

  const renderImageItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleImagePress(item.id)} style={styles.imageContainer}>
      <Image source={item.source} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Text style={[styles.title, { width: 500 }, { height: 50 }]}>Koleksiyonum</Text>
        <View style={styles.Galeri}>
          <Text style={styles.title}>Galerim</Text>
          <FlatList
            data={images}
            renderItem={renderImageItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerStyle={styles.imageList}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleAddImage}>
          <Text style={styles.buttonText}>Resim Ekle</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'lightseagreen',
    backgroundColor: 'rgb(230, 220, 226)',
    paddingVertical: 5,
    margin: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  imageList: {
    justifyContent: 'center',
  },
  imageContainer: {
    borderColor: 'black',
    borderWidth: 3,
    width: '48%',
    aspectRatio: 1,
    margin: '1%',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  Galeri: {
    marginLeft: 10,
    display: 'flex',
  },
  button: {
    backgroundColor: 'lightseagreen',
    padding: 10,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default HomeScreen;
