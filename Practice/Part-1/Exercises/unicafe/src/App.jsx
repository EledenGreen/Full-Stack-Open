import { useState } from "react";

const Button = (props) => (
  <button onClick= {props.handleClick}>
    {props.text}
  </button>
)
const Total = (props) => {
  return (
    <div>
      <div>All: {props.total}</div>
    </div>
  )
}
 
const Stats = (props) => {
  return (
    <div>
      <div>Good = {props.good}</div>
      <div>Neutral = {props.neutral}</div>
      <div>Bad = {props.bad}</div>
    </div>

  )
}

const Avg = (props) => {

  let w_good = props.good*1
  let w_bad = props.bad*-1
  let w_neutral = props.neutral*0
  let numerator = w_good + w_bad + w_neutral

  return (
    <div>
      Average: {numerator/props.total}
    </div>
  )
}

const App = () => {
  const [good, setGood]  = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setTotal(good + bad +neutral)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setTotal(good+bad+neutral)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setTotal(good + bad + neutral)
  }

  return (
    <div>
      <div><strong>Give feedback</strong></div>
      <br></br>
      <Button handleClick = {handleGoodClick} text='Good' />
      <Button handleClick = {handleNeutralClick} text="Neutral" />
      <Button handleClick = {handleBadClick} text='Bad' />
      <div></div>
      <br></br>
      <div><strong>Statistics</strong></div>
      <br></br>
      <Stats good={good} neutral={neutral} bad={bad} />
      <Total total={good+bad+neutral} />
      <Avg good={good} neutral={neutral} bad={bad} />
    </div>
  )
}


export default App