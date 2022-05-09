import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { SignInStyles } from '../styles/Styles';
import { useState } from 'react';
import axios from 'axios';

export default function SignIn({ setLoggedIn, setPage }) {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const signIn = async () => {
    await axios.post(`http://localhost:9090/api/users/`, {
      firstName: FirstName,
      lastName: LastName,
      email: Email,
      password: Password,
    });
    setLoggedIn(true);
    setPage('Homepage');
  };

  return (
    <View>
      <Image style={SignInStyles.image} source={require('../assets/medical.png')} />

      <TextInput
        style={[SignInStyles.input, { marginTop: 20 }]}
        placeholder='First Name'
        autoCapitalize='none'
        value={FirstName}
        onChange={(e) => setFirstName(e.nativeEvent.text)}
      ></TextInput>

      <TextInput
        style={SignInStyles.input}
        placeholder='Last Name'
        autoCapitalize='none'
        value={LastName}
        onChange={(e) => setLastName(e.nativeEvent.text)}
      ></TextInput>

      <TextInput
        style={SignInStyles.input}
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

      <TouchableOpacity style={SignInStyles.signin_button} onPress={() => signIn()}>
        <Text style={{ textAlign: 'center' }}>CREATE AN ACCOUNT</Text>
      </TouchableOpacity>

      <Text>
        Already have an account?
        <TouchableOpacity onPress={() => setPage('SignIn')}>
          <Text>SIGN IN</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}
