import { useLoaderData } from "react-router-dom";
import Toytable from "./Toytable";

 

const Alltoy = () => {
        const alltoys = useLoaderData();
        console.log(alltoys)
        return (
                <div>
                        <h1>all toys shows: {alltoys.length}</h1>

                        <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head*/}
    <thead>
      <tr>
        <th>Seller</th>
        <th>Toy Name</th>
        <th>Sub-Category</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Info</th>
      </tr>
    </thead>
    <tbody>
      
    {
                 alltoys.map(toy => <Toytable
                 key={toy._id}
                 toy = {toy}
                 ></Toytable>)
         }
     
    </tbody>
  </table>
</div>
         
    
                </div>
        );
};

export default Alltoy;