import { useMutation, useQuery, useQueryClient, } from "@tanstack/react-query"
import { createNote, getNotes, updateNote } from "./requests"

const App = () => {
  const queryClient = useQueryClient()

  const newNoteMutation = useMutation({ 
    mutationFn: createNote,
    onSuccess: (newNote) => {
      const notes = queryClient.getQueryData(['notes'])
      queryClient.setQueryData(['notes'], notes.concat(newNote))
    }
  })

  const updateNoteMutation = useMutation({
    mutationFn: updateNote,
    onSuccess: (updatedNote) => {
      queryClient.setQueryData(['notes'], (oldData) => {
        if(!oldData) return []
        return oldData.map(note => 
          note.id === updatedNote.id ? updatedNote : note
        )
      })
    }
  })

  const addNote = async (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    newNoteMutation.mutate({ content, important: true })
    console.log(content)
  }

  const toggleImportance = (note) => {
    updateNoteMutation.mutate({...note, important: !note.important })
    console.log('toggle importance of', note.id)
  }

  const result = useQuery({
    queryKey: ['notes'],
    queryFn: getNotes
  })
  console.log(JSON.parse(JSON.stringify(result)))

  if ( result.isLoading ) {
    return <div>loading state...</div>
  }

  const notes = result.data

  return(
    <div>
      <h2>Notes app</h2>
      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
      {notes.map(note =>
        <li key={note.id} onClick={() => toggleImportance(note)}>
          {note.content} 
          <strong> {note.important ? 'important' : ''}</strong>
        </li>
      )}
    </div>
  )
}

export default App