import logo from './logo.svg';
import './App.css';
import TaskList from './components/tasks/TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tasks</h1>
        <hr/>
        <TaskList/>
      </header>
    </div>
  );
}

export default App;
