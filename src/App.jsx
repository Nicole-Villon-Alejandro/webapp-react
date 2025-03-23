import Header from "./components/Header"
import DefaultLayout from "./layouts/DefaultLayout"
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Moviepage from "./pages/Moviepage";


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" element={<Homepage />} />
            <Route path="/movie/:id" element={<Moviepage />} />
          </Route>
        </Routes>
        
      </BrowserRouter>
      
      
      
    </>
  )
}

export default App
