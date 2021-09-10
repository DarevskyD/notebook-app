import React from 'react';
import {ListGroup} from 'reactstrap';
import NoteListItem from '../note-list-item/note-list-item';
import './note-list.css';

const NoteList = ({notes, onDeleteItem, onToggleImportant, onToggleLiked}) => {
  const elements = notes.map((item) => {
    const {id, ...noteProps} = item;
    return (
      <li key={id} className="list-group-item">
        <NoteListItem 
          {...noteProps}
          onDeleteItem = {() => onDeleteItem(id)}
          onToggleImportant = {() => onToggleImportant(id)}
          onToggleLiked = {() => onToggleLiked(id)}/>
      </li>
    );
  });

  return (
    <ListGroup className="app-list">
      {elements}
    </ListGroup>
  );
};

export default NoteList;