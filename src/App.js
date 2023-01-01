import { NewTodo } from './components/NewTodo';
import { TodoList } from './components/TodoList';
import { Filters } from './components/Filters';
import { TodoDate } from './components/TodoDate';
import logo from './logo.svg';
import './scss/App.scss';
import './scss/Input.scss';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      {/* <h2>JUST DO IT</h2> */}
      <TodoDate />

      <div className='components'>
        <NewTodo />
        <div className='vert-line'></div>
        <div className='filter'>
          <Filters />
        </div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
