import { Link } from 'react-router-dom';

const ProductsCard = ({item}) => {
        const {name, image, price, rating, qty,_id} = item;
        return (
               
                 <div className="card card-compact bg-base-100 shadow-xl">
   <img className="h-60" src={image} alt="Shoes" /> 
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Stock: {qty}</p>
    <p>Rating: {rating}</p>
    <p>Price: ${price}</p>
    <div className="card-actions justify-end">
    <Link to = {`/details/${_id}`}> 
      <button className="btn btn-primary">Buy Now</button>
      </Link>
    </div>
  </div>
</div>
               
        );
};

export default ProductsCard;