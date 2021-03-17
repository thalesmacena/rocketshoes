import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { CartContext, Product } from '../contexts/CartContext';
import { api } from '../services/api';
import { ProductList } from '../styles/pages/Home';
import { formatPrice } from '../util/format';

interface HomeProps {
  products: Product[];
}

const Home = ({ products }: HomeProps) => {
  const { cartProducts, addProduct } = useContext(CartContext);
  const [amount, setAmount] = useState({});

  useEffect(() => {
    const newAmount = cartProducts.reduce((amounts, product) => {
      // eslint-disable-next-line no-param-reassign
      amounts[product.id] = product.amount;

      return amounts;
    }, {});

    setAmount(newAmount);
  }, [cartProducts]);

  const handleAddProduct = (id: number) => {
    addProduct(id);
  };

  return (
    <>
      <Head>
        <title>Rocketshoes | Inicio</title>
      </Head>
      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>
            <button type="button" onClick={() => handleAddProduct(product.id)}>
              <div>
                <MdAddShoppingCart size={16} color="#fff" />
                {amount[product.id] || 0}
              </div>

              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get('products');

  const data = response.data.map((product: Product) => ({
    ...product,
    priceFormatted: formatPrice(product.price)
  }));

  return {
    props: {
      products: data
    }
  };
};
