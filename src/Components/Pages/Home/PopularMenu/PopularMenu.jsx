import { useEffect, useState } from "react";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popular = data.filter((item) => item.category === "popular");
        setMenu(popular);
      });
  }, []);
  return (
    <section className="mt-28">
      <SectionTitle
        heading={"Check it out"}
        subHeading={"From our menu"}
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-10">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="mt-14 flex justify-center">
        <button className="btn btn-outline border-0 border-b-4 uppercase ">
          View full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
