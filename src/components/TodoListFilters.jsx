import {useContext} from "react";
import {TodosContext} from "../context/TodosContext";

export default function TodoListFilters() {
  const {filter, setFilter} = useContext(TodosContext);

  const filterBy = (filterOption = 'all') => {
    setFilter(filterOption);
  }

  return (
    <div>
      <button onClick={() => filterBy('all')}
              className={`button filter-button ${filter === 'all' ? 'filter-button-active' : ''}`}
      >
        All
      </button>
      <button onClick={() => filterBy('active')}
              className={`button filter-button ${filter === 'active' ? 'filter-button-active' : ''}`}>
        Active
      </button>
      <button onClick={() => filterBy('completed')}
              className={`button filter-button ${filter === 'completed' ? 'filter-button-active' : ''}`}
      >
        Completed
      </button>
    </div>
  );
}