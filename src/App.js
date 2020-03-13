import React, { useState } from 'react';

function App() {
  let [scores, changeScores] = useState([null, null, null, null])

  function updateScore(i, raw) {
    let scorez = [...scores]
    scorez.splice(i,1,raw)
    changeScores(scorez)
  }

  const calculatedScores = scores.map(targetScore => {
    if (targetScore !== null) {
    return scores.reduce((memo, val) => {
      if (val !== null) {
      return memo + Number(targetScore) - Number(val)
      } else {
        return memo
      }
      },0)
    } else {
      return null
    }
  })

  return (
    <div className="w-full max-w-lg mx-auto">
      <h1 className="mt-4 font-bold text-gray-900  text-4xl text-center">Ulti Elszámoló</h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {scores.map((raw, i) => <PlayerSection
            i={i}
            raw={raw}
            score={calculatedScores[i]}
            key={i}
            updateScore={updateScore}
          />)}
        </form>
        <span className="text-gray-500 text-xs ">
          made with &lt;3 by erdostom
        </span>
      </div>
  );
}

function PlayerSection({i, raw, score, updateScore}) {
  return (
    <div className="mt-4">
    <div className="grid grid-cols-3 gap-4 mb-2 items-baseline">
    <label className="block text-gray-600 text-sm font-bold mb-2 text-lg" >
      {`Játékos ${i+1}`}
      </label>
        <input className="bg-gray-100 text-gray-700 rounded-full border-none text-right text-xl"
          value={raw}
          onChange={function(e) {updateScore(i, e.target.value)}}
        />
          <p className=" text-right text-gray-800 text-2xl">{score}</p>
            </div>
              {i !== 3 && <hr />}
            </div>
  )
}


export default App
