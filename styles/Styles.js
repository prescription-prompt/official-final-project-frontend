import { StyleSheet, Platform, StatusBar } from 'react-native';

export const HeaderStyles = StyleSheet.create({
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
