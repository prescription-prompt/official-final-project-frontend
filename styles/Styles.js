import { StyleSheet, Platform, StatusBar } from 'react-native';

export const GeneralStyles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export const HeaderStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    padding: 10,
    borderBottomWidth: 2,
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

export const NextPromptStyles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    width: '90%',
    marginTop: 20,
    paddingBottom: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
  remember: {
    marginTop: 10,
  },
  medication: {
    fontSize: 28,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
  },
  timer: {
    fontSize: 28,
  },
});

export const MedCalendarStyles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '90%',
    marginTop: 20,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
  outerContainer: {
    height: '60%',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftCol: {
    textAlign: 'center',
    borderRightColor: '#000000',
    borderRightWidth: 2,
    padding: 5,
    width: '33%',
  },
  rightCol: {
    padding: 5,
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
