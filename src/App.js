import { NewTodo } from './components/NewTodo';
import { TodoList } from './components/TodoList';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <h1>Awesome Todo App</h1>
      <div className='components'>
        <NewTodo />
        <div className='vert-line'></div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
