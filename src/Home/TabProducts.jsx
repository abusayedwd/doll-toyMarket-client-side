import { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ProductsCard from '../Components/ProductsCard';

const TabProducts = () => {
        const [toys,setToys] = useState([]);
        useEffect(()=>{
                fetch('https://doll-toy-server-a11.vercel.app/alltoys')
                .then(res => res.json())
                .then(data => setToys(data))

        },[])

        const babyDoll = toys.filter(item => item.category ==='Baby doll');
        const barbieDoll = toys.filter(item => item.category ==='Barbie doll');
        const americanDoll = toys.filter(item => item.category ==='American doll');

        return (
                <div >
                        <h1 className='text-2xl text-amber-500 font-bold text-center mt-16 mb-4 underline'>Shop By Category</h1>
                <Tabs >
                <TabList>
                  <Tab>Baby Doll</Tab>
                  <Tab>Barbie Doll</Tab>
                  <Tab>American Doll</Tab>
                </TabList>
            
               
                 
                <TabPanel>
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                  {
                        babyDoll.map(item => <ProductsCard key={item._id} item={item}/>)
                  }
                  </div>
                </TabPanel>
                
                <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                  {
                        barbieDoll.map(item => <ProductsCard key={item._id} item={item}/>)
                  }
                   </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                  {
                        americanDoll.map(item => <ProductsCard key={item._id} item={item}/>)
                  }
                   </div>
                </TabPanel>
             
               
              </Tabs>
              </div>
        );
};

export default TabProducts;