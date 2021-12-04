
import './App.css';
import React, {useEffect} from 'react'
// import Phonebook from './components/Phonebook/Phonebook';
// import Filter from './components/Filter/Filter';
// import Contacts from './components/Contacts/Contacts';
import {useDispatch, useSelector } from "react-redux"
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { getCurrentUser } from './redux/auth/authOperations';
import { getContactsOperation } from './redux/contacts/contactsOperations';
import { tokenSelector } from './redux/auth/authSelectors';


const App = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(tokenSelector)
  useEffect(() => {
    isAuth && dispatch(getCurrentUser())
    isAuth && dispatch(getContactsOperation())
  }, [dispatch])
  
  return (
    <>
      <Header/>
      <Main/> 
    </>
  );
}

export default App;


