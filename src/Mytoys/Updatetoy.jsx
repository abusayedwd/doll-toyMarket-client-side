import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

 
const Updatetoy = () => {
        const updatetoy = useLoaderData();
        
        const {description,qty, price, name, _id} = updatetoy;
        const handleUpdateToy = (e) => {
                e.preventDefault();
                const form = e.target;
                const qty = form.qty.value;
                const price = form.price.value;
                const description = form.description.value;
                 const name = form.name.value;
            
                const  updateToy = {
                  name,
                  price,
                  qty,
                  description,
                  
                };
                console.log( updateToy);
                fetch(`https://doll-toy-server-a11.vercel.app/addtoys/${_id}`, {
                  method: "PUT",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify( updateToy),
                })
                  .then((res) => res.json())
                  .then((result) => {
                       
                    if (result.modifiedCount) {
                      Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Product added successfully!!",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                      form.reset();
                    } else {
                      Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Ops!! There is an error. Try again",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                    }
                  });
              };
              return (
                <div>
                  <div className="w-full px-4 lg:px-8 lg:w-2/3 bg-slate-100 mx-auto p-10 rounded-lg my-6 ">
                    <h1 className="text-3xl font-bold text-[#ff6899] mb-6">Update Toy : {name}</h1>
                    <form onSubmit={handleUpdateToy}>
                      <div >
                         
                      <label className="label">
                 <span className="label-text">Price:</span>
                    </label>
                        <input
                        defaultValue={price}
                          type="number" 
                          name="price"
                          className="border py-2 px-4 rounded-md w-full"
                          required
                        />

               <label className="label">
                 <span className="label-text">Quantity :</span>
               </label>
                        <input
                         defaultValue={qty}
                          type="number"
                          placeholder="Quantity"
                          name="qty"
                          className="border py-2 px-4 rounded-md w-full"
                          required
                        />
                         
                      </div>
                      <label className="label">
                 <span className="label-text">Description :</span>
               </label>
                      <textarea
                       defaultValue={description}
                        className="textarea border py-2 px-4 rounded-md w-full my-4"
                        name="description"
                        placeholder="Description"
                      ></textarea>
                      <input
                        type="submit"
                        className="btn hover:bg-[#2EBFED] hover:border-[#2EBFED] border-[#ff6899] bg-[#ff6899] w-full"
                        value="Update Toy"
                      />
                    </form>
                  </div>
                </div>
              );
};

export default Updatetoy;