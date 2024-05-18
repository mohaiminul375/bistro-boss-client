const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-4">
      <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
      <div>
        <div className="flex justify-between items-center">
        <h3 className="uppercase font-cinzel text-xl">{name} ----------</h3>
        <p className="text-[#D99904] text-xl inter">${price}</p>
        </div>
        <p className="text-base text-[#737373]">{recipe}</p>
       
      </div>
    </div>
  );
};

export default MenuItem;
