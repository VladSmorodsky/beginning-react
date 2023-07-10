import {useState} from "react";

export default function TodoForm(props) {
  const [todoInputName, setTodoInputName] = useState('');

  const handleInput = (event) => {
    setTodoInputName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (todoInputName.trim().length === 0) {
      return;
    }

    props.addTodo(todoInputName);

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