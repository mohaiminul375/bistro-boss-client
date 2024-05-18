import { useEffect, useState } from "react";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import MenuCard from "./MenuCard";

const ChefRecommends = () => {
    const [menus,setMenus]=useState([]);
    useEffect(()=>{
       fetch('/menu.json')
       .then(res=>res.json())
       .then(data=>{
        setMenus(data.slice(0,3))
       })
    },[])
  return (
    <div className="mt-28">
      <SectionTitle
        heading={"Should Try"}
        subHeading={"chef recommends"}
      ></SectionTitle>
      <div className="grid md:grid-cols-3 gap-6">
        {
            menus.map(menu=><MenuCard key={menu._id} menu={menu}></MenuCard>)
        }
      </div>
    </div>
  );
};

export default ChefRecommends;
