import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const HomeScreen = () => {
  // Resim verilerini tutacak state
  const [images, setImages] = useState([
    { id: 1, source: require("./images/Berkaycan.jpg") },

    // Diğer resimleri buraya ekleyin...
  ]);
  const [FavoriImages, setFavori] = useState([
    { id: 2, source: require("./images/guts.jpg") },
  ]);

  const [Ekle, setEkle] = useState([
    { id: 3, source: require("./images/Ekleme.jpg") },
  ]);
  // Resme tıklandığında yapılacak işlem
  const handleImagePress = (id) => {
    // İlgili resmin büyütülmüş versiyonunu göstermek için istediğiniz navigasyon veya başka bir işlemi burada yapabilirsiniz.
    console.log("Tıklanan resmin IDsi:", id);
    // buraya tıklandığında galerideki bütün fotoğrafları görüntüleyen kod bloğu gelecek.
  };

  // Her bir resmin render edilmesi için kullanılan özel işlev
  const renderImageItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleImagePress(item.id)}
      style={styles.imageContainer}
    >
      <Image source={item.source} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.body}>
      <View style={styles.container}>
      <Text style ={[styles.title,{width:500},{height:50}]}>Koleksiyonum</Text>
        <View style={styles.Galeri}>
          <Text style={styles.title}>Galerim</Text>
          <FlatList
            data={images}
            renderItem={renderImageItem} // renderItem prop'unu tekrar etkinleştirin
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerStyle={styles.imageList}
          />
        </View>
        <View style={styles.Favori}>
          <Text style={styles.title}>Favoriler</Text>
          <FlatList
            data={FavoriImages}
            renderItem={renderImageItem} // renderItem prop'unu tekrar etkinleştirin
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerStyle={styles.imageList}
          />
        </View>
        <View style={styles.Ekleme}>
          <Text style={styles.title}>Kategori Ekle</Text>
          <FlatList
            data={Ekle}
            renderItem={renderImageItem} // renderItem prop'unu tekrar etkinleştirin
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
    flex:1,
    

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
    flexDirection: 'row', // Dikey düzen
    flexWrap: 'wrap', // Taşmaları yönetmek için
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
    marginLeft:10,
  },
  Favori:{
    marginLeft:50,

  },
  Ekleme:{
    marginTop:20,
    marginLeft:10,

  },
});

export default HomeScreen;
