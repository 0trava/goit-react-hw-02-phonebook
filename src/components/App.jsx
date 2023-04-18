// Встановлення через термінал генератор id
// $ npm install --save nanoid


// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"
import { nanoid } from 'nanoid';// підключення генератора id
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

// INPUT - зберігаємо данні при вводі текста 
handleChange = (event) => {
      const {name, value} = event.currentTarget;
      this.setState({[name]: value});
    }


// SUBMIT(ADD CONTACT) - зберігаємо данні по кліку на кнопку 
clickSubmit = e => {
  e.preventDefault(); // Зупиняємо оновлення сторінки
  const {name, number} = this.state;
  let newId = 'id-' + nanoid(3); // генеруємо id
  this.state.contacts.push({id:newId, name: name, number: number});// зберігаємо данні
  this.setState( {name: '', number: ''}); // Чистемо input
}

// DELETE - видаляємо контакт 
onClickDelete = e => {
  e.preventDefault(); // Зупиняємо оновлення сторінки
  const id = e.currentTarget.id;
  console.log(id);
  const { contacts } = this.state;
  const filtred = contacts.filter(item => item.id !== id); // Новий масив, який містить всі контакти, окрім того, що має ідентифікатор
  this.setState({ contacts: filtred });
}


filter = () => {
  const { contacts, filter } = this.state;

  // новий масив, який містить всі контакти, що містять рядок пошуку
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );


  // повернення нового масиву, який містить тільки ті контакти, які відповідають рядку пошуку
  return filteredContacts;
}

// РЕНДНЕРІНГ сторінки
  render () {
      const { filter, name, number } = this.state;

      return (
      <div className={css.container}>
        <h1 className={css.section_title}>Phonebook</h1>
        <ContactForm  clickSubmit={this.clickSubmit} handleChange={this.handleChange} name={name} number ={number}/>

        <h2 className={css.section_title}>Contacts</h2>
        <Filter  filter={filter} handleChange={this.handleChange}/>
        <ContactsList onClickDelete={this.onClickDelete} filter={this.filter()}></ContactsList>
      </div>
  );}
};

export default App;
