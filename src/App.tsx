import './App.css';
import Navbar from './components/navbar/Navbar';
import Search from './pages/Search';
import ToWatch from './pages/ToWatch';
import Trending from './pages/Trending';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';

function App() {


  return (
    <div className='m-2'>
     <Navbar />
     <AnimatePresence mode='wait'>
        <Routes>
          <Route
            path='/'
            element={<Trending />}
          />
          <Route
            path='/search'
            element={<Search />}
          />
          <Route
            path='/towatch'
            element={<ToWatch />}
          />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
