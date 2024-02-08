import * as Dialog from '@radix-ui/react-dialog'
import {X} from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'sonner';
interface newNoteCardProps{
  onNoteCreated: (content: string) => void
}
let speedRecognition: SpeechRecognition | null = null
export function NewNoteCard({onNoteCreated}: newNoteCardProps){
  const [shouldShowOnboarding, setShouldShowOnboarnig] = useState(true)
  const [isRecording, setIsRecording] = useState(false)
  const [content, setContent] = useState('')
  function handleStartEditor(){
    setShouldShowOnboarnig(false)
  }

  function handleContentChange(event: ChangeEvent<HTMLTextAreaElement>){
    setContent(event.target.value)
    if(event.target.value === "") setShouldShowOnboarnig(true)
  }

  function handleSaveNote(event: FormEvent){
    event.preventDefault()

    if (content === '') return

    onNoteCreated(content);
    setContent('')
    setShouldShowOnboarnig(true)
    toast.success('Nota salva com sucesso!')
  }
  
  function handleStartRecording(){
    const isSpeechRecognitionAPIAvailable = 'SpeechRecognition' in window ||
    'webkitSpeechRecognition' in window;
    if(!isSpeechRecognitionAPIAvailable){ 
      alert('Infelizmente seu navegador não suporta a API de gravação');
      return
    }
    setIsRecording(true)
    setShouldShowOnboarnig(false)
    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition
    
    speedRecognition = new SpeechRecognitionAPI()
    speedRecognition.lang = 'pt-BR' || 'en-US'
    speedRecognition.continuous = true
    speedRecognition.maxAlternatives = 1
    speedRecognition.interimResults = true
    speedRecognition.onresult = (event) => {
      const transcription = Array.from(event.results)
        .reduce((text, result)=>{
          return text.concat(result[0].transcript)
        }, "")
      setContent(transcription)
    }

    speedRecognition.onerror = (event) => console.error(event);
    speedRecognition.start()
  }


  function handleStopRecording(){
    setIsRecording(false)
    if (speedRecognition !== null) {
      speedRecognition.stop()      
    }
  }

  return(
    <Dialog.Root>
      <Dialog.Trigger className="
        rounded-md bg-slate-700 p-5 flex flex-col text-left gap-3
        hover:ring-2 ring-slate-600 outline-none focus-visible:ring-2 
        focus-visible:ring-lime-400
      ">
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
          <form className="flex flex-1 flex-col">
            <div className='flex flex-1 flex-col gap-3 p-5'>
              <span className='text-sm font-medium text-slate-300'>
                Adicionar nota
              </span>
              {
                shouldShowOnboarding ? (
                  <p className='text-sm leading-6 text-slate-400'>
                Comece
                {" "}<button type='button' onClick={handleStartRecording} className='text-lime-400 font-medium hover:underline'>gravando uma nota</button> em áudio ou se preferir
                {" "}<button type='button' onClick={handleStartEditor} className='text-lime-400 font-medium hover:underline'>utilize apenas texto.</button>
              </p>
                ) : (
                  <textarea
                    autoFocus
                    onChange={handleContentChange}
                    value={content}
                    className='text-sm leading-6 text-slate-400 bg-transparent
                      resize-none flex-1 outline-none
                  '/>
                )
              }
            </div>
            {isRecording?(
              <button
                onClick={handleStopRecording}
                type='button' className='
                w-full bg-slate-900 py-4 text-center text-sm text-slate-300
                outline-none font-medium hover:text-slate-100 flex items-center
                justify-center gap-2
              '>
                <div className='size-3 rounded-full bg-red-500 animate-pulse' />
                Gravando! (clique p/ interronper)
              </button>

            ):(
              <button
                onClick={handleSaveNote}
                type='button' 
                className='
                w-full bg-lime-400 py-4 text-center text-sm text-lime-950
                outline-none font-medium hover:bg-lime-500
              '>
                Salvar nota
              </button>

            )}
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
    
  );
}