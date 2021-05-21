import React from 'react';
import NoteListItem from '../note-list-item/note-list-item'

const NoteList = () => {
  return (
    <ul className="app-list list-group">
      <NoteListItem/>
      <NoteListItem/>
      <NoteListItem/>
    </ul>
  )
}

export default NoteList;