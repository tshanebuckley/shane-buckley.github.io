import { ReactNode } from 'react'
import './PokePanel.css'
import React from 'react'

export interface PanelInput {
  children?: ReactNode | ReactNode[]
}

function PokePanel(params: PanelInput) {
  return <div className='poke-panel'>{params.children}</div>
}

export default PokePanel
