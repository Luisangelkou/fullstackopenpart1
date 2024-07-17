//Emmanuel Torres 2021-1097

import { useState } from 'react'

const Anecdote = (props) => {
  const { anecdotes, selected } = props

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
    </>
  )
}

const Button = (props) => {
  const { handle, text } = props

  return (
    <>
      <button onClick={handle}>
        {text}
      </button>
    </>
  )
}

const MaxAnecdote = (props) => {
  const { index, vote, anecdotes } = props

  let sum = 0
  vote.forEach(element => {
    sum+=element
  });

  if(sum == 0){
    return(
      <>
        <h1>Anecdote with most votes</h1>
        <p>No votes yet</p>
      </>
    )
  }

  return(
    <>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[index]}</p>
    </>
  )

}
// ETM
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVotes] = useState(Array(anecdotes.length).fill(0))
  const index = vote.indexOf(Math.max(...vote))

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
  }

  const handleNextAnecdote = () => {
    setSelected(getRandomInt(anecdotes.length))
  }

  const handleNewVote = () => {
    const copy_vote = [...vote]
    copy_vote[selected]++
    setVotes(copy_vote)
  }

  return (
    <div>
      <Anecdote anecdotes={anecdotes} selected={selected}/>
      <Button handle={handleNewVote} text="Vote" />
      <Button handle={handleNextAnecdote} text="next anecdote"/>
      <MaxAnecdote index={index} vote={vote} anecdotes={anecdotes} />
    </div>
  )
}

export default App

//ETM