import React from 'react'
import ReactDOM from 'react-dom'
import Content from './Content';
import Header from './Header';
import Total from './Total'





const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const hola = "hola"
  return (
    <div>
      <Header course = {course}/>
      <p>
       <Content parte1 = {part1} /> 
       < Content exercises1= {exercises1}/> 
      </p>
      <p>
      <Content parte2 = {part2} /> 
       < Content exercises2= {exercises2}/> 
      </p>
      <p>
      <Content parte3 = {part3} /> 
       < Content exercises3= {exercises3}/>
       {hola}
      </p>
      <p>Number of exercises <Total  total=  {exercises1 + exercises2 + exercises3} /> </p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))