import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
  const [ifScrolled, setIfScrolled] = useState(false);

  const offset = 60;
  const handleScroll = () => {
    if (window.scrollY <= offset) {
      setIfScrolled(false);
    } else {
      setIfScrolled(true);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      onScroll={handleScroll}
      className=' flex justify-between items-center fixed w-[100%] left-0 top-0 py-5 px-10 max-md:px-6 max-sm:px-3 z-10 transition-[0.3]'
      style={
        ifScrolled
          ? { background: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(7px)' }
          : {}
      }>
      <img className='h-[55px]' src="logo.svg" alt="logo" />
      <div>
        <ul className='flex gap-3 text-indigo-400'>
          <li>
            <NavLink to='/'>Trending</NavLink>
          </li>
          <li>
            <NavLink to='/search'>Search</NavLink>
          </li>
          <li>
            <NavLink to='/que'>Your Que</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
