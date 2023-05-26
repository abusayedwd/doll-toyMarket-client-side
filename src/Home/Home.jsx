 
import Shopall from '../Extrasection/Shopall';
import Benner from './Benner';
import PhotoGallery from '../Gallery/PhotoGallery';
import TabProducts from './TabProducts';
import 'react-tabs/style/react-tabs.css';


const Home = () => {
        return (
                <div>
                       <Benner></Benner> 
                       <div className='my-12'>
                       < PhotoGallery/>
                       </div>
                       <div className='w-[90%] mx-auto my-12'>
                       <TabProducts/>
                       <Shopall></Shopall>
                       </div>
                </div>
        );
};

export default Home;