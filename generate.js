export default async function handler(req, res) {
  // KODE CORS - BIAR NETLIFY BISA AKSES
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { keyword } = req.body;
    
    // HASIL DUMMY BUAT NGETES DULU
    const hasil = [
      `${keyword} murah`,
      `${keyword} terbaik 2026`,
      `jual ${keyword} online`,
      `harga ${keyword}`,
      `${keyword} ori`
    ];

    return res.status(200).json({ keywords: hasil });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
        }
