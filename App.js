import { SafeAreaView, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import Header from './components/Header';
import HomePage from './components/HomePage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AddMedication from './components/AddMedication';

export default function App() {
  const [LoggedIn, setLoggedIn] = useState(true);
  const [Title, setTitle] = useState(`Sign In to your Account`);
  const [Page, setPage] = useState('SignIn');
  const [User, setUser] = useState({});

  useEffect(() => {
    if (!LoggedIn && Page === 'SignIn') setTitle('Sign In to your Account');
    if (!LoggedIn && Page === 'SignUp') setTitle('Create an Account');
    if (LoggedIn && Page === 'Homepage') setTitle(`Hi, ${User.firstName} ${User.lastName}`);
    if (LoggedIn && Page === 'AddMedication') setTitle('Add Medication');
  }, [Page, LoggedIn]);

  return (
    <>
      <StatusBar style='auto' />
      <SafeAreaView>
        <Header title={Title} loggedIn={LoggedIn} setLoggedIn={setLoggedIn} page={Page} setPage={setPage} />
        {!LoggedIn
          ? Page === 'SignIn' && <SignIn setLoggedIn={setLoggedIn} setPage={setPage} setUser={setUser} />
          : null}
        {!LoggedIn
          ? Page === 'SignUp' && <SignUp setLoggedIn={setLoggedIn} setPage={setPage} setUser={setUser} />
          : null}
        {LoggedIn ? Page === 'Homepage' && <HomePage setPage={setPage} /> : null}
        {LoggedIn ? Page === 'AddMedication' && <AddMedication User={User} /> : null}
      </SafeAreaView>
    </>
  );
}
