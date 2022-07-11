import App from "./App";

const Course = ({course}) => {
  

    const Content = ({props})=> props.map(parts => <p key={parts.id}>{parts.name} {parts.exercises}</p>)
    const Sum = ({props}) => props.reduce(function(sum, props){
      return sum+props.exercises
    }, 0)
    const Total = ({props})=> <p><b>total of <Sum props={props} /> exercises</b></p>
  
  
    return(
      <>
      <h1>{course[0].name}</h1>
      <Content props={course[0].parts} />
      <Total props={course[0].parts} />
      <h1>{course[1].name}</h1>
      <Content props={course[1].parts} />
      <Total props={course[1].parts} />
      </>
    )
  };

  export default Course;