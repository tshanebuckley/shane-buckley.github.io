import React from 'react'

export interface Entry {
  img: number | string
  size: number
}

export const GetSpriteSource = (img: number | string) => {
  if (!img || img.toString() === '0') {
    return require('@site/static/img/oak.png').default
  }
  return `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/versions/generation-v/black-white/animated/${img}.gif`
}

export function Sprite(props: Entry) {
  const source = GetSpriteSource(props.img)

  return <img src={source} style={{ height: props.size, width: props.size }} data-theme='light' />
}

export default Sprite
