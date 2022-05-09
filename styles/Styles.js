import { StyleSheet, Platform, StatusBar } from 'react-native';

export const GeneralStyles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
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
    width: 160,
    height: 160,
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
  change_page: {
    alignSelf: 'center',
    marginTop: 10,
  },
  change_page_btn: {
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 20,
    width: '40%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#005EB8',
  },
  change_page_btn_text: {
    alignSelf: 'center',
    fontSize: 14,
    color: '#005EB8',
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
