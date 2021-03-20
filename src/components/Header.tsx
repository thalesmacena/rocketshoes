import Link from 'next/link';
import { useContext, useMemo } from 'react';
import {
  MdBrightnessHigh,
  MdBrightnessLow,
  MdShoppingBasket
} from 'react-icons/md';
import { CartContext } from '../contexts/CartContext';
import { ThemeContext } from '../contexts/ThemeContext';
import {
  Cart,
  Container,
  Logo,
  RightContainer
} from '../styles/components/Header';

const Header = () => {
  const { cartProducts } = useContext(CartContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const size = useMemo(() => cartProducts.length, [cartProducts]);

  return (
    <Container>
      <Link href="/">
        <Logo src="/logo-light.svg" alt="RocketShoes" />
      </Link>

      <RightContainer>
        <Link href="/cart">
          <Cart>
            <div>
              <strong>Meu carrinho</strong>
              <span>{size} itens</span>
            </div>
            <MdShoppingBasket size={36} color="#fff" />
          </Cart>
        </Link>
        {theme === 'dark' ? (
          <MdBrightnessLow
            size={24}
            color="#fff"
            onClick={() => toggleTheme()}
          />
        ) : (
          <MdBrightnessHigh
            size={24}
            color="#fff"
            onClick={() => toggleTheme()}
          />
        )}
      </RightContainer>
    </Container>
  );
};

export default Header;
