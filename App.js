import { SafeAreaView, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import Header from './components/Header';
import HomePage from './components/HomePage';
import SignIn from './components/SignIn';

export default function App() {
  const [LoggedIn, setLoggedIn] = useState(false);
  const [Title, setTitle] = useState('HomePage');
  const [Page, setPage] = useState('Homepage');

  useEffect(() => {
    if (!LoggedIn) setTitle('Sign In to your Account');
    if (LoggedIn && Page === 'Homepage') setTitle('Hi, Username');
    if (LoggedIn && Page === 'AddMedication') setTitle('Add Medication');
  }, [Page, LoggedIn]);

  return (
    <>
      <StatusBar style='auto' />
      <SafeAreaView>
        <Header title={Title} loggedIn={LoggedIn} setLoggedIn={setLoggedIn} setPage={setPage} />
        {LoggedIn ? Page === 'Homepage' && <HomePage /> : Page === 'Homepage' && <SignIn setLoggedIn={setLoggedIn} />}
        {Page === 'AddMedication' && <Text>Add Medication</Text>}
      </SafeAreaView>
    </>
  );
}
