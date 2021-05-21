import React from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import NoteStatusFilter from '../note-status-filter/note-status-filter';
import NoteList from '../note-list/note-list';
import NoteAddForm from '../note-add-form/note-add-form';

import './app.css';

const App = () => {
  return (
    <div className="app">
        <AppHeader/>
        <div className="search-panel d-flex">
          <SearchPanel/>
          <NoteStatusFilter/>
        </div> 
        <NoteList/>
        <NoteAddForm/>      
    </div>
  )
}
export default App;