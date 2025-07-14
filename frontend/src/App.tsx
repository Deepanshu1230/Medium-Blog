import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import { Signup } from './pages/Signup';
import { Blog } from './pages/Blog';
import { Signin } from './pages/Signin';
import { Blogs } from './pages/Blogs';
import { Main } from './pages/Main';
import { Comming } from './components/CommingSoon';
import { Publish } from './components/Publish';
import { ToastContainer } from 'react-toastify';

function App() {
  
  return (
    <>
     <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
      <BrowserRouter>
      <Routes>
         
         <Route path='/' element={<Main/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
         <Route path="/blog/:id" element={<Blog/>} />
         <Route path="/blogs" element={<Blogs/>} />
         <Route path="/commingsoon" element={<Comming/>} />
         <Route path="/publish" element={<Publish/>} />
        


      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
