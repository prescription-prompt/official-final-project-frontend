import { ScrollView, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { GeneralStyles, SignInStyles } from '../styles/Styles';
import { useState } from 'react';
import axios from 'axios';

export default function SignIn({ setLoggedIn, setPage, setUser }) {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const signIn = async () => {
    const { data } = await axios.post(`http://192.168.10.185:9090/api/users/`, {
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
    <ScrollView style={[GeneralStyles.fullScreen, GeneralStyles.mt50]}>
      <ScrollView style={[GeneralStyles.card, GeneralStyles.cardSmall, GeneralStyles.mb20]}>
        <Image style={SignInStyles.image} source={require('../assets/PP_logo.png')} />
      </ScrollView>
      <ScrollView style={[GeneralStyles.card, GeneralStyles.mb20]}>
        <TextInput
          style={GeneralStyles.textInput}
          placeholder='First Name'
          autoCapitalize='none'
          value={FirstName}
          onChange={(e) => setFirstName(e.nativeEvent.text)}
        ></TextInput>

        <TextInput
          style={GeneralStyles.textInput}
          placeholder='Last Name'
          autoCapitalize='none'
          value={LastName}
          onChange={(e) => setLastName(e.nativeEvent.text)}
        ></TextInput>

        <TextInput
          style={GeneralStyles.textInput}
          placeholder='Email Address'
          autoCapitalize='none'
          value={Email}
          onChange={(e) => setEmail(e.nativeEvent.text)}
        ></TextInput>

        <TextInput
          style={GeneralStyles.textInput}
          placeholder='Password'
          autoCapitalize='none'
          value={Password}
          onChange={(e) => setPassword(e.nativeEvent.text)}
        ></TextInput>

        <TouchableOpacity style={GeneralStyles.outlineBtn} onPress={() => signIn()}>
          <Text style={GeneralStyles.outlineBtnText}>CREATE AN ACCOUNT</Text>
        </TouchableOpacity>
      </ScrollView>
      <Text style={[GeneralStyles.blue, GeneralStyles.bold, GeneralStyles.textCenter, GeneralStyles.mb5]}>
        Already have an account?
      </Text>
      <ScrollView style={[GeneralStyles.half, GeneralStyles.center]}>
        <TouchableOpacity onPress={() => setPage('SignIn')} style={GeneralStyles.btn}>
          <Text style={GeneralStyles.btnText}>SIGN IN</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScrollView>
  );
}
