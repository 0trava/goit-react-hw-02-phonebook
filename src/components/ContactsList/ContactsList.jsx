// import PropTypes from 'prop-types';
import css from "./ContactsList.module.css"; // підключення стилів на картку



function ContactsList(contacts) {
       console.log(contacts.contacts[1])
    return (
            <ul className={css.contacts__list}>
                {contacts.contacts.map(({id, name, number}) => (
                <li>
                   <p>{name}</p>
                   <p>{number}</p> 
                   <button id = {id} className={css.contacts__btn} type="button">Delete</button>
                </li>
                ))}
            </ul>
 
    );
  }
  
//   Form.prototype = {
//     message: PropTypes.string.isRequired,
//   };
  
  export default ContactsList;

