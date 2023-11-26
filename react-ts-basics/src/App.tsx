import { useState } from "react";
import Header from "./components/Header";
import goalImg from "./assets/goals.jpg";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type Goal = {
  id: number;
  text: string;
  title: string;
};

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: Goal = {
        id: Math.random(),
        text: "some text",
        title: "some title",
      };
      return [...prevGoals, newGoal];
    });
  }

  function handelDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }
  return (
    <main>
      <Header image={{ src: goalImg, alt: "a goal image" }}>
        <h1>Your Goals</h1>
      </Header>
      <NewGoal />
      <CourseGoalList goals={goals} onDeleteGoal={handelDeleteGoal} />
    </main>
  );
}
