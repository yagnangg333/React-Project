import React, { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [NumberAllowed, setNumberAllowed] = useState(false)
  const [CharacterAllowed, setCharacterAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  const PasswordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (NumberAllowed) str += "0123456789"    
    if (CharacterAllowed) str += "!@#$%^&*-_+=[]{}~`"
    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    
    setPassword(pass)

  }, [length, NumberAllowed, CharacterAllowed, setPassword])

  const copyPasswordToClip = useCallback(() => {
      PasswordRef.current?.select()
      PasswordRef.current?.setSelectionRange(0, length)
      window.navigator.clipboard.writeText(Password)
    },[Password]
  )

  useEffect(()=> {
    passwordGenerator()
  },[length, NumberAllowed, CharacterAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-8 py-1 my-9 text-xl text-center bg-gray-300'>
        <h1 className='text-black text-center'>
          Password Generator
        </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
          type="text"
          value={Password}
          className='outline-none w-full py-1 px-3 rounded-md'
          placeholder='Password'
          readOnly
          ref={PasswordRef}
          />
          <button 
          onClick={copyPasswordToClip}
          className='bg-blue-700 text-white outline-none shrink-0 ml-2 px-4 py-1 rounded-md'>
            Copy
          </button>
        </div>
        
        <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
                type="range"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => {setlength(e.target.value)}}
              />
              <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                  type="checkbox"
                  defaultChecked={NumberAllowed}
                  id="numberInput"
                  onChange={() => {
                      setNumberAllowed((prev) => !prev);
                  }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
                <input
                    type="checkbox"
                    defaultChecked={CharacterAllowed}
                    id="characterInput"
                    onChange={() => {
                        setCharacterAllowed((prev) => !prev )
                    }}
                />
                <label htmlFor="characterInput">Characters</label>
            </div>
          </div>

      </div>
    </>
  )
}

export default App
