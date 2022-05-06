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
    marginLeft: 20,
    marginBottom: 20,
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
    height: '32%',
    marginTop: 20,
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

export const SignInStyles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    width: 200,
    height: 200,
    marginTop: 50,
    marginBottom: 50,
  },
  input: {
    alignSelf: 'center',
    width: '90%',
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
  },
  signin_button: {
    alignSelf: 'center',
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    width: '90%',
    borderColor: '#19ba00',
  },
});
