const express = require('express');
const cors = require('cors');  
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Health check pour Railway
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Simuler le téléchargement de vidéos
app.get('/api/:platform/download/:videoId', async (req, res) => {
    const { platform, videoId } = req.params;
    console.log('Téléchargement demandé:', platform, videoId);
    
    // Simulation du processus de téléchargement
    setTimeout(() => {
        res.json({
            success: true,
            message: 'Vidéo téléchargée avec succès!',
            filename: platform + '_' + videoId + '_' + Date.now() + '.mp4',
            downloadUrl: '/downloads/' + platform + '_' + videoId + '.mp4',
            size: Math.floor(Math.random() * 50000000) + 10000000 // Taille simulée
        });
    }, 2000); // Délai de 2 secondes pour simuler le téléchargement
});

// Endpoint pour streaming
app.get('/api/:platform/stream/:videoId', (req, res) => {
    const { platform, videoId } = req.params;
    
    const streamingUrls = {
        '1080p': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        '720p': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        '480p': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
    };
    
    res.json({
        success: true,
        data: {
            id: videoId,
            platform: platform,
            streamingUrls: streamingUrls,
            canDownload: true,
            downloadEndpoint: '/api/' + platform + '/download/' + videoId
        }
    });
});

// Endpoint random avec support vidéo
app.get('/api/:platform/random', (req, res) => {
    const { platform } = req.params;
    const videoId = 'random_' + Date.now();
    
    res.json({
        success: true,
        data: {
            id: videoId,
            title: platform.toUpperCase() + ' Vidéo Random avec Téléchargement',
            duration: Math.floor(Math.random() * 20) + 10 + ':' + String(Math.floor(Math.random() * 60)).padStart(2, '0'),
            rating: Math.floor(Math.random() * 30) + 70 + '%',
            views: Math.floor(Math.random() * 1000000) + 100000,
            hasVideo: true,
            canDownload: true,
            streamEndpoint: '/api/' + platform + '/stream/' + videoId,
            downloadEndpoint: '/api/' + platform + '/download/' + videoId
        }
    });
});

app.get('/', (req, res) => {
    res.json({
        message: ' API-MARC avec Support Vidéo et Téléchargement',
        version: '2.0.0',
        features: [
            'Streaming vidéo direct',
            'Téléchargement de vidéos', 
            'Support multi-qualités',
            'Gestion des fichiers'
        ],
        endpoints: {
            random: '/api/{platform}/random',
            stream: '/api/{platform}/stream/{videoId}',
            download: '/api/{platform}/download/{videoId}',
            health: '/health'
        },
        platforms: ['xnxx', 'pornhub', 'xvideos', 'redtube', 'xhamster', 'youporn']
    });
});

app.listen(PORT, () => {
    console.log(' API-MARC Vidéo démarrée sur port:', PORT);
    console.log(' Support téléchargement: ACTIVÉ');
    console.log(' Support streaming: ACTIVÉ');
    console.log(' Railway deployment: READY');
});