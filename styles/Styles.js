import { StyleSheet, Platform, StatusBar } from 'react-native';

export const GeneralStyles = StyleSheet.create({
  body: {
    backgroundColor: '#CDDDEF',
  },
  fullScreen: {
    height: '100%',
    width: '100%',
  },
  half: {
    width: '50%',
  },
  center: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  blue: {
    color: '#005EB8',
  },
  bold: {
    fontWeight: 'bold',
  },
  textCenter: {
    textAlign: 'center',
  },
  mb5: {
    marginBottom: 5,
  },
  mb10: {
    marginBottom: 10,
  },
  mb20: {
    marginBottom: 20,
  },
  mt5: {
    marginTop: 5,
  },
  mt10: {
    marginTop: 10,
  },
  mt20: {
    marginTop: 20,
  },
  mt50: {
    marginTop: 50,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#005EB8',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    padding: 20,
  },
  cardSmall: {
    marginLeft: 60,
    marginRight: 60,
  },
  textInput: {
    alignSelf: 'center',
    width: '100%',
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    color: '#000000',
  },
  btn: {
    backgroundColor: '#005EB8',
    borderRadius: 10,
    padding: 5,
    width: 'auto',
  },
  btnText: {
    color: '#ffffff',
    textAlign: 'center',
  },
  outlineBtn: {
    alignSelf: 'center',
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    width: '100%',
    borderColor: '#ffffff',
    color: '#ffffff',
  },
  outlineBtnText: {
    color: '#ffffff',
    textAlign: 'center',
  },
});

export const HeaderStyles = StyleSheet.create({
  container: {
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

export const SignInStyles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    width: 220,
    height: 120,
  },
});

export const AddMedicationStyles = StyleSheet.create({
  input: {
    alignSelf: 'center',
    width: '90%',
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
  },
  split: {
    alignSelf: 'center',
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
  },
  split_left: {
    width: '52%',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  split_right: {
    width: '38%',
    borderLeftWidth: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  split_left_triple: {
    width: '30%',
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  split_middle_triple: {
    width: '30%',
    borderRadius: 0,
  },
  split_right_triple: {
    width: '30%',
    borderLeftWidth: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  button_text: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  submit_button: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    width: '51%',
    marginRight: '2%',
    borderColor: '#19ba00',
  },
  clear_button: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    width: '37%',
    borderColor: '#fd5452',
  },
  add_med_button: {
    alignSelf: 'center',
    alignItems: 'center',
    width: '90%',
    height: '10%',
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 10,
  },
  add_med_button_text: {
    fontSize: 28,
  },
});
