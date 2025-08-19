import './App.css'
import { FaInstagram } from "react-icons/fa";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import logo from './assets/logo.png'
import premier from './assets/PREMIER@2x.png'
import mydi from './assets/MYDI.png'
import ary from './assets/ARY@2x.png'
import dede from './assets/dede@2x.png'

function App() {
  return (
    <div className="flex flex-col items-center bg-[url('./assets/mundo@2x.png')] bg-no-repeat bg-[center_top_70px] bg-[length:100%] md:bg-[length:60%]">
      <header className="w-full flex items-center px-8 h-14 text-white fixed bg-white/20 backdrop-blur-md lg:px-32">
        <img src={logo} className="absolute w-20 left-8 top-10 md:w-32 lg:w-40 lg:top-1 lg:left-32"/>
        <div className="flex items-center justify-center m-auto gap-1 truncate uppercase font-semibold">
          <MdOutlineKeyboardDoubleArrowRight className='text-[#ED8C00] w-5 h-5'/>
          <span>a melhor comunidade de cs2</span>
          <MdKeyboardDoubleArrowLeft className='text-[#ED8C00] w-5 h-5'/>
        </div>
        <a href='https://instagram.com' target='_blank' className="absolute flex items-center justify-center w-10 h-10 bg-[#ED8C00] rounded-full right-8 top-12 md:w-12 md:h-12 lg:w-16 lg:h-16 lg:top-8 lg:right-32">
          <FaInstagram className='text-[#1F1E18] w-4 h-4 md:w-6 md:h-6 lg:w-9 lg:h-9'/>
        </a>
      </header>

      <div className='w-full flex flex-col items-center mt-40 px-8'>
        <div className="bg-[url('./assets/1.gif')] bg-cover bg-center w-[320px] h-20 md:w-[500px] md:h-32 lg:w-[600px] lg:h-36"></div>
        <div className="bg-[url('./assets/2.gif')] bg-cover bg-center w-[320px] h-20 mt-12 md:w-[500px] md:h-32 lg:w-[600px] lg:h-36"></div>
        <div className="bg-[url('./assets/3.gif')] bg-cover bg-center w-[320px] h-20 mt-12 md:w-[500px] md:h-32 lg:w-[600px] lg:h-36"></div>
        <div className="bg-[url('./assets/4.gif')] bg-cover bg-center w-[320px] h-20 mt-12 md:w-[500px] md:h-32 lg:w-[600px] lg:h-36"></div>
      </div>

      <div className='w-full flex flex-col mt-28 mb-9 px-8 items-center md:items-start md:px-8 md:justify-between md:flex-row lg:px-32'>
        <div className='flex flex-col w-64 xl:w-[440px]'>
          <h1 className='flex justify-center bg-[#ED8C00] text-[#1F1E18] p-3 font-bold text-3xl lg:text-4xl xl:text-6xl'>Nossas Lojas</h1>
          <div className='flex flex-row w-full justify-between mt-6'>
            <a href="https://premierskins.com.br/" target="_blank" rel="noopener noreferrer">
              <img src={premier} className='w-28 h-18 lg:w-[210px] xl:h-[126px]'/>
            </a>
            <a href="https://mydiskins.com.br/" target="_blank" rel="noopener noreferrer">
              <img src={mydi} className='w-28 h-18 lg:w-[210px] xl:h-[126px]'/>
            </a>
          </div>
          <div className='flex flex-row w-full justify-between mt-6'>
            <a href="https://arystorecs.com.br/" target="_blank" rel="noopener noreferrer">
              <img src={ary} className='w-28 h-18 lg:w-[210px] xl:h-[126px]'/>
            </a>
            <a href="https://dedeskins.com.br/" target="_blank" rel="noopener noreferrer">
              <img src={dede} className='w-28 h-18 lg:w-[210px] xl:h-[126px]'/>
            </a>
          </div>
        </div>

        <div className='flex flex-col w-64 md:w-80 lg:w-[480px] mt-16 md:mt-0'>
          <h1 className='flex justify-center bg-[#ED8C00] w-64 lg:w-80 p-3 font-bold text-3xl text-[#1F1E18] lg:text-4xl xl:text-6xl xl:w-[440px]'>Quem somos?</h1>
          <p className='text-[#d3d3d3] mt-4 xl:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis sapien. Donec placerat felis lacus, vel venenatis purus venenatis ac. Sed non porttitor eros, eget lacinia massa. Integer imperdiet eu tortor eu blandit. Duis eget accumsan velit, eu posuere nunc. Nam pellentesque erat et urna tincidunt, feugiat auctor urna tincidunt.</p>
        </div>
      </div>

      <footer className='flex w-full h-24 bg-[#ED8C00] items-center justify-center'>
        <h1 className='font-medium text-[#1F1E18] md:text-lg lg:text-xl'>Mundo Skins - Todos os direitos reservados &copy;</h1>
      </footer>
    </div>
  )
}

export default App
