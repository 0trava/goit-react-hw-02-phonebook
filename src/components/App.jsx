// Встановлення через термінал
// $ npm install --save nanoid

// import { nanoid } from 'nanoid';
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

import {Component} from 'react';
import ContactForm from "./Form/ContactForm";
import ContactsList from "./ContactsList/ContactsList";
import Filter from "./Filter/Filter";
import css from "./App.module.css";



class App extends Component {

// Ввідні данні  
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}



// РЕНДНЕРІНГ сторінки
  render () {
      const { contacts, filter, name, number } = this.state;

      return (
      <div className={css.container}>
        <h1 className={css.section_title}>Phonebook</h1>
        <ContactForm />

        <h2 className={css.section_title}>Contacts</h2>
        <Filter  />
        <ContactsList contacts={contacts}></ContactsList>
      </div>
  );}
};

export default App;
