import * as Dialog from '@radix-ui/react-dialog'
import {formatDistanceToNow} from 'date-fns'
import {ptBR} from 'date-fns/locale'
import {X} from 'lucide-react'

interface NoteCardProps{
  note: {
    date: Date,
    content: String
  }
}

export function NoteCard({note}:NoteCardProps) {
  return(
    <Dialog.Root>
      <Dialog.Trigger className="
        rounded-md bg-slate-800 p-5 flex flex-col gap-3 overflow-hidden 
        relative hover:ring-2 ring-slate-600 text-left outline-none 
        focus-visible:ring-2 focus-visible:ring-lime-400
      ">
        <span className='text-sm font-medium text-slate-300'>
        {formatDistanceToNow(note.date, {locale: ptBR, addSuffix: true})}
        </span>
        <p className='text-sm leading-6 text-slate-400'>
          {note.content}
        </p>
        <div className='
          absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60
          to-black/8 pointer-events-none'
        />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='inset-0 fixed bg-black/50' />
        <Dialog.Content className='
          fixed -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2
          bg-slate-700 max-w-[650px] w-full flex flex-col rounded-md 
          outline-none overflow-hidden h-[60vh]
        '>
          <Dialog.Close className='
            right-0 top-0 absolute bg-slate-800 p-1.5 text-slate-400
          '>
            <X className='size-5 hover:text-slate-300' />
          </Dialog.Close>
          <div className='flex flex-1 flex-col gap-3 p-5'>
            <span className='text-sm font-medium text-slate-300'>
              {formatDistanceToNow(note.date, {locale: ptBR, addSuffix: true})}
            </span>
            <p className='text-sm leading-6 text-slate-400'>
              {note.content}
            </p>
          </div>
          <button type='button' className='
            w-full bg-slate-800 py-4 text-center text-sm text-slate-300
            outline-none font-medium group
          '>
            Deseja <span className='text-red-400 group-hover:underline'> apagar nota</span>?
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}