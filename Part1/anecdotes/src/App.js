import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const max = anecdotes.length;
  const min = max - max;
  //zero-filled array of a desired length.
  const a = Array(max).fill(0);
  const [votes, setVotes] = useState(a);
  const [showMost, setShowMost] = useState(false);
  const maxVotes = Math.max(...votes);
  const index = votes.indexOf(maxVotes);

  const handleAnecdotes = () => {
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    setSelected(randomNum);
  };

  const handleVotes = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
    setShowMost(true);
  };

  return (
    <>
      <div>{anecdotes[selected]}</div>
      <div>
        <p>has: {votes[selected]} votes</p>
        <button onClick={handleVotes}>vote</button>
        <button onClick={handleAnecdotes}>next anecdote</button>
      </div>
      <h1>Anecdote with most votes</h1>

      {showMost && (
        <div>
          <p>{anecdotes[index]}</p>
          <p>has {maxVotes} votes</p>{" "}
        </div>
      )}
    </>
  );
};

export default App;
