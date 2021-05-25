import React from 'react';
<<<<<<< HEAD
import './note-add-form.css';
=======
import './note-add-form.css'
>>>>>>> 1efa6f58a1ad4a5ab5988a7398fcd2134e506eb1

const NoteAddForm = () => {
  return (
    <form className="bottom-panel d-flex">
      <input 
        type="text" 
        placeholder="Введите новую запись" 
        className="form-control new-post-label"/>
      <button 
        type="submit" 
        className="btn-outline-secondary">
          Добавить
      </button>
    </form>
  );
};

export default NoteAddForm;