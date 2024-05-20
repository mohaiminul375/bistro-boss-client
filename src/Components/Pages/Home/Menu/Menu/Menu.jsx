import { Helmet } from "react-helmet-async";
import Cover from "../../../../Shared/Cover/Cover";
import menuImg from "../../../../../assets/menu/banner3.jpg";
import dessertImg from "../../../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../../../hooks/UseMenu";
import SectionTitle from "../../../../SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
// import PopularMenu from "../../PopularMenu/PopularMenu";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover title={"Our Menu"} img={menuImg}></Cover>
      {/* main cover */}
      <div className="mt-28">
        <SectionTitle heading={"don't miss"} subHeading={"today's offer"}>
          {" "}
        </SectionTitle>
        {/* offer menu */}
        <MenuCategory items={offered}></MenuCategory>
      </div>
      {/* dessert */}
      <div className="mt-28">
        <MenuCategory
          items={dessert}
          title={"Dessert"}
          coverImg={dessertImg}
        ></MenuCategory>
      </div>
      {/* pizza */}
      <div className="mt-28">
        <MenuCategory
          items={pizza}
          title={"pizza"}
          coverImg={pizzaImg}
        ></MenuCategory>
      </div>
      {/* salad*/}
      <div className="mt-28">
        <MenuCategory
          items={salad}
          title={"salad"}
          coverImg={saladImg}
        ></MenuCategory>
      </div>
      {/* soup */}
      <div className="mt-28">
        <MenuCategory
          items={soup}
          title={"soup"}
          coverImg={soupImg}
        ></MenuCategory>
      </div>

      {/* 
      <MenuCategory items={dessert} coverImg={dessertImg} title={'dessert'}></MenuCategory> */}
    </div>
  );
};

export default Menu;
