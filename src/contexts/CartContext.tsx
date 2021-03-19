import { useRouter } from 'next/dist/client/router';
import { createContext, ReactNode, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import FinishModal from '../components/FinishModal';
import { api } from '../services/api';
import { formatPrice } from '../util/format';

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
  subtotal: number;
  priceFormatted: number;
}

interface CartContextData {
  cartProducts: Product[];
  fretePrice: number;
  total: string;
  addProduct: (id: number) => Promise<void>;
  updateAmount: (id: number, newAmount: number) => Promise<void>;
  removeFromCart: (id: number) => Promise<void>;
  openFinishModal: () => void;
  closeFinishModal: () => void;
  setNumberFretePrice: (frete: string) => Promise<void>;
}

export const CartContext = createContext({} as CartContextData);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [isFinishModalOpen, setIsFinishModalOpen] = useState(false);
  const [fretePrice, setFretePrice] = useState(0);

  const Router = useRouter();

  const updateAmount = async (id: number, newAmount: number) => {
    if (newAmount <= 0) return;
    const stock = await api.get(`stock/${id}`);

    const stockAmount = stock.data.amount;

    if (newAmount > stockAmount) {
      toast.error('Quantidade solicitada fora de estoque');
      return;
    }

    const productIndex = cartProducts.findIndex((product) => product.id === id);

    const newCart = [...cartProducts];

    newCart[productIndex].amount = newAmount;

    newCart[productIndex].subtotal = formatPrice(
      newCart[productIndex].price * newCart[productIndex].amount
    );

    setCartProducts(newCart);
  };

  const addProduct = async (id: number) => {
    const productExists = cartProducts.find((product) => product.id === id);

    const stock = await api.get(`stock/${id}`);

    const stockAmount = stock.data.amount;

    const currentAmount = productExists ? productExists.amount : 0;

    const newAmount = currentAmount + 1;

    if (newAmount > stockAmount) {
      toast.error('Quantidade solicitada fora de estoque');
      return;
    }

    if (productExists) {
      updateAmount(id, newAmount);
    } else {
      const response = await api.get(`products/${id}`);

      const data = {
        ...response.data,
        amount: 1,
        subtotal: formatPrice(response.data.price * 1),
        priceFormatted: formatPrice(response.data.price)
      };

      setCartProducts([...cartProducts, data]);
      Router.push('cart');
    }
  };

  const removeFromCart = async (id: number) => {
    const productIndex = cartProducts.findIndex((product) => product.id === id);

    if (productIndex >= 0) {
      const newCart = [...cartProducts];

      newCart.splice(productIndex, 1);

      setCartProducts(newCart);

      if (!newCart.length) {
        setFretePrice(0);
      }
    }
  };

  const openFinishModal = () => {
    setIsFinishModalOpen(true);
  };

  const closeFinishModal = async () => {
    await Router.push('/');
    setIsFinishModalOpen(false);
    setCartProducts([]);
  };

  const setNumberFretePrice = async (frete: string) => {
    const [reais, centavos] = frete.split(',');

    const fretePriceFormatted = Number(reais) + Number(centavos) / 100;

    setFretePrice(fretePriceFormatted);
  };

  const total = useMemo(() => {
    const newTotal = cartProducts.reduce((acumulator, product) => {
      return acumulator + product.price * product.amount;
    }, 0);

    const TotalFrete = newTotal + fretePrice;

    return formatPrice(TotalFrete);
  }, [cartProducts, fretePrice]);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        fretePrice,
        addProduct,
        updateAmount,
        removeFromCart,
        openFinishModal,
        closeFinishModal,
        setNumberFretePrice,
        total
      }}
    >
      {children}

      {isFinishModalOpen && <FinishModal />}
    </CartContext.Provider>
  );
};
