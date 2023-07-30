import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { useContext } from "react";

import { CartDropdownContext } from "../../contexts/cart-dropdown.context";

// import "./products-card.styles.scss";

import {
  ProductCardContainer,
  Footer,
  ProductName,
  ProductPrice,
} from "./products-card.styles";

function ProductCard({ product }) {
  const { name, price, id, imageUrl } = product;
  const { addItemToCart } = useContext(CartDropdownContext);

  function addProductToCart() {
    addItemToCart(product);
  }

  return (
    <ProductCardContainer key={id}>
      <img src={imageUrl} alt={name} />
      <Footer>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        ADD TO CART
      </Button>
    </ProductCardContainer>
  );
}

export default ProductCard;
