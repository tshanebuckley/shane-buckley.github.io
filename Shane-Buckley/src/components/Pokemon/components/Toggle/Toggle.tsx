import { Signal } from '@preact/signals-react'
import './Toggle.css'
import React from 'react'

interface ToggleParams {
  dark: Signal<boolean>
}

export const Toggle = (params: ToggleParams) => {
  //checked={params.isChecked}

  return (
    <div className='toggle-container'>
      <input
        type='checkbox'
        id='check'
        className='toggle'
        onChange={() => {
          params.dark.value = !params.dark.value
        }}
      />
      <label htmlFor='check'>Dark Mode</label>
    </div>
  )
}
