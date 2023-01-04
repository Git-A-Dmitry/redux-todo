import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../store/actions';
import { selectVisibleTodos } from '../store/selector';
import { selectActiveFilter } from '../store/filters/filter-selector';

import '../scss/List.scss';

const TodoList = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter);
  const todos = useSelector((state) => selectVisibleTodos(state, activeFilter));
  // const todos = useSelector((state) => state.todo);

  return (
    <div className='todo-list'>
      <ul>
        {todos.map((todo) => (
          <li key={todo.title}>
            <div className='checkbox-container'>
              <input //
                type='checkbox'
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
              />{' '}
            </div>
            {todo.title}
            <button className='del-btn' onClick={() => dispatch(removeTodo(todo.id))}>
              DEL
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { TodoList };
