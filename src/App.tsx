import './App.css'
import { FaInstagram } from "react-icons/fa";

function App() {
  return (
    <div className='flex flex-col items-center'>
      <header className="w-full grid grid-cols-3 items-center px-8 h-14 bg-[#959595] text-white lg:px-32">
        <div className="w-[70%] h-10 bg-[#2e2e2e] lg:w-48"></div>
        <p className="truncate uppercase font-semibold text-center">
          lorem ipsum dolor sit amet
        </p>
        <a href='https://instagram.com' target='_blank' className="flex items-center justify-center w-10 h-10 bg-[#2e2e2e] rounded-full justify-self-end">
          <FaInstagram size={20}/>
        </a>
      </header>

      <div className='w-full flex flex-col items-center mt-16 px-8'>
        <div className='w-full h-36 bg-[#d3d3d3] md:w-[75%] lg:w-[500px]'></div>
        <div className='w-full h-36 bg-[#d3d3d3] mt-12 md:w-[75%] lg:w-[500px]'></div>
        <div className='w-full h-36 bg-[#d3d3d3] mt-12 md:w-[75%] lg:w-[500px]'></div>
      </div>

      <div className='w-full flex flex-col mt-20 mb-9 px-8 items-center md:items-start md:px-8 md:justify-between md:flex-row lg:px-32'>
        <div className='flex flex-col w-64 lg:w-80'>
          <h1 className='flex justify-center bg-[#d3d3d3] text-[#2e2e2e] p-3 font-bold text-3xl lg:text-4xl'>Nossas Lojas</h1>
          <div className='flex flex-row w-full justify-between mt-6'>
            <div className='w-28 h-18 bg-[#d3d3d3] lg:w-36'></div>
            <div className='w-28 h-18 bg-[#d3d3d3] lg:w-36'></div>
          </div>
          <div className='flex flex-row w-full justify-between mt-6'>
            <div className='w-28 h-18 bg-[#d3d3d3] lg:w-36'></div>
            <div className='w-28 h-18 bg-[#d3d3d3] lg:w-36'></div>
          </div>
        </div>

        <div className='flex flex-col w-64 md:w-80 lg:w-[480px] mt-16 md:mt-0'>
          <h1 className='flex justify-center bg-[#d3d3d3] w-64 lg:w-80 p-3 font-bold text-3xl lg:text-4xl'>Quem somos?</h1>
          <p className='text-[#d3d3d3] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis sapien. Donec placerat felis lacus, vel venenatis purus venenatis ac. Sed non porttitor eros, eget lacinia massa. Integer imperdiet eu tortor eu blandit. Duis eget accumsan velit, eu posuere nunc. Nam pellentesque erat et urna tincidunt, feugiat auctor urna tincidunt.</p>
        </div>
      </div>

      <footer className='flex w-full h-24 bg-[#959595] items-center justify-center'>
        <h1 className='font-medium text-white md:text-lg lg:text-xl'>Premier Skins - Todos os direitos reservados &copy;</h1>
      </footer>
    </div>
  )
}

export default App
