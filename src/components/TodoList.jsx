import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../store';

const TodoList = () => {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className='todo-list'>
      <ul>
        {todos.map((todo) => (
          <li key={todo.title}>
            <input //
              type='checkbox'
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />{' '}
            {todo.title} <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { TodoList };
