 
import { useLoaderData } from 'react-router-dom';

const Detailstoy = () => {
        const singletoy = useLoaderData()

        const {category, name,seller, description, email, image,price, qty, rating} = singletoy;
        return (
                <div className='my-12'>
                    <h1 className='text-2xl text-stone-400 font-bold text-center'>Toy Name : {name}</h1>  

                    <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className='h-72 w-96' src= {image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">Seller Name: {seller}</h2>
    <p>Seller mail: {email}</p>
    <p>Category: {category}</p>
    <p>Price: {price}</p>
    <p>Quantity: {qty}</p>
    <p>Ratings: {rating}</p>
    <p>Description: {description}</p>

     
  </div>
</div>
                </div>
        );
};

export default Detailstoy;