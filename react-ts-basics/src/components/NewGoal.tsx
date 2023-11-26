import { FormEvent } from "react";

function NewGoal() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Course Goal</label>
        <input id="goal" type="text" />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summart" type="text" />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}

export default NewGoal;
