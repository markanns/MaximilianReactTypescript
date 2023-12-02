import { type ReactNode } from "react";
import CourseGoal from "./CourseGoal";
import { Goal as CGoal } from "../App";
import InfoBox from "./InfoBox";
/*eslint-disable */

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        <p>No goals found. Maybe add one?</p>
      </InfoBox>
    );
  }
  let warningBox: ReactNode;
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You are collect many goals
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
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
    </>
  );
}
