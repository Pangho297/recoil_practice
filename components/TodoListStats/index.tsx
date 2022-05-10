import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../../atom/todoListState";

function TodoListStats() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <ul>
      <li>Total Todo: {totalNum}</li>
      <li>Completed Todo: {totalCompletedNum}</li>
      <li>not Completed Todo: {totalUncompletedNum}</li>
      <li>Percent Completed: {formattedPercentCompleted}</li>
    </ul>
  );
}

export default TodoListStats;
