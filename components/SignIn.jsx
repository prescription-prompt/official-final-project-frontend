import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { SignInStyles } from '../styles/Styles';

export default function SignIn({ setLoggedIn }) {
  const SignIn = () => {
    setLoggedIn(true);
  };

  return (
    <View>
      <Image style={SignInStyles.image} source={require('../assets/medical.png')} />
      <TextInput style={[SignInStyles.input, { marginTop: 20 }]} placeholder='Email Address'></TextInput>
      <TextInput style={SignInStyles.input} placeholder='Password'></TextInput>
      <TouchableOpacity style={SignInStyles.signin_button} onPress={() => SignIn()}>
        <Text style={{ textAlign: 'center' }}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
}
