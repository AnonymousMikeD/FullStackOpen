

import { useState } from 'react'

const getRandom = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, addVote] = useState(Array(anecdotes.length).fill(0))
  const voteStorage = [...votes]
  voteStorage[selected] += 1


  const voteMax = Math.max(...votes)
  const winner = anecdotes[votes.indexOf(voteMax)]

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      has {voteStorage[selected] - 1} votes
      <br />
      <button onClick={() => addVote(voteStorage)}>vote</button>
      <button onClick={() => setSelected(selected => getRandom(0, 7))}>next anecdote</button>
      <br />
      <h1>Anecdote with most votes</h1>
      <br />
      {winner}
      <br />
      has {voteMax} votes

    </div>
  )
}

export default App