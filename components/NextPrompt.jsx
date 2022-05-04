import { useState } from 'react';
import { Text, View } from 'react-native';
import { NextPromptStyles } from '../styles/Styles';

export default function NextPrompt() {
  const [MedicationName, setMedicationName] = useState('MedicationName');
  const [MedicationDosage, setMedicationDosage] = useState('XXmg');
  const [Timer, setTimer] = useState('XX');

  return (
    <View style={NextPromptStyles.container}>
      <Text style={NextPromptStyles.remember}>
        Remember to take {MedicationDosage} of
      </Text>
      <Text style={NextPromptStyles.medication}>{MedicationName}</Text>
      <View style={NextPromptStyles.flex}>
        <Text>in </Text>
        <Text style={NextPromptStyles.timer}>{Timer} minutes</Text>
      </View>
    </View>
  );
}
