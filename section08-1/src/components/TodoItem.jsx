import './TodoItem.css'

function TodoItem() {
  return (
    <div className='TodoItem'>
      <input type="checkbox" />
      <div className='content'>Todo</div>
      <di className='date'>Date</di>
      <button type="button">삭제</button>
    </div>
  );
}

export default TodoItem;
