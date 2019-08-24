import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => 
  <button onClick={onClick}>{text}</button>;

const Feedbacks = (props) => {
  const { good, setGood, neutral, setNeutral, bad, setBad } = props;
  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={() => setGood(good + 1)} text="good"/>
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button onClick={() => setBad(bad + 1)} text="bad"/>
    </div>
  )
}

const Statistic = ({val, text}) => {
  return (
    <tr>
      <td>{text}:</td>
      <td>{val}</td>
    </tr>
    )
}

const Statistics = ({good, neutral, bad, all, average, positive, isShow}) => {
  let statistics = null;
  if ( isShow ) {
    statistics = (
      <table>
        <tbody>
          <Statistic val={good} text='good' />
          <Statistic val={neutral} text='neutral' />
          <Statistic val={bad} text='bad' />
          <Statistic val={all} text='all' />
          <Statistic val={average} text='average' />
          <Statistic val={positive} text='positive' />
        </tbody>
      </table>
    ) 
  } else {
    statistics = <div>No feedback given</div>;
  }

  return (
    <div>
      <h2>statistics</h2>
      {statistics}
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good  + neutral + bad;
  const average = (good - bad) / all || 0;
  const positive = good * 100 / all || 0;
  const isShowStatistics = good || neutral || bad;

  return (
    <div>
      <Feedbacks 
        setGood={setGood} setNeutral={setNeutral} setBad={setBad} 
        good={good} neutral={neutral} bad={bad}/>
      <Statistics 
        good={good} neutral={neutral} bad={bad} 
        all={all} average={average} positive={positive}
        isShow={isShowStatistics}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)