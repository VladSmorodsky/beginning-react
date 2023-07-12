import '../reset.css';
import '../App.css';
import {useEffect, useMemo, useRef, useState} from "react";
import NoTodos from "./NoTodos";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import HooksExample from "./HooksExample";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish React series',
      isComplete: false,
      isEditing: false
    },
    {
      id: 2,
      title: 'Go to Grocery',
      isComplete: false,
      isEditing: false
    },
    {
      id: 3,
      title: 'Do other thing',
      isComplete: false,
      isEditing: false
    },
  ]);

  const [idForTodo, setIdForTodo] = useState(4)

  const addTodo = (todoTitle) => {
    setTodos([...todos, {
      id: idForTodo,
      title: todoTitle,
      isComplete: false,
      isEditing: false
    }])

    setIdForTodo((prevState) => prevState + 1)
  }

  const updateTodo = (event, id) => {
    if (event.target.value.trim().length === 0) {
      cancelEdit(id);
      return;
    }

    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.title = event.target.value;
        todo.isEditing = false;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  const cancelEdit = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isEditing = false;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  const deleteTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleStatus = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  const handleEdit = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isEditing = true;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  const handleTodoUpdate = (event, id) => {
    if (event.key === 'Enter') {
      updateTodo(event, id);
    }

    if (event.key === 'Escape') {
      cancelEdit(id);
    }
  }

  const remainingItemsCount = () => {
    console.log('calculating remaining todos. This is slow.');
    for (let index = 0; index < 2000000000; index++) {}
    return todos.filter(todo => !todo.isComplete).length;
  }

  const remainingItems = useMemo(remainingItemsCount, [todos]);

  const clearCompletedTodos = () => {
    setTodos([...todos].filter(todo => !todo.isComplete));
  }

  const completeAllTodos = () => {
    const updatedTodos = todos.map(todo => {
      todo.isComplete = true;

      return todo;
    });
    setTodos(updatedTodos);
  }

  const todosFiltered = (filter) => {
    switch (filter) {
      case 'all':
        return todos;
      case 'completed':
        return todos.filter(todo => todo.isComplete);
      case 'active':
        return todos.filter(todo => !todo.isComplete);
    }
  }

  /** Hooks example
  const [name, setName] = useState('');
  useEffect(() => {
    console.log(nameInputEl);
    nameInputEl.current.value = 'test useEffect and useRef hooks';
    nameInputEl.current.focus();
  }, []);

  const nameInputEl = useRef(null);
  **/

  return (
    <div className="todo-app-container">
      {/*<HooksExample />*/}
      <div className="todo-app">
        <div className="name-container">
          {/*TODO example for hooks*/}
          {/*<h2>What is your name?</h2>*/}
          {/*<form action="#">*/}
          {/*  <input*/}
          {/*    type="text"*/}
          {/*    ref={nameInputEl}*/}
          {/*    className="todo-input"*/}
          {/*    placeholder="What is your name"*/}
          {/*    value={name}*/}
          {/*    onChange={event => setName(event.target.value)}*/}
          {/*  />*/}
          {/*</form>*/}
          {/*{name && <p className="name-label">Hello, {name}</p>}*/}
        </div>
        <h2>Todo App</h2>
        <TodoForm addTodo={addTodo}/>

        { todos.length > 0 ? (
          <TodoList todos={todos}
                    handleTodoUpdate={handleTodoUpdate}
                    handleEdit={handleEdit}
                    handleStatus={handleStatus}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                    remainingItems={remainingItems}
                    clearCompletedTodos={clearCompletedTodos}
                    completeAllTodos={completeAllTodos}
                    todosFiltered={todosFiltered}
          />
        ) :
          <NoTodos />
        }
      </div>
    </div>
  );
}

export default App;