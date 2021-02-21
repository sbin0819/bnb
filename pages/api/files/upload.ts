import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const form = new formidable.IncomingForm();
      console.log('form', form);
      form.parse(req, async (err, fields, files) => {
        console.log(files);
      });
    } catch (e) {
      console.log(e);
      res.end();
    }
  }
  res.statusCode = 404;

  return res.end();
};
