import { useState, useMemo, useContext } from 'react';
import './List.css';
import TodoItem from './TodoItem';
import { todoContext } from '../App';

function List() {
  const { todos } = useContext(todoContext);

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

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log('getAnalyzedData 호출');
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  return (
    <div className="List">
      <h4>Todo List</h4>
      <div>
        <div>total : {totalCount}</div>
        <div>done : {doneCount}</div>
        <div>notDone : {notDoneCount}</div>
      </div>
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
