import { Toggle } from '../Toggle/Toggle'
import './PokeApp.css'
import StarterSelector from '../StarterSelector/StarterSelector'
import { dark, pokeId } from '../../state/PokeAccent'
import { GetInitializedState, InitializedState } from '../../state/Initialize'
import { ReactNode, useState } from 'react'
import { saveTrainerName, trainerName } from '../../state/TrainerName'
import { Welcome } from '../Welcome/Welcome'
import React from 'react'

interface Props {
  child: ReactNode
}

function DisplayStartupPage(child: Props) {
  const [state, setState] = useState(GetInitializedState())

  if (state === InitializedState.First) {
    return (
      <>
        <Toggle dark={dark} />
        <Welcome
          size={150}
          submit={(name: string) => {
            saveTrainerName(name)
            setState(InitializedState.HasName)
          }}
        />
      </>
    )
  }
  if (state === InitializedState.HasName) {
    return (
      <>
        <Toggle dark={dark} />
        <StarterSelector
          name={trainerName.peek()}
          starter={pokeId}
          pokeballSize={150}
          submit={() => setState(InitializedState.HasStarter)}
        />
      </>
    )
  }
  return <>{child.child}</>
}

function PokeApp(props: Props) {
  return (
    <>
      <div className='PokeApp'>
        <DisplayStartupPage child={props.child} />
      </div>
    </>
  )
}

export default PokeApp
