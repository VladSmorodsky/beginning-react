import TodoItemsRemaining from "./TodoItemsRemaining";
import TodoListFilters from "./TodoListFilters";
import {useState} from "react";

export default function TodoList(props) {
  const [filter, setFilter] = useState('all');

  const filterBy = (filterOption = 'all') => {
    setFilter(filterOption);
  }

  return (
    <>
      <ul className="todo-list">
        {props.todosFiltered(filter).map((todo) => (
          (
            <li className="todo-item-container" key={todo.id}>
              <div className="todo-item">
                <input
                  type="checkbox"
                  checked={todo.isComplete}
                  onChange={() => props.handleStatus(todo.id)}
                />
                {!todo.isEditing ? (
                  <span
                    className={`todo-item-label ${todo.isComplete ? 'line-through' : ''}`}
                    onDoubleClick={() => props.handleEdit(todo.id)}
                  >
                      {todo.title}
                    </span>
                ) : (
                  <input type="text"
                         className="todo-item-input"
                         onKeyDown={(event) => props.handleTodoUpdate(event, todo.id)}
                         defaultValue={todo.title}
                         onBlur={(event) => props.updateTodo(event, todo.id)}
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
                  onClick={() => props.deleteTodo(todo.id)}
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
          <div className="button" onClick={props.completeAllTodos}>Check All</div>
        </div>

        <TodoItemsRemaining remainingItems={props.remainingItems}/>
      </div>

      <div className="other-buttons-container">
        <TodoListFilters
          filterBy={filterBy}
          currentFilter={filter}
        />
        <div>
          <button className="button" onClick={props.clearCompletedTodos}>Clear completed</button>
        </div>
      </div>
    </>
  );
}
