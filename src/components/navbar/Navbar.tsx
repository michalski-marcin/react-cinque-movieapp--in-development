import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className='bg-slate-400 flex justify-between items-center fixed w-screen left-0 top-0 p-3'>
            <div className="logo text-2xl">CinQue</div>
            <div>
                <ul className="flex gap-3">
                    <li><Link to='/'>Trending</Link></li>
                    <li><Link to='/search'>Search</Link></li>
                    <li><Link to='/towatch'>Watch List</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;