import * as Dialog from '@radix-ui/react-dialog'
import {X} from 'lucide-react'

export function NewNoteCard(){
  return(
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md bg-slate-700 p-5 space-y-3">
        <span className='text-sm font-medium text-slate-200'>Adicionar nota</span>
        <p className='text-sm leading-6 text-slate-400'>Grave uma nota em áudio que será convertida para texto automaticamente.</p>
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
            hover:text-slate-100
          '>
            <X className='size-5' />
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