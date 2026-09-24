import './TodoItem.css';

function TodoItem({id, isDone, content, date}) {
  return (
    <div className='TodoItem'>
      <input checked={isDone} type="checkbox" readOnly/>
      <div className='content'>{content}</div>
      <div className='date'>{new Date(date).toLocaleDateString()}</div>
      <button type="button">삭제</button>
    </div>
  );
}

export default TodoItem;
