import { useDispatch } from "react-redux"
import NewNote from "./components/NewNote"
import Notes from "./components/Notes"
import VisibilityFilter from "./components/VisibilityFilter"
import { useEffect } from "react"
import { initialNotes, } from "./reducers/noteReducer"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initialNotes())
  }, [])

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}

export default App
