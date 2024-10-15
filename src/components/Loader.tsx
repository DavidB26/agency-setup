
import { ripples } from 'ldrs'

function Loader() {
  ripples.register()
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <l-ripples
        size={60}
        speed={4}
        color='#0900BC'
      ></l-ripples>
    </div>
  )
}

export default Loader