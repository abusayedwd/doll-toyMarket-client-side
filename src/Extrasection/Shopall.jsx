import { Link } from 'react-router-dom';
import toy from '../../public/soptoy.webp';

const Shopall = () => {
        return (
               <div>

<div className='grid grid-cols-1 gap-5 md:grid-cols-2  mt-24'>
                        <div className='p-4'>
                                <img className='h-96 rounded-3xl' src={toy} alt="" />
                        </div>
                        <div className=' text-start md:ml-2 ml-16'> 
                            <p className='mt-20 text-2xl text-emerald-600 font-bold'>take a faste , <br /> come join us , <br /> life is to indlessly delecious </p> 
                            <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestias sunt modi eos perferendis necessitatibus iusto maxime provident?</p>   
                            <button className="btn btn-accent">Now it</button>
                     </div>
                </div>

                 <div className='flex justify-evenly my-12'>
                        <div className='bg-sky-300 p-24'>
                              <h1  className='mb-8 text-2xl'>Exclusive nice Toy </h1> 
                              <Link to = '/alltoy'>
                              <button className='bg-gray-400 px-6 py-3 rounded-xl font-bold hover:bg-orange-300'>SHOP NOW</button>
                              </Link>  
                        </div>
                        <div className='bg-sky-600 p-24'>
                        <h1 className='mb-8 text-2xl'> Hight Quality Toy </h1> 
                              <Link to = '/alltoy'>
                              <button className='bg-gray-400 px-6 py-3 rounded-xl font-bold hover:bg-orange-300'>SHOP NOW</button>
                              </Link>      
                        </div>
                 </div>
               </div>
        );
};

export default Shopall;