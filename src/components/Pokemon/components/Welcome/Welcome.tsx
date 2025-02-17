import { useState } from 'react'
import PokePanel from '../PokePanel/PokePanel'
import Sprite from '../Sprite'
import React from 'react'

interface Params {
  size: number
  submit: (name: string) => void
}

export const Welcome = (params: Params) => {
  const [name, setName] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  return (
    <div className='poke-background'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            padding: '2px',
            display: 'inline-block',
            justifyContent: 'center'
          }}
        >
          <PokePanel>
            <Sprite img={0} size={params.size} />
          </PokePanel>
        </div>
      </div>
      <div className='poke-container'>
        <div style={{ padding: '2px' }}>
          <PokePanel>
            <p className='poke-text'>
              {`Hello there! Welcome to the world of POKEMON! My name is OAK! People call me the POKEMON PROF! First, what is your name?`}
            </p>
          </PokePanel>
          <PokePanel>
            <input type='text' value={name} onChange={handleChange}></input>
            <button
              onClick={() => {
                if (name) {
                  params.submit(name)
                }
              }}
            >
              submit
            </button>
          </PokePanel>
        </div>
      </div>
    </div>
  )
}
