import logo from './logo.svg';
import './App.css';

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercise}
        {props.part1} {props.exercise1}
        {props.part2} {props.exercise2}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercoses2 + props.exercises3}</p>
    </div>
  )
}

const App = () => {

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exervises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercise={exercise1}
        part1={part2} exercise1={exercise2}
        part2={part3} exercise2={exercise3} />
      <Total exercise1={exervises1} exercise2={exercises2} exercise3={exercises3} />
    </div>
  )
}

export default App;
