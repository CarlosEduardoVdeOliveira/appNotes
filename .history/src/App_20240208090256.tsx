import logo from './assets/logo-nlw-expert.svg'
import { NoteCard } from './components/note-card'
import { NewNoteCard } from './components/new-note-card'
import { useState } from 'react'
export function App() {
  const [notes, setNotes] = useState([
    {id: 1, date: new Date(), content:'Hello wolrd'},
    {id: 2, date: new Date(), content:'Segunda anotação'},
  ])
  function onNoteCreated(content: string){
    const newNote = {
      id: Math.random(),
      date: new Date(),
      content
    }
    setNotes([newNote, ...notes])
  }
  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
      <img src={logo} alt="Logo nlw expert" />
      <form className="w-full">
        <input 
          type="text" 
          placeholder='Busque em suas notas...'
          className='w-full bg-transparent text-3xl font-semibold tracking-tight
          placeholder:text-slate-500 outline-none'
        />
      </form>
      <div className="h-px bg-slate-700" />
      <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
        <NewNoteCard />
        {
          notes.map(note => <NoteCard key={note.id} note={note} />)
        }
      </div>
    </div>
  )
}
