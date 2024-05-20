import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import orderCover from "../../../../assets/shop/banner2.jpg";
import Cover from "../../../Shared/Cover/Cover";
// import "react-tabs/style/react-tabs.css";
import useMenu from "../../../../hooks/UseMenu";
// import FoodCard from "../../../FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories=['salad','pizza','soup','dessert','drinks'] 
  const {category}=useParams();
  const initialIndex= categories.indexOf(category)
  const [tabIndex,setTabIndex]=useState(initialIndex)
  console.log(tabIndex)
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>
      <Cover title={"order food"} img={orderCover}></Cover>
      <div className="mt-28">
        <Tabs defaultIndex={tabIndex} onSelect={(index)=>setTabIndex(index)}>
          <TabList className="flex justify-center gap-7">
            <Tab className={tabIndex == 0 ? 'text-[#BB8506]  border-b-2 font-semibold border-[#BB8506] text-2xl cursor-pointer' 
            :'text-[#BB8506] font-semibold  text-2xl cursor-pointer'}>Salad</Tab>
            <Tab className={tabIndex == 1 ? 'text-[#BB8506]  border-b-2 font-semibold border-[#BB8506] text-2xl cursor-pointer' :'text-[#BB8506] font-semibold  text-2xl cursor-pointer'}>Pizza</Tab>
            <Tab className={tabIndex == 2 ? 'text-[#BB8506]  border-b-2 font-semibold border-[#BB8506] text-2xl cursor-pointer' :'text-[#BB8506] font-semibold  text-2xl cursor-pointer'}>Soup</Tab>
            <Tab className={tabIndex == 3 ? 'text-[#BB8506]  border-b-2 font-semibold border-[#BB8506] text-2xl cursor-pointer' :'text-[#BB8506] font-semibold  text-2xl cursor-pointer'}>Dessert</Tab>
            <Tab className={tabIndex == 4 ? 'text-[#BB8506]  border-b-2 font-semibold border-[#BB8506] text-2xl cursor-pointer' :'text-[#BB8506] font-semibold  text-2xl cursor-pointer'}>Drinks</Tab>
          </TabList>

          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
          <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
          <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
          <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
          <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
