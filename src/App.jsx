import React, { useState } from 'react'
import Sahifa1 from './Komponents/Sahifa1'
import Hedr from './Hedr'
import Sahifa2 from './Komponents/Sahifa2';
import New from './Komponents/New';
import Ombor from './Ombor';
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Edit from './Komponents/Edit';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Sahifa1/>
  },
  {
    path:'/data',
    element:<Sahifa2/>
  }
])


function App() {
  
  const [mod, setMod]=useState(localStorage.getItem('md'));
  


  function Dark(bul){
    setMod(bul);
    localStorage.setItem('md',bul)
  }

  return (
      <Provider store={Ombor}>
    <div className={`lg:flex min-h-[100vh] bgd max-w-[1740px] lg:mx-auto ${ mod=='dark' ? 'md':''}`}>
      <Hedr m={Dark} n={mod}/>
      <RouterProvider router={router}/>
      <Edit/>
      <New/>
    </div>
    </Provider>
  )
}

export default App