import Course from './Course'

// const Course = ({course}) => {
  

//   const Content = ({props})=> props.map(parts => <p key={parts.id}>{parts.name} {parts.exercises}</p>)
//   const Sum = ({props}) => props.reduce(function(sum, props){
//     return sum+props.exercises
//   }, 0)
//   const Total = ({props})=> <p><b>total of <Sum props={props} /> exercises</b></p>


//   return(
//     <>
//     <h1>{course[0].name}</h1>
//     <Content props={course[0].parts} />
//     <Total props={course[0].parts} />
//     <h1>{course[1].name}</h1>
//     <Content props={course[1].parts} />
//     <Total props={course[1].parts} />
//     </>
//   )
// };
  

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
  <Course course={courses} />
  
  
  </div>
)}

export default App