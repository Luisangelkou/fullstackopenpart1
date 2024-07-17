//Emmanuel Torres Malena 2021-1097

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>{name} you were probably born in {bornYear()}</p>
    </div>
  )
}

const Test = (props) => {
  const {foo, state} = props
  console.log(foo, state)
  return <></>
}

function App() {

  const name = 'PooPoo'
  const age = 35

  return (
    <>
      <div>
        <h1>Hola Mundo</h1>
        <Hello name="PeePee" age={20}/>
        <Hello name={name} age={age}/>
        <Test foo={1} bar="FooBar cool" state={6}/>
      </div>
    </>
  )
}

export default App
