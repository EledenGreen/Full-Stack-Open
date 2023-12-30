const Header = (props) => {
  return (
    <div>
      <p>Course Name: {props.course}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total no. of Exercises: {props.value}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course = {course}/>
      {/* Here, we have to pass the const variable so that 'Const' component can access it  */}
      <Content part1 = {part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
      <Total value = {exercises1 + exercises2 + exercises3} />
    </>
  )
}

//const variables are passed as props by the <Content .... />
const Content = ({part1,part2,part3,exercises1,exercises2,exercises3}) => {
  return (
    <div>
      <Part no='1' topic={part1} exercise={exercises1} />
      <Part no='2' topic={part2} exercise={exercises2} />
      <Part no='3' topic={part3} exercise={exercises3} />
    </div>
  )
}

const Part = ({no, topic, exercise}) => {
  return (
    <div>
      <p>Part {no}:{topic} | Exercises: {exercise}</p>
    </div>
  )
}

export default App