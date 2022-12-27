import { useSelector, useDispatch } from 'react-redux';
// import { addTodo, removeTodo, toggleTodo } from '../store/store';
import { addTodo, removeTodo, toggleTodo } from '../store/actions';

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
        {/* <button className='btn' type='submit' value='Add'>
          Add Todo
        </button> */}
        <input type='submit' value='Add' />
      </form>
    </div>
  );
};

export { NewTodo };
