const MenuCard = ({menu}) => {
    const{name,image,recipe}=menu;
  return (
    <div className="card w-96 bg-base-100 shadow-xl font-inter">
      <figure>
        <img
          src={image}
          alt=""
        />
      </figure>
      <div className="card-body text-center font-inter">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-[#151515] text-base">{recipe}</p>
        <div className="card-actions justify-center mt-5">
          <button className="uppercase bg-[#E8E8E8] rounded-md font-bold text-[#BB8506] border-b-2 border-[#BB8506] p-4 hover:border-none hover:bg-[#1F2937] transition duration-300">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
