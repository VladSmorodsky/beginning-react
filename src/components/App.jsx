import '../reset.css';
import '../App.css';
import {useState} from "react";

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

  const [todoInputName, setTodoInputName] = useState('');
  const [idForTodo, setIdForTodo] = useState(4)

  const addTodo = (event) => {
    event.preventDefault();

    if (todoInputName.trim().length === 0) {
      return;
    }

    setTodos([...todos, {
      id: idForTodo,
      title: todoInputName,
      isComplete: false,
      isEditing: false
    }])

    setTodoInputName('');
    setIdForTodo((prevState) => prevState + 1)
  }

  const handleInput = (event) => {
    setTodoInputName(event.target.value);
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

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <form action="#" onSubmit={addTodo}>
          <input
            type="text"
            className="todo-input"
            placeholder="What do you need to do?"
            value={todoInputName}
            onChange={handleInput}
          />
        </form>

        <ul className="todo-list">
          {todos.map((todo) => (
            (
              <li className="todo-item-container" key={todo.id}>
                <div className="todo-item">
                  <input
                    type="checkbox"
                    checked={todo.isComplete}
                    onChange={() => handleStatus(todo.id)}
                  />
                  {!todo.isEditing ? (
                    <span
                      className={`todo-item-label ${todo.isComplete ? 'line-through' : ''}`}
                      onDoubleClick={() => handleEdit(todo.id)}
                    >
                      {todo.title}
                    </span>
                  ) : (
                    <input type="text"
                           className="todo-item-input"
                           onKeyDown={(event) => handleTodoUpdate(event, todo.id)}
                           defaultValue={todo.title}
                           onBlur={(event) => updateTodo(event, todo.id)}
                           autoFocus
                    />
                  )}
                </div>
                <button className="x-button">
                  <svg
                    className="x-button-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </li>
            )
          ))}
        </ul>

        <div className="check-all-container">
          <div>
            <div className="button">Check All</div>
          </div>

          <span>3 items remaining</span>
        </div>

        <div className="other-buttons-container">
          <div>
            <button className="button filter-button filter-button-active">
              All
            </button>
            <button className="button filter-button">Active</button>
            <button className="button filter-button">Completed</button>
          </div>
          <div>
            <button className="button">Clear completed</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;