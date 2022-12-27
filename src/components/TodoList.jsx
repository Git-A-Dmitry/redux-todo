import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../store/actions';
// import { addTodo, removeTodo, toggleTodo } from '../store/actions';

const TodoList = () => {
  const todos = useSelector((state) => state.todo);
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
