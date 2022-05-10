import { Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { GeneralStyles, HeaderStyles } from '../styles/Styles';

export default function Header({ title, loggedIn, setLoggedIn, Page, setPage }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const changePage = (newPage) => {
    setPage(newPage);
    setMenuIsOpen(false);
  };

  const SignOut = () => {
    setPage('SignIn');
    setLoggedIn(false);
    setMenuIsOpen(false);
  };

  return (
    <>
      <View>
        <Text>{title}</Text>
        <TouchableOpacity onPress={() => setMenuIsOpen(!menuIsOpen)}>
          {!loggedIn ? null : <Text style={HeaderStyles.menu_toggle}>M</Text>}
        </TouchableOpacity>
      </View>

      <View style={[HeaderStyles.menu, { display: menuIsOpen ? 'flex' : 'none' }]}>
        <TouchableOpacity style={[HeaderStyles.menu_button, { marginTop: 20 }]} onPress={() => changePage('Homepage')}>
          <Text>Homepage</Text>
        </TouchableOpacity>
        <TouchableOpacity style={HeaderStyles.menu_button} onPress={() => changePage('AddMedication')}>
          <Text>Add Medication</Text>
        </TouchableOpacity>
        <TouchableOpacity style={HeaderStyles.menu_button} onPress={() => SignOut()}>
          <Text style={{ color: '#ff0000' }}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
