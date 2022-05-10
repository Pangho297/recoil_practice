import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";

import { todoListState } from "../../atom/todoListState";
import { todoListType } from "../../types/todoListType";

function replaceItemAtIndex(
  arr: todoListType[],
  index: number,
  newValue: todoListType
) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: todoListType[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

function TodoItem({ item }: { item: todoListType }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const handleItemText = (e: ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: e.target.value,
    });

    setTodoList(newList);
  };

  const handleItemCheck = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const handleDeleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={handleItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={handleItemCheck}
      />
      <button onClick={handleDeleteItem}>X</button>
    </div>
  );
}

export default TodoItem;
