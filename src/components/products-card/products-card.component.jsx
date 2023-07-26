import Button from "../button/button.component";

import { useContext } from "react";

import { CartDropdownContext } from "../../contexts/cart-dropdown.context";

import "./products-card.styles.scss";

function ProductCard({ product }) {
  const { name, price, id, imageUrl } = product;
  const { addItemToCart } = useContext(CartDropdownContext);

  function addProductToCart() {
    addItemToCart(product);
  }

  return (
    <div className="product-card-container" key={id}>
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        ADD TO CART
      </Button>
    </div>
  );
}

export default ProductCard;
