import React from 'react';
<<<<<<< HEAD
import './note-list-item.css';
=======
import './note-list-item.css'
>>>>>>> 1efa6f58a1ad4a5ab5988a7398fcd2134e506eb1

const NoteListItem = () => {
  return (
    <li className="app-list-item d-flex justify-content-between">
      <span className="app-list-item-lable">
        hello world!
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button 
        type="button" 
        className="btn-star btn-sm">
          <i className="fa fa-star"></i>
        </button>
        <button 
        type="button" 
        className="btn-trash btn-sm">
          <i className="fa fa-trash-o"></i>
        </button>
        <i className="fa fa-heart"></i>
      </div>
    </li>
  );
};

export default NoteListItem;