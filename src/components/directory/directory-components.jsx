import React from "react";
import { categories } from "../../util/constants";
import "./directory-component.style.scss";
import CategoryItem from "../category-item/category-item.component";

const Directory = () => {


  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
