import React, {Component} from 'react';
import './note-status-filter.css';

export default class NoteStatusFilter extends Component {
  constructor(props) {
    super(props);
    this.battons = [
      {name: 'all', label: 'All'},
      {name: 'like', label: 'Liked'}
    ];
  }
  render() {    
    const buttons = this.battons.map(({name, label}) => {
      const {filter, onFilterSelect} = this.props;
      const active = filter === name;
      const clazz = active ? 'btn-info' : 'btn-outline-secondary';
      return <button 
                key={name} 
                type="button" 
                className={`btn ${clazz}`}
                onClick={() => onFilterSelect(name)}>{label}</button>;
    });

    return (
      <div className="btn-group group">
        {buttons}     
      </div>
    );  
  }  
}
