import React from 'react'
import { Entry, Sprite } from './Sprite'

function Pokemon(props: Entry) {
  return (
    <>
      <Sprite img={props.img} size={props.size} />
    </>
  )
}

export default Pokemon
