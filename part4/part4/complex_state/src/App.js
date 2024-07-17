//Emmanuel Torres Malena 2021-1097

import { useState } from "react"

const History = (props) => {
  if (props.allClicks.length == 0){
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = (props) => { 
  const { handleClick, text } = props
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  })

  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    const updateLeft = clicks.left + 1
    setClicks({ ...clicks, left: updateLeft})
    setAll(allClicks.concat('L'))
    setTotal(updateLeft + clicks.right)
  }

  const handleRightClick = () => {
    const updateRight = clicks.right + 1
    setClicks({ ...clicks, right: updateRight})
    setAll(allClicks.concat('R'))
    setTotal(clicks.left + updateRight)
  }

  return (
    <div>
      {clicks.left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {clicks.right}
      <History allClicks={allClicks} />
      <p>total {total}</p>
    </div>
  )
}

export default App


//ETM