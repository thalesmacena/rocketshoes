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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(stock);
}
