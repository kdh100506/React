import { useState } from 'react';
import './List.css';
import TodoItem from './TodoItem';

function List({ todos }) {
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getfilteredData = () => {
    if (search === '') {
      return todos;
    }
    return todos.filter((todo) => {
      todo.content.toLowerCase().includes(search.toLowerCase());
    });
  };

  const filteredTodos = getfilteredData();

  return (
    <div className="List">
      <h4>Todo List</h4>
      <input value={search} onChange={onChangeSearch} type="search" placeholder="검색어를 입력하세요." />
      <div className="Todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo}></TodoItem>;
        })}
      </div>
    </div>
  );
}

export default List;
