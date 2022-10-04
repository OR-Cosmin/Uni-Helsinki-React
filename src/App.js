import { useState } from "react";

const Statistics = (props) => {
  return (
    <div>
      <h1>statistics</h1>
      {!props.show && <p>No feedback given</p>}
      {props.show && <div><StatisticsLine text="good" value={props.good} />
      <StatisticsLine text="neutral" value={props.neutral} />
      <StatisticsLine text="bad" value={props.bad} />
      <StatisticsLine text="all" value={props.all} />
      <StatisticsLine text="average" value={props.average} />
      <StatisticsLine text="positive" value={props.positive} /> </div>}
    </div>
  );
};
 
const StatisticsLine = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </tr>
      </tbody>
    </table>
  );
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [show, setShow] = useState(false);

  const handleGood = () => {
    setGood(good + 1);
    setShow(true);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setShow(true);
  };

  const handleBad = () => {
    setBad(bad + 1);
    setShow(true);
  };

  const all = good + neutral + bad;
  let average;
  let positive;
  if (all === 0) {
    average = 0;
    positive = 0;
  } else {
    average = (good - bad) / all;
    positive = good / all;
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => handleGood()} text="good" />
      <Button handleClick={() => handleNeutral()} text="neutral" />
      <Button handleClick={() => handleBad()} text="bad" />
      <Statistics
        show = {show}
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
