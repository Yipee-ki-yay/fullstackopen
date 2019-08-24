import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [anecdotesRatingArr, setAnecdotesRatingArr] = useState(anecdotes.map(() => 0))
  console.log(anecdotesRatingArr);

  const numberOfMostPopularAnecdote = anecdotesRatingArr.indexOf(Math.max(...anecdotesRatingArr));

  const setRandomAnecdoteNum = () => Math.floor( Math.random() * anecdotes.length);

  const showRandomAnecdote = () => {
    let randomAnecdoteNum = setRandomAnecdoteNum();

    while (randomAnecdoteNum === selected) {
      randomAnecdoteNum = setRandomAnecdoteNum();
    }

    setSelected(randomAnecdoteNum);
  }

  const voteAnecdote = () => {
    const copy = [...anecdotesRatingArr];
    copy[selected] += 1;
    setAnecdotesRatingArr(copy);
  }

  return (
    <div>
      <div>
        <h2>Anecdote of the day</h2>
        {anecdotes[selected]}
      </div>
      <div>
        has {anecdotesRatingArr[selected]} votes
      </div>
      <div>
        <button onClick={voteAnecdote}>vote</button>
        <button onClick={showRandomAnecdote}>Next anecdote</button>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        {anecdotes[numberOfMostPopularAnecdote]}
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)