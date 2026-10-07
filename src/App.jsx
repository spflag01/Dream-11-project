
import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/Homepage/Banner/Banner'
import Players from "./components/Homepage/Player/Players"
import { Suspense, useState } from 'react'
  import { ToastContainer, toast } from 'react-toastify';

const fetchPlayer = async()=>{
  const res=await fetch("/data.json");
  return res.json();
}
function App() {
  const playersPromise= fetchPlayer();
  const [coin,setcoin]=useState(900000)
   



  return (

<>

  <Navbar coin={coin}></Navbar>
  <Banner></Banner>

  <Suspense fallback={<span className="loading loading-spinner 
  loading-xs"></span>}>

      

<Players playersPromise={playersPromise} setcoin={setcoin} coin={coin}></Players>
</Suspense>



 <ToastContainer />
  
  
  
</>

  )
}

export default App
