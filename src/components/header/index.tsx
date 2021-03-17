import Link from 'next/link';
import { useContext, useMemo } from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { CartContext } from '../../contexts/CartContext';
import { Cart, Container, Logo } from './styles';

const Header = () => {
  const { cartProducts } = useContext(CartContext);
  const size = useMemo(() => cartProducts.length, [cartProducts]);
  return (
    <Container>
      <Link href="/">
        <Logo src="/logo-light.svg" alt="RocketShoes" />
      </Link>

      <Link href="/cart">
        <Cart>
          <div>
            <strong>Meu carrinho</strong>
            <span>{size} itens</span>
          </div>
          <MdShoppingBasket size={36} color="#fff" />
        </Cart>
      </Link>
    </Container>
  );
};

export default Header;
