export function NoteCard() {
  return(
    <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 ring-slate-600">
      <span className='text-sm font-medium text-slate-300'>há 4 dias</span>
      <p className='text-sm leading-6 text-slate-400'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, vitae quod rem harum saepe perspiciatis sit nam nemo nisi fugiat, voluptate pariatur ipsam non, assumenda quas officia corrupti ipsum omnis.
      </p>
      <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/8 pointer-events-none'/>
    </div>
  );
}