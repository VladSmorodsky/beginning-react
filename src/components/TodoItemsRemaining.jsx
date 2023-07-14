import {useMemo} from "react";
import {useContext} from "react";
import {TodosContext} from "../context/TodosContext";

export default function TodoItemsRemaining() {
  const {todos} = useContext(TodosContext);

  const remainingItemsCount = () => {
    console.log('calculating remaining todos. This is slow.');
    // for (let index = 0; index < 2000000000; index++) {}
    return todos.filter(todo => !todo.isComplete).length;
  }

  const remainingItems = useMemo(remainingItemsCount, [todos]);

  return (
    <span>{remainingItems} items remaining</span>
  );
}