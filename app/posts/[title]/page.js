import React from 'react'

export default function PostsByTitleDynamic(props) {
  console.log("from Posts By Title :", props.params)
  return (
    <div>PostsByTitle Dynamic Route <b>{props.params.title}</b></div>
  )
}
