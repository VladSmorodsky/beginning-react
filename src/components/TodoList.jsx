import TodoItemsRemaining from "./TodoItemsRemaining";
import TodoListFilters from "./TodoListFilters";
import {useContext} from "react";
import {TodosContext} from "../context/TodosContext";

export default function TodoList() {
  const {todos, setTodos, todosFiltered} = useContext(TodosContext);

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

  return (
    <>
      <ul className="todo-list">
        {todosFiltered().map((todo) => (
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
          <div className="button" onClick={completeAllTodos}>Check All</div>
        </div>

        <TodoItemsRemaining />
      </div>

      <div className="other-buttons-container">
        <TodoListFilters />
        <div>
          <button className="button" onClick={clearCompletedTodos}>Clear completed</button>
        </div>
      </div>
    </>
  );
}
