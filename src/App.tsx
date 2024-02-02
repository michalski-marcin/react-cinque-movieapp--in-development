import './App.css';
import Navbar from './components/Navbar';

// Pages
import Search from './pages/Search';
import Que from './pages/Que';
import Trending from './pages/Trending';

// Libraries
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 


function App() {

  return (
    <BrowserRouter>
      <div className='m-2'>
        <Navbar />
        <AnimatePresence mode='wait'>
          <Routes>
            <Route
              index
              element={<Trending />}
            />
            <Route
              path='search'
              element={<Search />}
            />
            <Route
              path='que'
              element={<Que />}
            />
          </Routes>
        </AnimatePresence>
      </div>
      {/* <div className="bg-black w-[100%] h-[100%] absolute top-0 left-0">
        Halo
      </div>  */}
      
    </BrowserRouter>
  );
}

export default App;
