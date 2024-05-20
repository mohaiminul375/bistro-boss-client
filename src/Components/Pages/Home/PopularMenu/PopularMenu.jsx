// import { useEffect, useState } from "react";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../../hooks/UseMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mt-28">
      <SectionTitle
        heading={"Check it out"}
        subHeading={"From our menu"}
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-10">
        {popular.map((item) => (
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
