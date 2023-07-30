import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import ProductCard from "../../components/products-card/products-card.component";

import "./category.styles.scss";

//* DISPLAY FULL LIST OF AVAILABLE PRODUCTS.

function Category() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(
    function () {
      setProducts(categoriesMap[category]);
    },
    [categoriesMap, category]
  );

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((item) => <ProductCard product={item} key={item.id} />)}
      </div>
    </>
  );
}

export default Category;
