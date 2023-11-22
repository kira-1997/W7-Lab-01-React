import React from 'react'

function Programmers(props) {
  return (
    <div className={props.com=='Tuwaiq'?'plum':'gray'}>
        <h1>{props.name}</h1>
        <p>Programming Languages: {props.ProgLang}</p> 
        <p> Years:  {props.exp} </p>
        <p> Company:  {props.com}</p>
    </div>
  )
}

export default Programmers