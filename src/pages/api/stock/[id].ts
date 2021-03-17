import type { NextApiRequest, NextApiResponse } from 'next';

const stock = [
  {
    id: 1,
    amount: 3
  },
  {
    id: 2,
    amount: 5
  },
  {
    id: 3,
    amount: 2
  },
  {
    id: 4,
    amount: 1
  },
  {
    id: 5,
    amount: 5
  },
  {
    id: 6,
    amount: 10
  }
];

export default function productsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  return res.json(stock[Number(id) - 1]);
}
