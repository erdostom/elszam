import React, { useState } from 'react';

function App() {
  let [scores, changeScores] = useState([``, ``, ``, ``])
  const resultRegex = /^-?[0-9]+$/

  function updateScore(i, raw) {
    let scorez = [...scores]
    scorez.splice(i,1,raw)
    changeScores(scorez)
  }

  const calculatedScores = scores.map(targetScore => {
    if (targetScore.match(resultRegex)) {
    return scores.reduce((memo, val) => {
      if (val.match(resultRegex)) {
      return memo + Number(targetScore) - Number(val)
      } else {
        return memo
      }
      },0)
    } else {
      return ``
    }
  })

  return (
    <div className="w-full max-w-sm mx-auto">
      <h1 className="mt-4 font-bold text-gray-900 text-4xl text-center">Ulti Elszámoló</h1>
        <form className="bg-gray-100 shadow-2xl rounded mx-2 px-1 pt-2 pb-2 mb-4 border border-gray-300">
          {scores.map((raw, i) => <PlayerSection
            i={i}
            raw={raw}
            score={calculatedScores[i]}
            key={i}
            updateScore={updateScore}
          />)}
        </form>
        <p className="text-gray-500 text-xs text-center">
          made with &lt;3 by erdostom
        </p>
      </div>
  );
}

function PlayerSection({i, raw, score, updateScore}) {
  let scoreColor = "text-black"
  if (score > 0) {
    scoreColor = "text-green-700"
  } else if (score < 0) {
    scoreColor = "text-red-700"
  }
  return (
    <div className="mt-4">
    <div className="grid grid-cols-3 gap-4 mb-2 items-middle items-baseline">
    <label className="block text-gray-600 text-sm font-bold mb-2 text-xl" >
      {`Játékos ${i+1}`}
      </label>
        <input className="bg-gray-200 text-gray-700 rounded-full border-none text-right text-xl pr-3 self-start"
          value={raw}
          onChange={function(e) {updateScore(i, e.target.value)}}
          autoFocus={i===0}
          type="number"
        />
          <p className={`pr-2 text-right text-gray-800 text-xl ${scoreColor}`}>{score}</p>
            </div>
              {i !== 3 && <hr />}
            </div>
  )
}


export default App
