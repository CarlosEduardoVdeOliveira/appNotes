
interface NoteCardProps{
  date: Date,
  content: String
}

export function NoteCard({date, content}: NoteCardProps) {
  return(
    <button className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 ring-slate-600 text-left outline-none focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className='text-sm font-medium text-slate-300'>{date.toString()}</span>
      <p className='text-sm leading-6 text-slate-400'>
        {content}
      </p>
      <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/8 pointer-events-none'/>
    </button>
  );
}