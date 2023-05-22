 
import { Outlet } from 'react-router-dom';
import Header from '../Routes/Shared/Header';
import Footer from '../Routes/Shared/Footer';

const Main = () => {
        return (
                <div className='w-[90%] mx-auto'> 
                        <Header></Header>
                        <Outlet></Outlet>
                        <Footer></Footer>
                </div>
        );
};

export default Main;