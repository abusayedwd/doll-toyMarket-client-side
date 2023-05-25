 
import { Link } from 'react-router-dom';
import logo from '../../../public/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Header = () => {
   const {user, logOut} = useContext(AuthContext)
        const logOuthandler = () => {
                logOut()
                .then(() => {
                   
                })
                .catch(error=> console.log(error))
           }
        
        const navitem = <>
          <li className='font-bold'><Link to = '/'>Home</Link></li>
          <li className='font-bold'><Link to = '/alltoy'>All toy</Link></li>

          {user ? 
        <div className='flex'>
                <li className='font-bold'><Link>My toy</Link></li>
               <li className='font-bold'><Link to = '/addtoy'>Add a Toy</Link></li>
        </div>: '' 
        }
          <li className='font-bold'><Link to = '/blog'>Blog</Link></li>

           
          
           
        </>
        return (
                <div>
                <div className="navbar bg-base-100">
<div className="navbar-start">
<div className="dropdown">
<label tabIndex={0} className="btn btn-ghost lg:hidden">
 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
</label>
<ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
  {navitem}
</ul>
</div>
<Link to='/' className=" mt-2 normal-case text-xl">
 <img className='h-20 md:ml-8' src={logo} alt="" />
</Link>
</div>
<div className="navbar-center hidden lg:flex">
<ul className="menu menu-horizontal px-1">
{navitem}
</ul>
</div>
<div className="navbar-end">

 {  user? <div className='flex gap-2'>
                 <img className='w-8 rounded-full'  title={user.displayName} src={user.photoURL} alt="" /> 
                 <button  className='bg-red-300 mr-4 px-4 py-2 rounded-lg' onClick={logOuthandler}>Log Out</button> </div> :
                 <div>
                   <button className="btn btn-warning mr-3">
            <Link to = '/login'>Login</Link>
               </button>
                 </div>
}
 
</div>
</div>
         </div>
        );
};

export default Header;