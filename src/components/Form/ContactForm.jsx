// import PropTypes from 'prop-types';
import css from "./ContactForm.module.css"; // підключення стилів на картку

function ContactForm() {
    return (
        <form className={css.form}>
        <label htmlFor="name">Name</label>
        <input
          className={css.form__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number">Number</label>
        <input
          className={css.form__input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button className={css.form__btn} type="submite">Add contact</button>
        </form>
    );
  }
  
//   ContactForm.prototype = {
//     message: PropTypes.string.isRequired,
//   };
  
  export default ContactForm;
