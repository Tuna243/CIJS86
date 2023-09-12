import logo from './logo.svg';
import TodoHeader from './Components/TodoHeader';
import TodoContainer from './Components/TodoContainer';
import TodoFooter from './Components/TodoFooter';
import './App.css';
function App() {
  return (
    <div className="App">
     <TodoHeader></TodoHeader>
     <TodoContainer/>
     {/* <TodoFooter></TodoFooter> */}
    </div>
  );
}

export default App;
