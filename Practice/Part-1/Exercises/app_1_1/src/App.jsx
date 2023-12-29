const Header = (props) => {
  return (
    <div>
      <p>Course Name: {props.name}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>Part {props.no}:{props.name}</p>
      <p>Exercises: {props.exercise}</p>
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
      <Header name = {course}/>
      <Content name = {part1} no='1' exercise = {exercises1} />
      <Content name = {part2} no='2' exercise = {exercises2} />
      <Content name = {part3} no='3' exercise = {exercises3} />
      <Total value = {exercises1 + exercises2 + exercises3} />
    </>
  )
}

export default App