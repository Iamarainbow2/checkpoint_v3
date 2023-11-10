import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cars from '../components/Cars.jsx'
import CarsId from '../components/CarsId.jsx'
import Form from './Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Form />}/>
       <Route path="/cars/" element={<Cars />}/>
       <Route path="/cars/:id" element={<CarsId />}/>
     </Routes>
    </BrowserRouter> 
   </>
  )
}

export default App
