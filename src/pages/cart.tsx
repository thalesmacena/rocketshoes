import Head from 'next/head';
import { useContext, useMemo } from 'react';
import {
  MdAddCircleOutline,
  MdDelete,
  MdRemoveCircleOutline
} from 'react-icons/md';
import ShippingInput from '../components/ShippingInput';
import { CartContext, Product } from '../contexts/CartContext';
import { Container, ProductTable, Total } from '../styles/pages/Cart';

const Cart = () => {
  const {
    cartProducts,
    updateAmount,
    removeFromCart,
    total,
    openFinishModal
  } = useContext(CartContext);
  const isEmpty = useMemo(() => {
    const empty = !cartProducts.length;

    return empty;
  }, [cartProducts]);

  const increment = (product: Product) => {
    updateAmount(product.id, product.amount + 1);
  };

  const decrement = (product: Product) => {
    updateAmount(product.id, product.amount - 1);
  };

  return (
    <>
      <Head>
        <title>Rocketshoes | Carrinho</title>
      </Head>
      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>PRODUTO</th>
              <th>QUANTIDADE</th>
              <th>SUBTOTAL</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt={product.title} />
                </td>
                <td>
                  <strong>{product.title}</strong>
                  <span>{product.priceFormatted}</span>
                </td>
                <td>
                  <div>
                    <button type="button" onClick={() => decrement(product)}>
                      <MdRemoveCircleOutline size={20} color="#7159c1" />
                    </button>
                    <input type="number" readOnly value={product.amount} />
                    <button type="button" onClick={() => increment(product)}>
                      <MdAddCircleOutline size={20} color="#7159c1" />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>{product.subtotal}</strong>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => removeFromCart(product.id)}
                  >
                    <MdDelete size={20} color="#7159c1" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>

        {!isEmpty && <ShippingInput />}

        <footer>
          <button
            type="button"
            disabled={isEmpty}
            onClick={() => openFinishModal()}
          >
            Finalizar pedido
          </button>
          <Total>
            <span>Total</span>
            <strong>{total}</strong>
          </Total>
        </footer>
      </Container>
    </>
  );
};

export default Cart;
