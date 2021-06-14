import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import NoteStatusFilter from '../note-status-filter/note-status-filter';
import NoteList from '../note-list/note-list';
import NoteAddForm from '../note-add-form/note-add-form';
import styled from 'styled-components';

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
    super(props);
    this.state = {
      data : [
        {label: 'Новая задача', important: true, id: 1},
        {label: 'Сходить к врачу', important: true, id: 2},
        {label: 'Сходить в магазин', important: false, id: 3},
        {label: 'Купить что-нибудь!', important: false, id: 4}
      ]
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);

    this.maxId = 5;
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
      id: this.maxId++
    };

    this.setState(({data}) => {
      const newArr = [...data, newItem];      
      return {
        data: newArr
      };
    });   
  }
  
  render() {
    return (
      <AppBlock>
          <AppHeader />
          <SearchBlock>
            <SearchPanel />
            <NoteStatusFilter />
          </SearchBlock> 
          <NoteList 
          notes={this.state.data}
          onDeleteItem = {this.deleteItem}/>
          <NoteAddForm 
          onAdd = {this.addItem}/>      
      </AppBlock>
    );
  }
}