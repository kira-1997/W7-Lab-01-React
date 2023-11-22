import React from 'react'
import Servisec from './Servisec'
import Programmers from './Programmers'

function Company(props) {
  return (
    
     <div className='box'>

     <h1>Company Name:  {props.cName}</h1>
    
        <p>Year Founded: {props.year}</p> 
        <p>Emplyees Number: {props.empNum}</p>
         <Servisec servise={props.servise} price={props.price}/>
       

     <h1>Employees:</h1> 
     <div className='prog'>
        <Programmers name={props.name} ProgLang={props.lang} exp={props.exp} com={props.com}/>
        <Programmers name={props.name2} ProgLang={props.lang} exp={props.exp2} com={props.com2}/>
        <Programmers name={props.name3} ProgLang={props.lang} exp={props.exp3} com={props.com3}/>
     </div>

    </div>
    
  )
}

export default Company