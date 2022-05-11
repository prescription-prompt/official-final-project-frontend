import NextPrompt from './NextPrompt';
import MedCalendar from './MedCalendar';
import NavButtons from './NavButtons';
import { useState } from 'react';
import { ScrollView, View } from 'react-native-web';

export default function HomePage({ setPage, user }) {
  return (
    <>
      <NextPrompt />
      <MedCalendar user={user} />
      <NavButtons setPage={setPage} />
    </>
  );
}
