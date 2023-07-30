import ProductCard from "../products-card/products-card.component";

import "./category-preview.styles.scss";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";

//* EACH PRODCUTS, 4 ITEMS PREVIEW

function CategoryPreview({ title, products }) {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>

      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
}

export default CategoryPreview;
