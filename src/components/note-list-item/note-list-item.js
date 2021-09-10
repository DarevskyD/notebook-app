import React, {Component} from 'react';
import './note-list-item.css';


export default class NoteListItem extends Component {

  render() {
    const {label, onDeleteItem, onToggleImportant, onToggleLiked, important, like} = this.props;    
    let classNames = 'app-list-item d-flex justify-content-between';
    if(important) {
      classNames += ' important';
    }
    if(like) {
      classNames += ' like';
    }

    return (
      <div className={classNames}>
        <span className="app-list-item-lable"
              onClick={onToggleLiked}
              style={{cursor: 'pointer'}}>
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button 
          type="button" 
          className="btn-star btn-sm"
          onClick={onToggleImportant}>
            <i className="fa fa-star"></i>
          </button>
          <button 
          type="button" 
          className="btn-trash btn-sm"
          onClick={onDeleteItem}>
            <i className="fa fa-trash-o"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </div>
    );
  }
}