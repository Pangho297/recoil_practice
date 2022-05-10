import type { NextPage } from "next";
import { useRecoilValue } from "recoil";

import { filterdTodoListState } from "../atom/todoListState";
import TodoItem from "../components/TodoItem";
import TodoItemCreator from "../components/TodoItemCreator";
import TodoListFilters from "../components/TodoListFilters";
import TodoListStats from "../components/TodoListStats";

const TodoList: NextPage = () => {
  const todoList = useRecoilValue(filterdTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default TodoList;
