import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaApple } from "react-icons/fa";
import {FaAmazon} from "react-icons/fa";

function App() {
  return (
    <>
    <FaAmazon size={70} />
    <div>
    <button>
      <FaApple size={30}></FaApple>
      login with apple
    </button>
    </div>
    </>
  )
}

export default App
