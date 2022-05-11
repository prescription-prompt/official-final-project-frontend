import { ScrollView, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SignInStyles } from '../styles/Styles';
import { useState } from 'react';
import axios from 'axios';

export default function SignIn({ setLoggedIn, setPage, setUser }) {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const signIn = async () => {
    Alert.alert(
      'DISCLAIMER',
      'The information on this app is intended for use solely by yourself and can only be as accurate as the data inputted. If you are ever in any doubt about information you read or you are unsure what to do, you should consult a qualified medical practitioner, such as your own GP. While every effort has been made to ensure that the information contained on this app is correct and up-to-date, this cannot be guaranteed. The creators of this app cannot be held responsible for harm, loss or damage resulting from inaccuracies, or actions taken by persons in response to using Prescription Prompt.',
      [{ text: 'ACCEPT', style: 'default' }]
    );
    const { data } = await axios.post(`http://192.168.0.8:9090/api/users/`, {
      firstName: FirstName,
      lastName: LastName,
      email: Email,
      password: Password,
    });
    setUser(data.user);
    setLoggedIn(true);
    setPage('Homepage');
  };

  return (
    <ScrollView style={{ width: '100%', height: '100%' }}>
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

      <Text style={SignInStyles.change_page}>Already have an account?</Text>
      <TouchableOpacity onPress={() => setPage('SignIn')} style={SignInStyles.change_page_btn}>
        <Text style={SignInStyles.change_page_btn_text}>SIGN IN</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
