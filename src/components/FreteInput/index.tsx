import { useContext, useMemo, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { api } from '../../services/api';
import { ContainerFrete, ContainerTotalFrete } from './styles';

const FreteInput = () => {
  const { cartProducts, setNumberFretePrice } = useContext(CartContext);

  const [newCep, setNewCep] = useState('');
  const [fretePrice, setFretePrice] = useState('R$ 0,00');

  const isCartEmpty = useMemo(() => {
    const empty = !cartProducts.length;
    return empty;
  }, [cartProducts]);

  const isInputNotFilled = useMemo(() => {
    const empty = newCep.length !== 9;
    return empty;
  }, [newCep]);

  const handleInputChange = (value: string) => {
    const aux =
      value.length === 5 && value.length > newCep.length ? `${value}-` : value;

    if (
      /^[0-9]{0,5}$/.test(aux) ||
      /^[0-9]{5}[-]$/.test(aux) ||
      /^[0-9]{5}[-][0-9]{1,3}$/.test(aux)
    ) {
      setNewCep(aux);
    }
  };

  const handleCalculePrice = async () => {
    const cep = newCep.replace('-', '');

    const response = await api.get(`frete?cep=${cep}`);

    const { Valor } = response.data[0];

    setNumberFretePrice(Valor);
    setFretePrice(`R$: ${Valor}`);
    setNewCep('');
  };

  return (
    <ContainerFrete>
      <div>
        <input
          value={newCep}
          disabled={isCartEmpty}
          placeholder="_____-___"
          onChange={(e) => handleInputChange(e.target.value)}
        />

        <button
          disabled={isInputNotFilled}
          type="button"
          onClick={() => handleCalculePrice()}
        >
          Calcular Frete
        </button>
      </div>

      <ContainerTotalFrete>
        <span>Total</span>
        <strong>{fretePrice}</strong>
      </ContainerTotalFrete>
    </ContainerFrete>
  );
};

export default FreteInput;
