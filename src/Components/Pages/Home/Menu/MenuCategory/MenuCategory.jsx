// import React from 'react';

import { Link } from "react-router-dom";
import Cover from "../../../../Shared/Cover/Cover";
import MenuItem from "../../../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ title, items, coverImg }) => {
  return (
    <div>
      {title && <Cover title={title} img={coverImg}></Cover>}
      <div className="grid grid-cols-2 gap-10 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="mt-14 flex justify-center">
        <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 uppercase ">
        ORDER YOUR favorite FOOD
        </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
