import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const [,refetch]=useCart();
  const axiosSecure=useAxiosSecure();
  const { _id, name, image, price, recipe } = item;
  const handleAddToCart = async(item) => {
    console.log("add to cart", item);
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
     const {data}=await axiosSecure.post("/carts", cartItem);
     console.log('axios post',data)
     if(data.insertedId){
   
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
      //refetch tan stack query
      refetch()
     }
      //
    } else {
      Swal.fire({
        title: "You are not logged In",
        text: "Please login to add to cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl font-inter">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-900 text-white font-bold rounded-md mr-4 mt-4 absolute right-0 p-1">
        ${price}
      </p>
      <div className="card-body text-center">
        <h2 className="font-semibold text-xl">{name}</h2>
        <p className="text-[#737373]">{recipe}</p>
        <div className="card-actions justify-center mt-5">
          <button
            onClick={() => handleAddToCart(item)}
            className="uppercase bg-[#E8E8E8] rounded-md font-bold text-[#BB8506] border-b-2 border-[#BB8506] p-4 hover:border-none hover:bg-[#1F2937] transition duration-300"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
