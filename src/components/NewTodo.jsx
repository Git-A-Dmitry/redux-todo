import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../store';

const NewTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(event.target.title.value));
    event.target.reset();
  };

  return (
    <div className='form'>
      <form action='' onSubmit={handleSubmit}>
        <input type='text' name='title' placeholder='new todo' />
        <input type='submit' value='Add' />
      </form>
    </div>
  );
};

export { NewTodo };
