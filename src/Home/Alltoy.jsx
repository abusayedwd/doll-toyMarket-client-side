import { useLoaderData } from "react-router-dom";
import Toytable from "./Toytable";
import { useEffect, useState } from "react";

 

const Alltoy = () => {
        const alltoys = useLoaderData();
        const [searchText, setSearchText] = useState("");
        const [toys, setToys] = useState('')

          // useEffect(() => {
          //   fetch('http://localhost:5000/alltoys')
          //   .then(res => res.json())
          //   .then(data =>  console.log(data))
          // },[])

         
        const handleSearch = () => {
          fetch(
            `http://localhost:5000/alltoys/${searchText}`
          )
            .then((res) => res.json())
            .then((data) => {
              setToys(data);
            });
        };

        return (
                <div>
                        <h1 className="text-2xl font-bold text-center my-6">All Toys: {alltoys.length}</h1>

                        <input
          onChange={(e) => setSearchText(e.target.value)}
          onKeyUp={handleSearch}
          type="text"
          placeholder="Search here"
          className="input input-bordered input-primary w-full max-w-xs text-center"
        />

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