/* eslint-disable no-nested-ternary */
import { useContext, useMemo, useState } from 'react';
import { MdCheckCircle } from 'react-icons/md';
import { CartContext } from '../../contexts/CartContext';
import { Container, Overlay } from './styles';

const FinishModal = () => {
  const { cartProducts, closeFinishModal } = useContext(CartContext);
  const [isAnimate, setIsAnimate] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const quantity = useMemo(() => {
    const newTotal = cartProducts.reduce((acumulator, product) => {
      return acumulator + product.amount;
    }, 0);

    return newTotal;
  }, [cartProducts]);

  const handleAnimate = () => {
    setIsAnimate(true);
  };

  const handleAnimateEnd = () => {
    closeFinishModal();
  };

  const onHover = () => {
    setIsHover(true);
  };

  const onLeave = () => {
    setIsHover(false);
  };

  return (
    <Overlay>
      <Container>
        <header>
          <img src="/logo-dark.svg" alt="RocketShoes" />
        </header>
        <strong>Parabéns</strong>
        <p>Você acaba de adiquirir {quantity} novo(s) produto(s)!</p>
        <button
          type="button"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          onClick={() => handleAnimate()}
          onAnimationEnd={() => handleAnimateEnd()}
          className={isAnimate ? 'animate' : isHover ? 'hover' : ''}
        >
          <MdCheckCircle size={36} color={isHover ? '#000' : '#191a20'} />
        </button>
      </Container>
    </Overlay>
  );
};

export default FinishModal;
