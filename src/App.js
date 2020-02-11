import React, { useState } from 'react';

function App() {
  let [names, changeNames] = useState('')
  const regex = /[\/\\:*?"<>|]/g

  let cleaned = names.replace(regex, '.')

  return (
    <div className="w-full max-w-lg mx-auto">
      <h1 className="mt-4 font-bold text-4xl text-center">Filename Cleaner</h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="filenames">
            Filenames
            </label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="filenames"
                value={names}
                onChange={e => changeNames(e.target.value)}
                placeholder="Paste filenames here"
              />
                  <p className="block text-gray-700 text-sm font-bold mb-2">Cleaned Filenames <span className="text-blue-400">
    </span></p>
                    <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                      {cleaned.split('\n').map(e => <p key={e}>{e}</p>)}
                      </div>
                </form>
                  <span className="text-gray-500 text-xs">
                    made with &lt;3 by erdostom
                    </span>
                  </div>
  );
}

function CopyIcon() {
  return <svg version="1.1" viewBox="0 0 512 512" className="h-4 w-4 ml-4 inline text-blue-500 fill-current">
          <path d="M481,371c11.046,0,20-8.954,20-20v-92c0-33.084-26.916-60-60-60h-39v-79c0-44.112-35.888-80-80-80h-47.533
            c-7.739-23.749-29.864-40-55.16-40h-25.614c-25.296,0-47.421,16.251-55.16,40H91c-44.112,0-80,35.888-80,80v312
            c0,44.112,35.888,80,80,80h88c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20H91c-22.056,0-40-17.944-40-40V120
            c0-22.056,17.944-40,40-40h2v59c0,11.046,8.954,20,20,20h189c11.046,0,20-8.954,20-20V80c22.056,0,40,17.944,40,40v79h-65.007
            C263.914,199,237,225.913,237,258.993v193.015c0,33.08,26.916,59.993,60.01,59.993L441,511.926c33.084,0,60-26.913,60-59.992
            c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20c0,11.024-8.972,19.992-20.01,19.992L297,472c-11.028,0-20-8.969-20-19.993
            V258.993c0-11.024,8.969-19.993,19.993-19.993H441c11.028,0,20,8.972,20,20v92C461,362.046,469.955,371,481,371z M282,119H133V80
            h21c9.177,0,17.177-6.246,19.403-15.149l2.798-11.194C178.211,45.616,185.404,40,193.693,40h25.614
            c8.289,0,15.481,5.616,17.492,13.657l2.798,11.194C241.823,73.754,249.823,80,259,80h23V119z"/>
            <path d="M401,279h-64c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h64c11.046,0,20-8.954,20-20
              C421,287.954,412.047,279,401,279z"/>
              <path d="M401,349h-64c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h64c11.046,0,20-8.954,20-20
                C421,357.954,412.047,349,401,349z"/>
    </svg>
}

export default App
