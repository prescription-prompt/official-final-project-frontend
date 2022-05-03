import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { useState } from 'react';
import Header from './components/Header';

export default function App() {
  // this state will change based on the page you are on
  // Homepage = "Hi, Username" || Add Medication = "Add Medication"
  const [Title, setTitle] = useState('Hi, Username');

  return (
    <>
      <StatusBar style='auto' />
      <SafeAreaView>
        <Header title={Title} />
      </SafeAreaView>
    </>
  );
}
