import Header from "./components/Header"
import DefaultLayout from "./layouts/DefaultLayout"
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Moviepage from "./pages/Moviepage";
import CreateMoviePage from './pages/CreateMoviePage';
import GlobalContext from "./contexts/globalContext";
import { useState } from "react";


function App() {

  const [isLoading, setIsLoading ] = useState(false);
  

  return (
    <>
      <GlobalContext.Provider value={{isLoading, setIsLoading }}>
       <BrowserRouter>
         <Routes>
           <Route Component={DefaultLayout}>
             <Route path="/" element={<Homepage/>} />
             <Route path="/movies/:id" element={<Moviepage/>} />
             <Route path="/movies/create" element={<CreateMoviePage/>} />
           </Route>
         </Routes>
        </BrowserRouter>
        
      </GlobalContext.Provider>

      
      
      
      
    </>
  )
}

export default App
