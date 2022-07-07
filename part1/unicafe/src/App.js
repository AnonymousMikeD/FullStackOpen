import React, { useState } from 'react'









const StatisticLine = (props) => <tr><td>{props.text}</td><td>{props.value}</td></tr>

const Statistics = ({ good, neutral, bad }) => {


  const all = good + neutral + bad
  if (all > 0) {
    const average = ((bad * -1) + (neutral * 0) + good) / all
    return (
      <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <tr><td>all</td><td>{all}</td></tr>
          <tr><td>average</td><td>{average}</td></tr>
          <tr><td>positive</td><td>{(good / all) * 100}%</td></tr>
        </tbody>
      </table>
    )
  }
  else {
    return "No feedback given"
  }
}

const Header = (props) => <h2>{props.props}</h2>


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <>

      <Header props='Give Feedback' />

      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>


      <Header props='Statistics' />
      <Statistics good={good} bad={bad} neutral={neutral} />


    </>
  )
}

export default App
