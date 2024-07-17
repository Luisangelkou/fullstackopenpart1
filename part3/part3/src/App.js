import { useState} from 'react'

const App = (props) => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  return (
    <div>
      {counter}
    </div>
  )

  // return (
  //   <div>
  //     <button onClick={() => setCounter((counter) => counter + 1)}>
  //       {counter}
  //     </button>
  //   </div>
  // )
  
}


export default App


//ETM