import logo from './assets/logo-nlw-expert.svg'
export function App() {
  return (
    <div className='mx-auto max-w-6xl my-12'>
      <img src={logo} alt="" />
      <input type="text" placeholder='Busque em suas notas...' />
    </div>
  )
}
