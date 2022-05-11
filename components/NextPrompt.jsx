import { useState } from 'react';
import { Text, View } from 'react-native';
import { GeneralStyles, NextPromptStyles } from '../styles/Styles';

export default function NextPrompt() {
  const [MedicationName, setMedicationName] = useState('MedicationName');
  const [MedicationDosage, setMedicationDosage] = useState('XXmg');
  const [Timer, setTimer] = useState('XX');

  return (
    <View style={GeneralStyles.card}>
      {/* <Text style={[GeneralStyles.cardSubTitle, GeneralStyles.white]}>Prescription Prompt</Text> */}
      <Text style={[GeneralStyles.white, GeneralStyles.bold]}>Remember to take {MedicationDosage} of</Text>
      <Text style={[GeneralStyles.fontLarge, GeneralStyles.white]}>{MedicationName}</Text>
      <View style={[GeneralStyles.flex, GeneralStyles.flexRow]}>
        <Text style={GeneralStyles.white}>in </Text>
        <Text style={[GeneralStyles.fontLarge, GeneralStyles.white]}>{Timer} minutes</Text>
      </View>
    </View>
  );
}
