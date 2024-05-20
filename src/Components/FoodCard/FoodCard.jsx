const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl font-inter">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
        <p className="bg-slate-900 text-white font-bold rounded-md mr-4 mt-4 absolute right-0 p-1">${price}</p>
      <div className="card-body text-center">
        <h2 className="font-semibold text-xl">{name}</h2>
        <p className="text-[#737373]">{recipe}</p>
        <div className="card-actions justify-center mt-5">
        <button className="uppercase bg-[#E8E8E8] rounded-md font-bold text-[#BB8506] border-b-2 border-[#BB8506] p-4 hover:border-none hover:bg-[#1F2937] transition duration-300">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
