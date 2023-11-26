import CourseGoal from "./CourseGoal";
import { Goal as CGoal } from "../App";
/*eslint-disable */

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li>
          <CourseGoal
            id={goal.id}
            key={goal.id}
            title={goal.title}
            onDelete={onDeleteGoal}
          >
            {goal.text}
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
