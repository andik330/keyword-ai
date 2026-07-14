export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();
  
  const { keyword } = req.body;
  const hasil = [`${keyword} murah`, `${keyword} terbaik`, `jual ${keyword}`];
  return res.status(200).json({ keywords: hasil });
    }
