import { SafeAreaView, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import Header from './components/Header';
import HomePage from './components/HomePage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AddMedication from './components/AddMedication';

export default function App() {
  const [LoggedIn, setLoggedIn] = useState(false);
  const [Title, setTitle] = useState('Hi, Username');
  const [Page, setPage] = useState('SignIn');

  useEffect(() => {
    if (!LoggedIn) setTitle('Sign In to your Account');
    if (!LoggedIn && Page === 'SignUp') setTitle('Create an Account');
    if (LoggedIn && Page === 'Homepage') setTitle('Hi, Username');
    if (LoggedIn && Page === 'AddMedication') setTitle('Add Medication');
  }, [Page, LoggedIn]);

  return (
    <>
      <StatusBar style='auto' />
      <SafeAreaView>
        <Header title={Title} loggedIn={LoggedIn} setLoggedIn={setLoggedIn} setPage={setPage} />
        {!LoggedIn ? Page === 'SignIn' && <SignIn setLoggedIn={setLoggedIn} setPage={setPage} /> : null}
        {!LoggedIn ? Page === 'SignUp' && <SignUp setLoggedIn={setLoggedIn} setPage={setPage} /> : null}
        {LoggedIn ? Page === 'Homepage' && <HomePage setPage={setPage} /> : null}
        {LoggedIn ? Page === 'AddMedication' && <AddMedication /> : null}

        {/* {!LoggedIn
          ? Page === 'SignUp' && <SignUp setLoggedIn={setLoggedIn} setPage={setPage} />
          : Page === 'SignUp' && <SignIn setLoggedIn={setLoggedIn} setPage={setPage} />}

        {LoggedIn
          ? Page === 'Homepage' && <HomePage setPage={setPage} />
          : Page === 'Homepage' && <SignIn setLoggedIn={setLoggedIn} setPage={setPage} />}

        {LoggedIn
          ? Page === 'AddMedication' && <AddMedication />
          : Page === 'AddMedication' && <SignIn setLoggedIn={setLoggedIn} setPage={setPage} />} */}
      </SafeAreaView>
    </>
  );
}
