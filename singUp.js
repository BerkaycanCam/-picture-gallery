import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, ImageBackground} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };


  return (
    <ImageBackground
     source={require('./images/arkaplanSingup.jpg')}
     style={styles.background}>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Kullanıcı Adı"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="E-posta"
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Kayıt Ol" onPress={handleSignUp} />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background:{
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '70%',
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color:'white'
  },
});

export default LoginScreen;
