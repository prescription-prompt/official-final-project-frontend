import NextPrompt from './NextPrompt';
import MedCalendar from './MedCalendar';
import { TouchableOpacity, Text } from 'react-native';
import { AddMedicationStyles } from '../styles/Styles';
import { useState } from 'react';

export default function HomePage({ setPage }) {
  return (
    <>
      <NextPrompt />
      <MedCalendar />
      <TouchableOpacity style={[AddMedicationStyles.add_med_button]} onPress={() => setPage('AddMedication')}>
        <Text style={[AddMedicationStyles.add_med_button_text]}>Add A New Medication</Text>
      </TouchableOpacity>
    </>
  );
}
