import { memo } from 'react';
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

export default memo(TodoItem, (prevProps, nextProps) => {
  // True면 리렌더링 X, False면 리렌더링 O

  if (prevProps.id !== nextProps.id) return false;
  if (prevProps.isDone !== nextProps.isDone) return false;
  if (prevProps.content !== nextProps.content) return false;
  if (prevProps.date !== nextProps.date) return false;

  return true;
});
