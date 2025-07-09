import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import { Signup } from './pages/Signup';
import { Blog } from './pages/Blog';
import { Signin } from './pages/Signin';
import { Blogs } from './pages/Blogs';

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>

        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
         <Route path="/blog/:id" element={<Blog/>} />
         <Route path="/blogs" element={<Blogs/>} />
        


      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
