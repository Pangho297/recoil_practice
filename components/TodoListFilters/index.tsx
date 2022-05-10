import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "../../atom/todoListState";

function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const handleSelector = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  console.log(filter);

  return (
    <>
      Filter:
      <select value={filter} onChange={handleSelector}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
}

export default TodoListFilters;
