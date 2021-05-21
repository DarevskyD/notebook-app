import React from 'react';
import './note-add-form.css';

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