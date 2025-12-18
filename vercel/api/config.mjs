// Netlify Serverless Function para exponer variables de entorno
export default async (req, context) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  if (req.method === 'OPTIONS') {
    return new Response('', { status: 200, headers });
  }

  // Retornar las variables públicas
  const response = {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers,
  });
};
