import logo from './assets/logo-nlw-expert.svg'
export function App() {
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
        <div className="rounded-md bg-slate-700 ">
          <span className='text-slate-200'>Adicionar nota</span>
          <p className='text-slate-400'>Grave uma nota em áudio que será convertida para texto automaticamente.</p>
        </div>
        <div className="rounded-md bg-slate-800"></div>
        <div className="rounded-md bg-slate-800"></div>
        <div className="rounded-md bg-slate-800"></div>
      </div>
    </div>
  )
}
