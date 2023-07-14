import '../reset.css';
import '../App.css';
import {useState} from "react";
import NoTodos from "./NoTodos";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import useLocalStorage from "../hooks/useLocalStorage";
import {TodosContext} from "../context/TodosContext";

function App() {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [filter, setFilter] = useState('all');

  const todosFiltered = () => {
    switch (filter) {
      case 'all':
        return todos;
      case 'completed':
        return todos.filter(todo => todo.isComplete);
      case 'active':
        return todos.filter(todo => !todo.isComplete);
    }
  }

  return (
    <TodosContext.Provider value={{todos, setTodos, todosFiltered, filter, setFilter}}>
      <div className="todo-app-container">
        <div className="todo-app">
          <h2>Todo App</h2>
          <TodoForm/>

          {todos.length > 0 ? (
              <TodoList/>
            ) :
            <NoTodos/>
          }
        </div>
      </div>
    </TodosContext.Provider>
  );
}

export default App;