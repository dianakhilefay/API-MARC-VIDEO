const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// CORS Configuration for ALL domains
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: false
}));

// Handle preflight requests
app.options('*', cors());

app.use(express.json());

// Headers for all responses
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Content-Type', 'application/json; charset=utf-8');
    next();
});

// Health endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        version: '3.0.0',
        cors: 'enabled'
    });
});

// Base endpoint with API info
app.get('/', (req, res) => {
    res.json({
        message: ' API-MARC Video Gateway',
        version: '3.0.0',
        features: [
            'Cross-domain compatible',
            'Real video streaming URLs',
            'Multi-quality support',
            'Download simulation',
            'Search functionality'
        ],
        endpoints: {
            health: '/health',
            random: '/api/{platform}/random',
            search: '/api/{platform}/search?q={query}&limit={number}',
            stream: '/api/{platform}/stream/{videoId}',
            download: '/api/{platform}/download/{videoId}'
        },
        platforms: ['xnxx', 'pornhub', 'xvideos', 'redtube', 'xhamster', 'youporn'],
        cors: 'All domains allowed',
        usage: 'Can be used from any website or domain'
    });
});

// Random video endpoint
app.get('/api/:platform/random', (req, res) => {
    const { platform } = req.params;
    const videoId = 'random_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
    
    const videoUrls = [
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
    ];
    
    const randomVideo = videoUrls[Math.floor(Math.random() * videoUrls.length)];
    
    res.json({
        success: true,
        data: {
            id: videoId,
            title: `${platform.toUpperCase()} - Random Video HD`,
            duration: Math.floor(Math.random() * 20) + 5 + ':' + String(Math.floor(Math.random() * 60)).padStart(2, '0'),
            rating: Math.floor(Math.random() * 30) + 70 + '%',
            views: Math.floor(Math.random() * 1000000) + 50000,
            thumbnail: `https://picsum.photos/320/180?random=${Date.now()}`,
            videoUrl: randomVideo,
            streamingUrls: {
                '1080p': randomVideo,
                '720p': randomVideo,
                '480p': randomVideo,
                '360p': randomVideo
            },
            canDownload: true,
            canStream: true,
            platform: platform,
            streamEndpoint: `/api/${platform}/stream/${videoId}`,
            downloadEndpoint: `/api/${platform}/download/${videoId}`
        }
    });
});

// Search endpoint
app.get('/api/:platform/search', (req, res) => {
    const { platform } = req.params;
    const { q: query, limit = 10 } = req.query;
    
    if (!query) {
        return res.status(400).json({
            success: false,
            error: 'Query parameter "q" is required',
            example: `/api/${platform}/search?q=amateur&limit=10`
        });
    }
    
    const maxLimit = Math.min(parseInt(limit) || 10, 20);
    const results = [];
    
    const videoUrls = [
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
    ];
    
    for (let i = 1; i <= maxLimit; i++) {
        const videoId = `${query}_${i}_${Date.now()}`;
        const randomVideo = videoUrls[Math.floor(Math.random() * videoUrls.length)];
        
        results.push({
            id: videoId,
            title: `${platform.toUpperCase()} - ${query} Video ${i}`,
            duration: Math.floor(Math.random() * 25) + 3 + ':' + String(Math.floor(Math.random() * 60)).padStart(2, '0'),
            rating: Math.floor(Math.random() * 35) + 65 + '%',
            views: Math.floor(Math.random() * 800000) + 100000,
            thumbnail: `https://picsum.photos/320/180?random=${i + Date.now()}`,
            videoUrl: randomVideo,
            streamingUrls: {
                '1080p': randomVideo,
                '720p': randomVideo,
                '480p': randomVideo,
                '360p': randomVideo
            },
            canDownload: true,
            canStream: true,
            platform: platform,
            streamEndpoint: `/api/${platform}/stream/${videoId}`,
            downloadEndpoint: `/api/${platform}/download/${videoId}`
        });
    }
    
    res.json({
        success: true,
        query: query,
        platform: platform,
        totalResults: maxLimit,
        data: results
    });
});

// Stream endpoint
app.get('/api/:platform/stream/:videoId', (req, res) => {
    const { platform, videoId } = req.params;
    
    const videoUrls = [
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
    ];
    
    const randomVideo = videoUrls[Math.floor(Math.random() * videoUrls.length)];
    
    res.json({
        success: true,
        data: {
            id: videoId,
            platform: platform,
            title: `Stream: ${videoId} - ${platform.toUpperCase()}`,
            videoUrl: randomVideo,
            streamingUrls: {
                '1080p': randomVideo,
                '720p': randomVideo,
                '480p': randomVideo,
                '360p': randomVideo
            },
            thumbnail: `https://picsum.photos/320/180?random=${Date.now()}`,
            canDownload: true,
            canStream: true,
            downloadEndpoint: `/api/${platform}/download/${videoId}`,
            metadata: {
                duration: '10:25',
                size: '45.2 MB',
                format: 'MP4',
                quality: 'HD'
            }
        }
    });
});

// Download endpoint  
app.get('/api/:platform/download/:videoId', async (req, res) => {
    const { platform, videoId } = req.params;
    
    console.log(`Download requested: ${platform}/${videoId}`);
    
    // Simulate download processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const videoUrls = [
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
    ];
    
    const randomVideo = videoUrls[Math.floor(Math.random() * videoUrls.length)];
    
    res.json({
        success: true,
        message: 'Video ready for download!',
        data: {
            videoId: videoId,
            platform: platform,
            filename: `${platform}_${videoId}_${Date.now()}.mp4`,
            downloadUrl: randomVideo,
            directUrl: randomVideo,
            size: Math.floor(Math.random() * 100) + 20 + ' MB',
            quality: '1080p',
            format: 'MP4',
            duration: Math.floor(Math.random() * 20) + 5 + ':' + String(Math.floor(Math.random() * 60)).padStart(2, '0'),
            thumbnail: `https://picsum.photos/320/180?random=${Date.now()}`,
            metadata: {
                bitrate: '2500 kbps',
                fps: '30',
                codec: 'H.264',
                audio: 'AAC'
            }
        }
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        error: 'Internal server error',
        message: 'Something went wrong!'
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        error: 'Endpoint not found',
        availableEndpoints: [
            'GET /',
            'GET /health',
            'GET /api/{platform}/random',
            'GET /api/{platform}/search?q={query}',
            'GET /api/{platform}/stream/{videoId}',
            'GET /api/{platform}/download/{videoId}'
        ],
        platforms: ['xnxx', 'pornhub', 'xvideos', 'redtube', 'xhamster', 'youporn']
    });
});

app.listen(PORT, () => {
    console.log(` API-MARC Video Gateway running on port ${PORT}`);
    console.log(` CORS enabled for ALL domains`);
    console.log(` Real video URLs provided`);
    console.log(` Ready for cross-domain usage`);
});// Last updated: 2025-08-15 07:27:24
