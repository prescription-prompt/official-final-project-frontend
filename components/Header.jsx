import { Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { GeneralStyles, HeaderStyles } from '../styles/Styles';

export default function Header({ title, setPage }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const changePage = (page) => {
    setPage(page);
    setMenuIsOpen(false);
  };

  return (
    <>
      <View style={HeaderStyles.container}>
        <Text style={GeneralStyles.heading}>{title}</Text>
        <TouchableOpacity onPress={() => setMenuIsOpen(!menuIsOpen)}>
          <Text style={HeaderStyles.menu_toggle}>M</Text>
        </TouchableOpacity>
      </View>

      <View
        style={[HeaderStyles.menu, { display: menuIsOpen ? 'flex' : 'none' }]}
      >
        <TouchableOpacity
          style={[HeaderStyles.menu_button, { marginTop: 20 }]}
          onPress={() => changePage('Homepage')}
        >
          <Text>Homepage</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={HeaderStyles.menu_button}
          onPress={() => changePage('AddMedication')}
        >
          <Text>Add Medication</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
