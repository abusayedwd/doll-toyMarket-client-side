import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Mytoyraw from "./Mytoyraw";
import Swal from "sweetalert2";

 
const Mytoy = () => {
        const {user} = useContext(AuthContext)
        const [mytoys, setMytoy] = useState([])

        const url = `https://doll-toy-server-a11.vercel.app/addtoys?email=${user?.email}`

                useEffect( () => {
                        fetch(url)
                        .then(res => res.json())
                        .then(data => setMytoy(data))
                // eslint-disable-next-line react-hooks/exhaustive-deps
                },[])

               
const handleDelete = id => { 
        Swal.fire({
                title: 'Are you sure?',
                text: "You won't be delete this?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
if (result.isConfirmed) {
        fetch(`https://doll-toy-server-a11.vercel.app/addtoys/${id}`, {
                method: 'delete',
        })
        .then(res => res.json())
        .then(data => {
        if(data.deletedCount > 0){

                Swal.fire(
                        'Deleted!',
                        'Your toy has been deleted.',
                        'success' 
                )
           const remaining = mytoys.filter(mytoy => mytoy._id !== id);  
           setMytoy(remaining)   
        }
       })
   }
}) 
}


        return (
                <div>
                        <h1 className="text-2xl text-orange-300 text-center my-8 font-bold">My Toy : {mytoys.length} </h1>

                        <div className="overflow-x-auto w-full mb-16">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
         
        <th>Product</th>
        <th>Seller</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
          
          {
                mytoys.map(mytoy => <Mytoyraw
                key={mytoy._id}
                mytoy = {mytoy}
                handleDelete = {handleDelete}
                ></Mytoyraw> )
          }

    </tbody> 
  </table>
</div> 
                </div>
        );
};

export default Mytoy;