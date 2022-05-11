import { StyleSheet, Platform, StatusBar } from 'react-native';

export const GeneralStyles = StyleSheet.create({
  body: {
    backgroundColor: '#CDDDEF',
  },
  fullScreen: {
    height: '100%',
    width: '100%',
    padding: 20,
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
  white: {
    color: '#ffffff',
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
  p10: {
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  fontLarge: {
    fontSize: 28,
  },
  fontMed: {
    fontSize: 20,
  },
  fontSmall: {
    fontSize: 12,
  },
  flex: {
    display: 'flex',
  },
  flexCol: {
    flexDirection: 'column',
  },
  flexRow: {
    flexDirection: 'row',
  },
  alignItemsBase: {
    alignItems: 'baseline',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#005EB8',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
  },
  cardWhite: {
    backgroundColor: '#ffffff',
  },
  cardSmall: {
    marginLeft: 60,
    marginRight: 60,
  },
  cardHalf: {
    width: '48%',
  },
  cardHalfLeft: {
    marginRight: '2%',
  },
  cardHalfRight: {
    marginLeft: '2%',
  },
  cardSubTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  cardBorder: {
    borderColor: '#005EB8',
    borderWidth: 4,
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
    display: 'flex',
    marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    paddingTop: 20,
    paddingBottom: 20,
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftContainer: {
    width: '60%',
  },
  rightContainer: {
    width: 'auto',
  },
  title: {
    color: '#005EB8',
    fontWeight: 'bold',
    marginBottom: 0,
    fontSize: 24,
  },
  menu: {
    backgroundColor: '#005EB8',
    width: '100%',
    borderRadius: 10,
    marginTop: 20,
    padding: 20,
  },
  menu_button: {
    marginBottom: 20,
    paddingBottom: 10,
    width: '100%',
    borderColor: '#ffffff',
    borderBottomWidth: 2,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export const MedCalendarStyles = StyleSheet.create({
  leftCol: {
    textAlign: 'center',
    borderRightColor: '#005eb8',
    borderRightWidth: 2,
    padding: 5,
    width: '45%',
  },
  leftColTitle: {
    fontSize: 22,
  },
  rightCol: {
    padding: 5,
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  height: {
    height: '50%',
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
    width: '100%',
    marginBottom: 10,
    padding: 13,
    backgroundColor: '#ffffff',
    borderRadius: 15,
  },
  inputLabel: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
    paddingLeft: 15,
    paddingBottom: 5,
  },
  split: {
    alignSelf: 'center',
    borderRadius: 10,
  },
  splitLeft: {
    width: '60%',
  },
  splitLeftInput: {
    backgroundColor: '#ffffff',
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  splitRight: {
    width: '40%',
  },
  splitRightInput: {
    borderLeftWidth: 5,
    borderColor: '#005eb8',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderRadius: 10,
  },
  dropdown: {
    color: '#ffffff',
    backgroundColor: 'red',
  },
  splitThird: {
    width: '33%',
    marginBottom: 10,
  },
  splitThirdInput: {
    borderColor: '#005eb8',
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  splitThirdLeft: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  splitThirdMid: {
    borderRadius: 0,
    borderLeftWidth: 5,
    borderRightWidth: 5,
  },
  splitThirdRight: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  submitButton: {
    padding: 15,
    borderRadius: 10,
    width: '60%',
    marginRight: '2%',
    backgroundColor: '#4CC37E',
  },
  clearButton: {
    padding: 15,
    borderRadius: 10,
    width: '38%',
    backgroundColor: '#C34C4C',
  },
});
