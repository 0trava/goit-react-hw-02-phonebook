// import PropTypes from 'prop-types';
import css from "./ContactsList.module.css"; // підключення стилів на картку



function ContactsList() {
    return (
            <ul className={css.contacts__list}>
                <li>
                   <p>Eden Line</p>
                   <p>111-111-111</p> 
                   <button className={css.contacts__btn} type="button">Delete</button>
                </li>
            </ul>
 
    );
  }
  
//   Form.prototype = {
//     message: PropTypes.string.isRequired,
//   };
  
  export default ContactsList;

