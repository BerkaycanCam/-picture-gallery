import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ImageBackground } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Home'); // 'Home' ekranına yönlendirme
    // Giriş işlemleri burada gerçekleştirilebilir
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp'); // Kayıt ol ekranına yönlendirme
  };

  return (
    <ImageBackground
      source={require('./images/arkaplanLogin.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Kullanıcı adı" />
        <TextInput style={styles.input} placeholder="Şifre" secureTextEntry />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
        <View style={{ marginVertical: 5 }} />
        <TouchableOpacity onPress={handleSignUp} >
          <Text style={styles.signUpText} >Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  input: {
    height: 40,
    width: '70%',
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'white',
    borderRadius:5,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signUpText: {
    fontSize:15,
    color: 'white',
    textDecorationLine: 'underline',
  },

});

export default LoginScreen;
