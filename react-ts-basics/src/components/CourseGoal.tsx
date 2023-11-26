import { type ReactNode } from "react";

type CourseGoapProps = {
  id: number;
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
};

export default function CourseGoal({
  title,
  id,
  children,
  onDelete,
}: CourseGoapProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}
