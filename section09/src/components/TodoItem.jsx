import { useState } from 'react';
import './TodoItem.css';

function TodoItem({ id, isDone, content, date, onUpdate, onDelete }) {
  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  const onChlickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckBox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button type="button" onClick={onChlickDeleteButton}>
        삭제
      </button>
    </div>
  );
}

export default TodoItem;
