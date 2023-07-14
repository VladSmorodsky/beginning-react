import {useContext} from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import {TodosContext} from "../context/TodosContext";

export default function TodoForm() {
  const [todoInputName, setTodoInputName] = useLocalStorage('todoInputName', '');
  const [idForTodo, setIdForTodo] = useLocalStorage('idForTodo', 1);
  const {todos, setTodos} = useContext(TodosContext);

  const addTodo = (todoTitle) => {
    setTodos([...todos, {
      id: idForTodo,
      title: todoTitle,
      isComplete: false,
      isEditing: false
    }])

    setIdForTodo((prevState) => prevState + 1)
  }

  const handleInput = (event) => {
    setTodoInputName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (todoInputName.trim().length === 0) {
      return;
    }

    addTodo(todoInputName);

    setTodoInputName('');
  }

  return (
    <form action="#" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What do you need to do?"
        value={todoInputName}
        onChange={handleInput}
      />
    </form>
  );
}