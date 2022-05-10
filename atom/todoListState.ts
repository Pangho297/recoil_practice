import { atom, selector } from "recoil";
import { todoListType } from "../types/todoListType";

export const todoListState = atom<todoListType[]>({
  // key는 고유한 값, 중복되어서는 안됨
  key: "todoListState",
  default: [],
});

export const todoListFilterState = atom<string>({
  key: "todoListFilterState",
  default: "Show All",
});

// selector는 atom 또는 selector를 받아 쓰는 순수함수
// selector는 훅을 사용해서 읽는다
// 그러나 훅은 쓰기 가능 상태에서만 작동하는 점을 유의해야 한다(useRecoilState() 에서만 작동함)
export const filterdTodoListState = selector({
  key: "filterdTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);
    // filter와 list 둘 중 하나라도 변하면 filterdTodoListState는 재실행 된다. (재랜더링 된다)

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
