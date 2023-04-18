// import PropTypes from 'prop-types';
import css from "./Filter.module.css"; // підключення стилів на картку

function Filter() {
    return (
      <div className={css.form__filter}>
          <label htmlFor="Find">Find contacts by name</label>
          <input
          className={css.filter__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          />
      </div>

    );
  }
  
//   Form.prototype = {
//     message: PropTypes.string.isRequired,
//   };
  
  export default Filter;