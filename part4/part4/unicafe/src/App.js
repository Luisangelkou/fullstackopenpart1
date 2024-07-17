//Emmanuel Torres Malena 2021-1097

import { useState } from 'react'

const Button = (props) => {
  const { handleButton, text } = props
  return (
    <>
      <button onClick={handleButton}>
        {text}
      </button>
    </>
  )
}

const StatisticLine = (props) => {
  const { text, value } = props

  if (text == "positive"){
    return (
      <>
        <tr>
        <td>{text}</td>
        <td>{value}%</td>
        </tr>
      </>
    )
  }
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
}

const Statistics = (props) => {

  const { good, neutral, bad} = props
  const all = good + neutral + bad
  const average = (good - bad)/all
  const positive = (good/all)*100

  if (all == 0){
    return(
      <>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value ={good} />
          <StatisticLine text="neutral" value ={neutral} />
          <StatisticLine text="bad" value ={bad} />
          <StatisticLine text="all" value ={all} />
          <StatisticLine text="average" value ={average} />
          <StatisticLine text="positive" value ={positive} />
        </tbody>
      </table>
    </>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodButton = () => {
      const updateGood = good + 1
      setGood(updateGood)
  }

  const handleNeutralButton = () => {
    const updateNeutral = neutral + 1
    setNeutral(updateNeutral)
  }

  const handleBadButton = () => {
    const updateBad = bad + 1
    setBad(updateBad)
  }


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button  handleButton={handleGoodButton} text="good"/>
      <Button  handleButton={handleNeutralButton} text="neutral"/>
      <Button  handleButton={handleBadButton} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App

//ETM
