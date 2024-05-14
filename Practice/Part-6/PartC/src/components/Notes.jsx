import { useDispatch, useSelector } from "react-redux";
import { toggleImportanceOf } from "../reducers/noteReducer";
import PropTypes from 'prop-types'
import noteService from '../services/notes'

const Note = ({ note, handleClick}) => {
    return (
        <li onClick={handleClick}>
            {note.content}
            <strong> {note.important ? 'important' : ''} </strong>
        </li>
    )
}

Note.propTypes = {
    note: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired
}

const Notes = () => {
    const dispatch = useDispatch()

    const notes = useSelector(({ filter, notes }) => {
        if ( filter === 'ALL') {
            return notes
        }
        return filter === 'IMPORTANT'   //behaves as default
            ? notes.filter(note => note.important)
            : notes.filter(note => !note.important)
    })

    const notesArray = useSelector(state => state.notes)

    const handleClick = async (id) => {
        const object = notesArray.find(n => n.id === id)
        console.log(object)
        await noteService.toggleImportance(id, object)
        dispatch(toggleImportanceOf(id))
    }

    return(
        <ul>
            {notes.map(note => 
                <Note
                    key={note.id}
                    note={note}
                    handleClick= {() => handleClick(note.id) }
                />
            )}
        </ul>
    )
}

export default Notes