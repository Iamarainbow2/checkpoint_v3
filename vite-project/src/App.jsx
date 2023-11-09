import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/address/:id" element={<AddressDetails />}/>
       <Route path="/personal/:id" element={<PersonalDetails />}/>
     </Routes>
    </BrowserRouter> 
   </>
  )
}

export default App
