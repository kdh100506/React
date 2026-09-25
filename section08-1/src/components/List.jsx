import { useState } from 'react';
import './List.css';
import TodoItem from './TodoItem';

function List({ todos }) {
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === '') {
      return todos;
    }
    return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
  };

  const FilteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List</h4>
      <input type="text" placeholder="검색어를 입력하세요." value={search} onChange={onChangeSearch} />
      <div className="todos-wrapper">
        {FilteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo}></TodoItem>;
        })}
      </div>
    </div>
  );
}

export default List;
