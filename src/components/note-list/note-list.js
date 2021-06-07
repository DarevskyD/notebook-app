import React from 'react';
import NoteListItem from '../note-list-item/note-list-item';
import './note-list.css';

const NoteList = ({notes}) => {
  const elements = notes.map((item) => {
    const {id, ...noteProps} = item;
    return (
      <li key={id} className="list-group-item">
        <NoteListItem {...noteProps}/>
      </li>
    );
  });

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
};

export default NoteList;