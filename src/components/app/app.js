import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import NoteStatusFilter from '../note-status-filter/note-status-filter';
import NoteList from '../note-list/note-list';
import NoteAddForm from '../note-add-form/note-add-form';
import styled from 'styled-components';
import nextId, {setPrefix} from 'react-id-generator';

const AppBlock = styled.div`  
  min-width: 800px;
  padding: 10px;
  background-color:#cdecff;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

const SearchBlock = styled.div`
  display: flex;
  margin: 1rem 0;
  .search-input {
    width: auto;
    flex-grow: 1;    
  }
`;

export default class App extends Component {  
  constructor (props) {
    setPrefix('note-id-');
    super(props);
    this.state = {      
      data: [
        {label: 'Add new notes', important: false, like: true, id: nextId()},
        {label: 'Сlick on the button all or liked', important: false, like: false, id: nextId()},
        {label: 'Use search', important: true, like: false, id: nextId()},
        {label: 'Сlick on a note to make her liked', important: false, like: true, id: nextId()}
      ],
      term: '',
      filter: 'all'
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);
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

  filterNote(items, filter) {
    if(filter === 'like') {
      return items.filter(item => item.like);
    } else {
      return items;
    }
  }

  onUpdateSearch(term) {
    this.setState({
      term: term
    });
  }

  onFilterSelect(filter) {
    this.setState({
      filter: filter
    });
  }
  
  render() {
    const {data, term, filter} = this.state;
    const liked = data.filter((item) => item.like).length;
    const allNotes = data.length;
    const visibleNotes = this.filterNote(this.searchNote(data, term), filter);

    return (      
      <AppBlock>
          <AppHeader 
          liked={liked}
          allNotes={allNotes}/>
          <SearchBlock>
            <SearchPanel 
            onUpdateSearch = {this.onUpdateSearch}/>
            <NoteStatusFilter 
            filter = {filter}
            onFilterSelect = {this.onFilterSelect}/>
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