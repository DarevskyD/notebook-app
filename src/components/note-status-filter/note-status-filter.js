import React from 'react';
import {Button} from 'reactstrap';
import './note-status-filter.css';

const NoteStatusFilter = () => {
  return (
    <div className="btn-group group">
      <Button color="info">Все</Button>
      <Button outline color="secondary">Понравилось</Button>      
    </div>
  );
};

export default NoteStatusFilter;
