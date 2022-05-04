import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';

export default function Header({ title, setPage }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const changePage = (page) => {
    setPage(page);
    setMenuIsOpen(false);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={() => setMenuIsOpen(!menuIsOpen)}>
          <Text style={styles.menu_toggle}>M</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.menu, { display: menuIsOpen ? 'flex' : 'none' }]}>
        <TouchableOpacity
          style={[styles.menu_button, { marginTop: 30 }]}
          onPress={() => changePage('Homepage')}
        >
          <Text>Homepage</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menu_button}
          onPress={() => changePage('AddMedication')}
        >
          <Text>Add Medication</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    padding: 10,
    borderBottomWidth: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  menu_toggle: {
    paddingVertical: 2,
    paddingHorizontal: 6,
    fontSize: 24,
    fontWeight: 'bold',
    borderWidth: 2,
  },
  menu: {
    width: '85%',
    height: '100%',
    borderRightWidth: 2,
    borderRadius: 10,
  },
  menu_button: {
    marginLeft: 30,
    marginBottom: 30,
    padding: 10,
    width: '50%',
    borderWidth: 2,
    borderRadius: 10,
  },
});
