import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import NoteStatusFilter from '../note-status-filter/note-status-filter';
import NoteList from '../note-list/note-list';
import NoteAddForm from '../note-add-form/note-add-form';
import styled from 'styled-components';
import nextId, {setPrefix} from 'react-id-generator';

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

const SearchBlock = styled.div`
  display: flex;
  margin: 1rem 0;
  .search-input {
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
  }
`;

export default class App extends Component {  
  constructor (props) {
    setPrefix('note-id-');
    super(props);
    this.state = {      
      data: [
        {label: 'Новая задача', important: true, like: false, id: nextId()},
        {label: 'Сходить к врачу', important: false, like: false, id: nextId()},
        {label: 'Сходить в магазин', important: false, like: false, id: nextId()},
        {label: 'Купить что-нибудь!', important: false, like: false, id: nextId()}
      ],
      term: ''
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
  }

  deleteItem(id) {
    this.setState(({data}) => {
      const result = data.filter(elem => elem.id !== id);
      return {
        data: result
      };
    });
  }

  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      id: nextId()
    };

    this.setState(({data}) => {
      const newArr = [...data, newItem];      
      return {
        data: newArr
      };
    });   
  }

  onToggleImportant(id) {
    this.setState(({data}) => {
      return{
        data: data.map((item) => {
          if(item.id === id) {
            item.important = !item.important;
          }
          return item;
        })
      };
    });
  }

  onToggleLiked(id) {
    this.setState(({data}) => {
      return{
        data: data.map((item) => {
          if(item.id === id) {
            item.like = !item.like;
          }
          return item;
        })
      };
    });
  }

  searchNote(items, term) {
    if(term.length === 0) {
      return items;      
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term) > -1;
    });
  }

  onUpdateSearch(term) {
    this.setState({
      term: term
    });
  }
  
  render() {
    const {data, term} = this.state;
    const liked = data.filter((item) => item.like).length;
    const allNotes = data.length;
    const visibleNotes = this.searchNote(data, term);

    return (      
      <AppBlock>
          <AppHeader 
          liked={liked}
          allNotes={allNotes}/>
          <SearchBlock>
            <SearchPanel 
            onUpdateSearch = {this.onUpdateSearch}/>
            <NoteStatusFilter />
          </SearchBlock> 
          <NoteList 
          notes={visibleNotes}
          onDeleteItem = {this.deleteItem}
          onToggleImportant = {this.onToggleImportant}
          onToggleLiked = {this.onToggleLiked}/>
          <NoteAddForm 
          onAdd = {this.addItem}/>      
      </AppBlock>
    );
  }
}