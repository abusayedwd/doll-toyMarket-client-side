import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt,  } from "react-icons/fa";

 
const Mytoyraw = ({mytoy, handleDelete}) => {
        const {seller, name, price,qty,image,_id}=mytoy;
     
       
 
 return (
             
             
      <tr >
         
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src= {image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
               
            </div>
          </div>
        </td>
        <td>
                {seller}
        </td>
        <td>
          $ {price} USD
        </td>
        <td>{qty}</td>
        <td className="flex">
              
                <Link  className="mr-8"><FaEdit></FaEdit></Link>
                <Link  onClick={() => handleDelete(_id)}><FaTrashAlt></FaTrashAlt></Link>
        </td>
         
      </tr>    
             
        );
};

export default Mytoyraw;