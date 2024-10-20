// pages/api/contact/index.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
      jwt.verify(token, SECRET_KEY);
      // Fetch contacts from the database and return them
      const contacts: never[] = []; // Fetch from your database
      return res.status(200).json({ contacts });
    } catch (error) {
      return res.status(403).json({ message: 'Invalid token' });
    }
  }

  res.setHeader('Allow', ['GET']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
};

export default handler;
