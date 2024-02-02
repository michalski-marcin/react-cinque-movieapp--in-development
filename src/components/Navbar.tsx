import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className='bg-slate-400 flex justify-between items-center fixed w-[100%] left-0 top-0 p-3 z-10'>
            <div className="logo text-2xl">CinQue</div>
            <div>
                <ul className="flex gap-3">
                    <li><NavLink to='/'>Trending</NavLink></li>
                    <li><NavLink to='/search'>Search</NavLink></li>
                    <li><NavLink to='/que'>Your Que</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;