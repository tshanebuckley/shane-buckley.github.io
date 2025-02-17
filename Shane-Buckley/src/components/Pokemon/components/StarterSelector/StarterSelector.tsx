import { useState } from 'react'
import Sprite from '../Sprite'
import Pokeball from '../Pokeball/Pokeball'
import PokePanel from '../PokePanel/PokePanel'
import './StarterSelector.css'
import { Signal } from '@preact/signals-react'
import { PrimaryColor } from '../../state/PokeAccent'
import React from 'react'
import ThemeData from '../ThemeData'

interface Params {
  name: string
  starter: Signal<number | string>
  pokeballSize: number
  submit: () => void
}

function StarterSelector(params: Params) {
  const starters = [4, 7, 1]

  const [pokemon, setPokemon] = useState(params.starter.value)

  const showText = () => {
    if (!pokemon) {
      return (
        <div>
          <p className='poke-text'>
            {`Here, ${params.name}! There are 3 POKEMON here! Haha!
            They are inside the POKE BALLS. When I was young,
            I was a serious POKEMON trainer. In my old age, I have only 3 left,
            but you can have one! Choose!`}
          </p>
        </div>
      )
    }
    return (
      <>
        <p className='poke-text'>Select this starter?</p>
        <button onClick={() => params.submit()}>Yes</button>
        <button
          onClick={() => {
            params.starter.value = 0
            setPokemon(0)
          }}
        >
          No
        </button>
      </>
    )
  }

  return (
    <div className='poke-background'>
      <h1 className='poke-title'>Choose your starter Pokemon!</h1>
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
            <Sprite img={pokemon} size={params.pokeballSize} />
          </PokePanel>
          <ThemeData></ThemeData>
          {/* <div style={{ width: 200, height: 100, background: PrimaryColor() }}></div>
          <div style={{ width: 200, height: 100, background: PrimaryColor() }}></div> */}
        </div>
      </div>
      <div className='poke-container'>
        <ul className='starter-list'>
          {starters.map((item) => (
            <li
              className='starter-group-item'
              key={item}
              onClick={() => {
                params.starter.value = item
                setPokemon(item)
              }}
            >
              <Pokeball size={params.pokeballSize} isOpen={pokemon === item} />
            </li>
          ))}
        </ul>
      </div>
      <div style={{ padding: '2px' }}>
        <PokePanel>{showText()}</PokePanel>
      </div>
    </div>
  )
}

export default StarterSelector
