
const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <p>
        {props[0].name} {props[0].exercises}
        {props[1].name} {props[1].exercises}
        {props[2].name} {props[2].exercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props[0].exercises+ props[1].exercises+ props[2].exercises}</p>
    </div>
  )
}

const App = () => {

  const course = {
    name: 'Half Stack application development'
    , parts: [{
      name: 'Fundamentals of React',
      exercises: 10
    }
      , {
      name: 'Using props to pass data',
      exercises: 7
    }
      , {
      name: 'State of a component',
      exercises: 14
    }]
  }


  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div >
  )
}

export default App;
