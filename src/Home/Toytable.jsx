 import { Link } from 'react-router-dom';

const Toytable = ({toy}) => {
        const {seller, name, price,qty,category,_id} = toy;
        return (

             <>
            
             
       <tr>
        <td>{seller}</td>
        <td>{name}</td>
        <td>{category}</td>
        <td>$ {price} USD</td>
        <td>{qty}</td>
        <td> 
                <Link to = {`/details/${_id}`}> 
        <button className="btn btn-outline btn-secondary">View Details</button>
                </Link>
        </td>
      </tr>
             </>   
                 
    
   
 
                
        );
};

export default Toytable;