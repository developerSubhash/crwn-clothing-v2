import {
  CartItemContainer,
  Image,
  ItemDetails,
  Name,
  Price,
} from "./cart-item.styles";

function CartItem({ cartItem }) {
  const { name, quantity, price, imageUrl } = cartItem;

  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>
          {quantity} X ${price}
        </Price>
      </ItemDetails>
    </CartItemContainer>
  );
}

export default CartItem;
