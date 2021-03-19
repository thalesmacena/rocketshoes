import { useContext, useMemo, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { api } from '../../services/api';
import { formatPrice } from '../../util/format';
import {
  ContainerInput,
  ContainerShipping,
  ContainerTotalShipping,
  DisableButton,
  LoadingCircle,
  ProgressBar
} from './styles';

const ShippingInput = () => {
  const { setNumberShippingPrice, shippingPrice } = useContext(CartContext);

  const [newCep, setNewCep] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const progress = useMemo(() => {
    const newProgress = 100 - (10 - newCep.length) / 0.1;
    const finalProgress =
      newCep.length >= 6 ? newProgress - 11.11 : newProgress;
    return finalProgress;
  }, [newCep]);

  const shipping = useMemo(() => {
    return formatPrice(shippingPrice);
  }, [shippingPrice]);

  const isInputNotFilled = useMemo(() => {
    const empty = newCep.length !== 9;
    return empty;
  }, [newCep]);

  const handleInputChange = (value: string) => {
    setError(false);
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

    setIsLoading(true);

    try {
      const response = await api.get(`shipping?cep=${cep}`);
      if (response.data[0].Erro.length) {
        throw new Error();
      }

      const { Valor } = response.data[0];

      setNumberShippingPrice(Valor);
      setNewCep('');
    } catch {
      setNewCep('');
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContainerShipping>
      <ContainerInput>
        <input
          value={newCep}
          placeholder="_____-___"
          onChange={(e) => handleInputChange(e.target.value)}
        />

        {error ? (
          <DisableButton type="button" disabled>
            Frente indisponivel
          </DisableButton>
        ) : (
          <button
            disabled={isInputNotFilled}
            type="button"
            onClick={() => handleCalculePrice()}
          >
            {isLoading ? (
              <LoadingCircle size={13} color="white" />
            ) : (
              'Calcular Frete'
            )}
          </button>
        )}

        <ProgressBar width={progress} />
      </ContainerInput>

      <ContainerTotalShipping>
        <span>Frete</span>
        <strong>{shipping}</strong>
      </ContainerTotalShipping>
    </ContainerShipping>
  );
};

export default ShippingInput;
