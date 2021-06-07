import React from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import NoteStatusFilter from '../note-status-filter/note-status-filter';
import NoteList from '../note-list/note-list';
import NoteAddForm from '../note-add-form/note-add-form';

import './app.css';

const App = () => {
  
  const data = [
    {label: 'Новая задача', important: true, id: 'd'},
    {label: 'Сходить к врачу', important: true, id: 'a'},
    {label: 'Сходить в магазин', important: false, id: 'b'},
    {label: 'Купить что-нибудь!', important: false, id: 'c'}
  ];

  return (
    <div className="app">
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <NoteStatusFilter />
        </div> 
        <NoteList notes={data}/>
        <NoteAddForm />      
    </div>
  );
};
export default App;