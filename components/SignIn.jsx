import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { SignInStyles } from '../styles/Styles';
import { useState } from 'react';
import axios from 'axios';

export default function SignIn({ setLoggedIn, setPage }) {
  // Set default Email and Password for testing
  const [Email, setEmail] = useState('lacus@hotmail.edu');
  const [Password, setPassword] = useState('DEO28HDM4DF');

  const SignIn = async () => {
    const { data } = await axios.get(`http://localhost:9090/api/users/${Email}`);
    if (Password === data.user.password) setLoggedIn(true);
  };

  return (
    <View>
      <Image style={SignInStyles.image} source={require('../assets/medical.png')} />

      <TextInput
        style={[SignInStyles.input, { marginTop: 20 }]}
        placeholder='Email Address'
        autoCapitalize='none'
        value={Email}
        onChange={(e) => setEmail(e.nativeEvent.text)}
      ></TextInput>

      <TextInput
        style={SignInStyles.input}
        placeholder='Password'
        autoCapitalize='none'
        value={Password}
        onChange={(e) => setPassword(e.nativeEvent.text)}
      ></TextInput>

      <TouchableOpacity style={SignInStyles.signin_button} onPress={() => SignIn()}>
        <Text style={{ textAlign: 'center' }}>SIGN IN</Text>
      </TouchableOpacity>

      <Text>
        Dont have an account?
        <TouchableOpacity onPress={() => setPage('SignUp')}>
          <Text>SIGN UP</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}
