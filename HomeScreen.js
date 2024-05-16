import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";

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

const HomeScreen = ({ navigation }) => {
  const [images, setImages] = useState([
    { id: 1, source: require("./images/Berkaycan.jpg") },
    // Diğer resimleri buraya ekleyin...
  ]);

  const handleImagePress = () => {
    navigation.navigate('MainGaleri'); // Galerim ekranına geçiş yap
  };

  const renderImageItem = ({ item }) => (
    <TouchableOpacity onPress={handleImagePress} style={styles.imageContainer}>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    borderRadius: 5,
    borderWidth: 4,
    borderColor: 'lightseagreen',
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 5,
    maxHeight: 600,
    maxWidth: 390,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  imageList: {
    justifyContent: 'center',
    marginTop: 5,
    maxWidth: 120,
  },
  imageContainer: {
    borderColor: 'black',
    borderWidth: 5,
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  Galeri: {
    marginLeft: 10,
  },
});

export default HomeScreen;
