import { useState } from 'react';
import './TodoItem.css';

function TodoItem({ id, isDone, content, date }) {
  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} readOnly/>
      <div className="content">{content}</div>
      <di className="date">{new Date(date).toLocaleDateString()}</di>
      <button type="button">삭제</button>
    </div>
  );
}

export default TodoItem;
