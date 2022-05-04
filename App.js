import { SafeAreaView, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import Header from './components/Header';

export default function App() {
  const [Title, setTitle] = useState('Hi, Username');
  const [Page, setPage] = useState('Homepage');

  useEffect(() => {
    if (Page === 'Homepage') setTitle('Hi, Username');
    if (Page === 'AddMedication') setTitle('Add Medication');
  }, [Page]);

  return (
    <>
      <StatusBar style='auto' />
      <SafeAreaView>
        <Header title={Title} setPage={setPage} />
        {Page === 'Homepage' && <Text>Homepage Component</Text>}
        {Page === 'AddMedication' && <Text>AddMedication Component</Text>}
      </SafeAreaView>
    </>
  );
}
