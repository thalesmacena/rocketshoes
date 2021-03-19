import type { NextApiRequest, NextApiResponse } from 'next';
import Correios from 'node-correios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res
      .status(400)
      .json({ error: 'This route only accepts GET methods' });
  }

  const { cep } = req.query;

  if (!cep) {
    return res
      .status(400)
      .json({ error: 'You need to include a mandatory query' });
  }

  const correios = new Correios();

  const args = {
    nCdServico: '04014',
    sCepOrigem: cep,
    sCepDestino: '21941909',
    nVlPeso: '2',
    nCdFormato: '1',
    nVlComprimento: 20,
    nVlLargura: 30,
    nVlAltura: 10
  };

  const frete = await correios.calcPreco(args);

  return res.status(200).json(frete);
}
