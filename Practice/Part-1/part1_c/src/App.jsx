/*const Hello = ({name, age}) => {
  const {name, age} = props
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old </p>
      <p>So you were probably born in {bornYear()} </p>
    </div>
  )
}*/

const App = () => {
  const {counter} = props
  return (
    <div>{counter}</div>
  )
}

export default App
