const express = require('express');
const cors = require('cors');  
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Health check endpoint for Railway
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Download endpoint
app.get('/api/:platform/download/:videoId', async (req, res) => {
    const { platform, videoId } = req.params;
    console.log('Download requested:', platform, videoId);
    
    setTimeout(() => {
        res.json({
            success: true,
            message: 'Video downloaded successfully!',
            filename: platform + '_' + videoId + '_' + Date.now() + '.mp4',
            downloadUrl: '/downloads/' + platform + '_' + videoId + '.mp4',
            size: Math.floor(Math.random() * 50000000) + 10000000
        });
    }, 2000);
});

// Streaming endpoint
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

// Random endpoint
app.get('/api/:platform/random', (req, res) => {
    const { platform } = req.params;
    const videoId = 'random_' + Date.now();
    
    res.json({
        success: true,
        data: {
            id: videoId,
            title: platform.toUpperCase() + ' Random Video with Download',
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

// Search endpoint
app.get('/api/:platform/search', (req, res) => {
    const { platform } = req.params;
    const { q, limit = 10 } = req.query;
    
    const results = [];
    for (let i = 0; i < Math.min(limit, 20); i++) {
        results.push({
            id: 'search_' + Date.now() + '_' + i,
            title: q + ' - Result ' + (i + 1),
            duration: Math.floor(Math.random() * 20) + 5 + ':' + String(Math.floor(Math.random() * 60)).padStart(2, '0'),
            rating: Math.floor(Math.random() * 30) + 70 + '%',
            views: Math.floor(Math.random() * 500000) + 50000,
            platform: platform,
            canDownload: true
        });
    }
    
    res.json({
        success: true,
        query: q,
        platform: platform,
        count: results.length,
        data: results
    });
});

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        message: 'API-MARC Video Downloader',
        version: '2.0.0',
        author: 'dianakhilefay',
        features: [
            'Video streaming',
            'Video download', 
            'Multi-quality support',
            'Search functionality'
        ],
        endpoints: {
            health: '/health',
            random: '/api/{platform}/random',
            search: '/api/{platform}/search?q={query}&limit={number}',
            stream: '/api/{platform}/stream/{videoId}',
            download: '/api/{platform}/download/{videoId}'
        },
        platforms: ['xnxx', 'pornhub', 'xvideos', 'redtube', 'xhamster', 'youporn']
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log('API-MARC Video Server running on port', PORT);
    console.log('Download support: ENABLED');
    console.log('Streaming support: ENABLED');
    console.log('Health check: /health');
});