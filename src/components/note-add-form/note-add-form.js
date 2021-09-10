import React from 'react';
import './note-add-form.css';

const NoteAddForm = ({onAdd}) => {
  return (
    <div className="bottom-panel d-flex">
      <input 
        type="text" 
        placeholder="Введите новую запись" 
        className="form-control new-post-label"/>
      <button 
        type="submit" 
        className="btn btn-outline-secondary"
        onClick={() => onAdd('Hello')}>
          Добавить
      </button>
    </div>
  );
};

export default NoteAddForm;