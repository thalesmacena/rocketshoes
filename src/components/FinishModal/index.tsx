import { useContext, useMemo } from 'react';
import { MdCheckCircle } from 'react-icons/md';
import { CartContext } from '../../contexts/CartContext';
import { Container, Overlay } from './styles';

const FinishModal = () => {
  const { cartProducts, closeFinishModal } = useContext(CartContext);

  const quantity = useMemo(() => {
    const newTotal = cartProducts.reduce((acumulator, product) => {
      return acumulator + product.amount;
    }, 0);

    return newTotal;
  }, [cartProducts]);

  return (
    <Overlay>
      <Container>
        <header>
          <img src="/logo-dark.svg" alt="RocketShoes" />
        </header>
        <strong>Parabéns</strong>
        <p>Você acaba de adiquirir {quantity} novo(s) produto(s)!</p>
        <button type="button" onClick={closeFinishModal}>
          <MdCheckCircle size={36} color="#000" />
        </button>
      </Container>
    </Overlay>
  );
};

export default FinishModal;
