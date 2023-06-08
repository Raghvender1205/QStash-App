import { verifySignature } from '@upstash/qstash/nextjs';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('Signature has already been verified');
    res.status(200).end();
}

export default verifySignature(handler);
export const config = {
    api: {
        bodyParser: false,
    }
}