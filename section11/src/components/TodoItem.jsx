import { memo, useContext } from 'react';
import './TodoItem.css';
import { todoDispatchContext } from '../App';

function TodoItem({ id, isDone, content, date }) {
  const { onUpdate, onDelete } = useContext(todoDispatchContext);

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

export default memo(TodoItem);
