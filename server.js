// API-MARC - Serveur Local Complet
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware de logging
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log([+timestamp+] +req.method+ +req.path);
  next();
});

// Page d'accueil avec documentation
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: " API-MARC - Serveur Local Opérationnel",
    version: "1.6.3-local",
    date: new Date().toLocaleString(),
    server: {
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      platform: process.platform
    },
    endpoints: {
      documentation: "/",
      status: "/status",
      health: "/health",
      sites: {
        xnxx: {
          random: "/xnxx/random",
          search: "/xnxx/search?key=terme&page=0"
        },
        pornhub: {
          random: "/pornhub/random", 
          search: "/pornhub/search?key=terme&page=0"
        },
        xvideos: {
          random: "/xvideos/random",
          search: "/xvideos/search?key=terme&page=0"
        }
      }
    },
    usage: {
      examples: [
        "GET http://localhost:"+PORT+"/",
        "GET http://localhost:"+PORT+"/xnxx/search?key=test",
        "GET http://localhost:"+PORT+"/pornhub/random"
      ]
    }
  });
});

// Status de l'API
app.get('/status', (req, res) => {
  res.json({
    success: true,
    status: "online",
    timestamp: new Date().toISOString(),
    uptime: Math.floor(process.uptime()),
    memory: {
      used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024) + " MB",
      total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024) + " MB"
    },
    version: "1.6.3-local"
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({
    success: true,
    health: "healthy",
    timestamp: new Date().toISOString()
  });
});

// === XNXX Endpoints ===
app.get('/xnxx/random', (req, res) => {
  // Simulation de données XNXX
  const mockData = {
    id: "xnxx-random-" + Math.floor(Math.random() * 10000),
    title: "Sample XNXX Video " + Math.floor(Math.random() * 100),
    link: "https://xnxx.com/sample-video",
    duration: Math.floor(Math.random() * 30) + ":30",
    rating: Math.floor(Math.random() * 30 + 70) + "%",
    image: "https://via.placeholder.com/300x200/FF6B35/FFFFFF?text=XNXX",
    views: Math.floor(Math.random() * 1000000),
    date: new Date().toISOString().split('T')[0]
  };

  res.json({
    success: true,
    data: mockData,
    source: "XNXX Random API (Local)",
    timestamp: new Date().toISOString()
  });
});

app.get('/xnxx/search', (req, res) => {
  const { key, page = 0 } = req.query;
  
  if (!key) {
    return res.status(400).json({
      success: false,
      message: "Parameter 'key' is required",
      example: "/xnxx/search?key=your-search-term"
    });
  }

  // Simulation de résultats de recherche
  const results = [];
  const resultCount = Math.floor(Math.random() * 10) + 5;
  
  for (let i = 0; i < resultCount; i++) {
    results.push({
      id: xnxx-search--,
      title: ${key} - Result ,
      link: https://xnxx.com/search-result-,
      duration: Math.floor(Math.random() * 30) + ":30", 
      rating: Math.floor(Math.random() * 30 + 70) + "%",
      image: https://via.placeholder.com/300x200/FF6B35/FFFFFF?text=Result,
      views: Math.floor(Math.random() * 1000000)
    });
  }

  res.json({
    success: true,
    data: results,
    query: { key, page: parseInt(page) },
    total: results.length,
    source: "XNXX Search API (Local)",
    timestamp: new Date().toISOString()
  });
});

// === PornHub Endpoints ===
app.get('/pornhub/random', (req, res) => {
  const mockData = {
    id: "ph-random-" + Math.floor(Math.random() * 10000),
    title: "Sample PornHub Video " + Math.floor(Math.random() * 100),
    link: "https://pornhub.com/sample-video",
    duration: Math.floor(Math.random() * 30) + ":30",
    rating: Math.floor(Math.random() * 30 + 70) + "%",
    image: "https://via.placeholder.com/300x200/FF9500/FFFFFF?text=PornHub",
    views: Math.floor(Math.random() * 1000000)
  };

  res.json({
    success: true,
    data: mockData,
    source: "PornHub Random API (Local)"
  });
});

app.get('/pornhub/search', (req, res) => {
  const { key, page = 0 } = req.query;
  
  if (!key) {
    return res.status(400).json({
      success: false,
      message: "Parameter 'key' is required"
    });
  }

  const results = [];
  for (let i = 0; i < 8; i++) {
    results.push({
      id: ph-search--,
      title: ${key} - PornHub Result ,
      link: https://pornhub.com/search-,
      duration: Math.floor(Math.random() * 30) + ":30",
      rating: Math.floor(Math.random() * 30 + 70) + "%",
      image: https://via.placeholder.com/300x200/FF9500/FFFFFF?text=PH
    });
  }

  res.json({
    success: true,
    data: results,
    query: { key, page: parseInt(page) },
    source: "PornHub Search API (Local)"
  });
});

// === XVideos Endpoints ===
app.get('/xvideos/random', (req, res) => {
  const mockData = {
    id: "xv-random-" + Math.floor(Math.random() * 10000),
    title: "Sample XVideos Video " + Math.floor(Math.random() * 100),
    link: "https://xvideos.com/sample-video",
    duration: Math.floor(Math.random() * 30) + ":30",
    rating: Math.floor(Math.random() * 30 + 70) + "%",
    image: "https://via.placeholder.com/300x200/DC143C/FFFFFF?text=XVideos"
  };

  res.json({
    success: true,
    data: mockData,
    source: "XVideos Random API (Local)"
  });
});

// Gestion des erreurs 404
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: Endpoint not found:  ,
    availableEndpoints: [
      "GET /",
      "GET /status", 
      "GET /health",
      "GET /xnxx/random",
      "GET /xnxx/search?key=terme",
      "GET /pornhub/random",
      "GET /pornhub/search?key=terme",
      "GET /xvideos/random"
    ],
    documentation: http://localhost:/
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log( API-MARC démarrée avec succès !);
  console.log( Serveur local: http://localhost:);
  console.log( Documentation: http://localhost:/);
  console.log( Pour exposer publiquement: utilisez ngrok);
  console.log( Démarrée le: );
});
