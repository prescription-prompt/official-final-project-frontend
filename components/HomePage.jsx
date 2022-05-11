import NextPrompt from './NextPrompt';
import MedCalendar from './MedCalendar';
import NavButtons from './NavButtons';
import { useState } from 'react';
import { ScrollView, View } from 'react-native-web';

export default function HomePage({ setPage }) {
  return (
    <>
      <NextPrompt />
      <MedCalendar />
      <NavButtons setPage={setPage} />
    </>
  );
}
