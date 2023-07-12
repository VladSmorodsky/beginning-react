export default function TodoListFilters(props) {
  return (
    <div>
      <button onClick={() => props.filterBy('all')}
              className={`button filter-button ${props.currentFilter === 'all' ? 'filter-button-active' : ''}`}
      >
        All
      </button>
      <button onClick={() => props.filterBy('active')}
              className={`button filter-button ${props.currentFilter === 'active' ? 'filter-button-active' : ''}`}>
        Active
      </button>
      <button onClick={() => props.filterBy('completed')}
              className={`button filter-button ${props.currentFilter === 'completed' ? 'filter-button-active' : ''}`}
      >
        Completed
      </button>
    </div>
  );
}