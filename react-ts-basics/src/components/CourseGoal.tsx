import { type ReactNode } from "react";

type CourseGoapProps = {
  title: string;
  children: ReactNode;
};

export default function CourseGoal({ title, children }: CourseGoapProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button>Delete</button>
    </article>
  );
}
