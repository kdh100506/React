import { useState } from 'react';
import './TodoItem.css';

function TodoItem({ id, isDone, content, date, onUpdate }) {
  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckBox} />
      <div className="content">{content}</div>
      <di className="date">{new Date(date).toLocaleDateString()}</di>
      <button type="button">삭제</button>
    </div>
  );
}

export default TodoItem;
