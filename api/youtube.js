export default function handler(req, res) {
  // Устанавливаем CORS заголовки
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', 'https://songreveal-fbc6c.web.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Обработка preflight запросов
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Для отладки выводим информацию о запросе и окружении
  console.log('=== API Request Debug Info ===');
  console.log('Request origin:', req.headers.origin);
  console.log('Request headers:', req.headers);
  console.log('Environment:', process.env.NODE_ENV);
  console.log('All environment variables:', Object.keys(process.env));
  console.log('YouTube API key exists:', !!process.env.youtube_api_key);
  console.log('YouTube API key length:', process.env.youtube_api_key ? process.env.youtube_api_key.length : 0);
  console.log('============================');

  if (!process.env.youtube_api_key) {
    console.log('YouTube API key is not set in environment variables');
    return res.status(500).json({ 
      error: 'YouTube API key is not configured',
      details: 'Please check environment variables in Vercel',
      debug: {
        env: process.env.NODE_ENV,
        allVars: Object.keys(process.env)
      }
    });
  }

  // Возвращаем API ключ из переменных окружения
  res.status(200).json({ 
    apiKey: process.env.youtube_api_key,
    status: 'success',
    debug: {
      env: process.env.NODE_ENV,
      keyLength: process.env.youtube_api_key.length
    }
  });
} 