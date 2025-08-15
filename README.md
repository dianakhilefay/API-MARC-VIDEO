#  API-MARC avec Support Vidéo et Téléchargement

**Créé par [dianakhilefay](https://github.com/dianakhilefay)**

##  URL de l'API Déployée
`
https://api-marc-video-production.up.railway.app
`

##  Fonctionnalités Principales

###  Téléchargement de Vidéos
-  **Téléchargement réel** de fichiers vidéo MP4
-  **Métadonnées complètes** (taille, durée, qualité)
-  **Progress tracking** et informations de vitesse
-  **Formats multiples** (360p à 1080p)

###  Streaming Direct
-  **URLs directes** vers les fichiers vidéo
-  **Player intégré** compatible HTML5
-  **Qualités multiples** disponibles
-  **Pas de stockage serveur** (liens directs uniquement)

###  Recherche Avancée
-  **Recherche par mots-clés**
-  **Filtrage par plateforme**
-  **Pagination** et limitation de résultats
-  **Métadonnées enrichies**

##  Endpoints Disponibles

###  API Base
`
GET / - Informations de l'API
`

###  Vidéo Aléatoire
`
GET /api/{platform}/random
`

###  Recherche
`
GET /api/{platform}/search?q={query}&limit={limit}
`

###  Streaming
`
GET /api/{platform}/stream/{videoId}
`

###  Téléchargement
`
GET /api/{platform}/download/{videoId}
`

###  Santé de l'API
`
GET /api/health
`

##  Plateformes Supportées
- **XNXX** - /api/xnxx/*
- **PornHub** - /api/pornhub/*
- **XVideos** - /api/xvideos/*
- **RedTube** - /api/redtube/*
- **XHamster** - /api/xhamster/*
- **YouPorn** - /api/youporn/*

##  Exemples d'Utilisation

### JavaScript/Fetch
`javascript
// Télécharger une vidéo
const downloadResponse = await fetch('https://api-marc-video-production.up.railway.app/api/xnxx/download/video123');
const downloadData = await downloadResponse.json();
console.log('Fichier téléchargé:', downloadData.data.filename);

// Streamer une vidéo  
const streamResponse = await fetch('https://api-marc-video-production.up.railway.app/api/xnxx/stream/video123');
const streamData = await streamResponse.json();
console.log('URLs de streaming:', streamData.data.streamingUrls);

// Vidéo aléatoire
const randomResponse = await fetch('https://api-marc-video-production.up.railway.app/api/xnxx/random');
const randomData = await randomResponse.json();
console.log('Vidéo aléatoire:', randomData.data);
`

### cURL
`ash
# Test de téléchargement
curl https://api-marc-video-production.up.railway.app/api/xnxx/download/video123

# Test de streaming
curl https://api-marc-video-production.up.railway.app/api/xnxx/stream/video123

# Vidéo aléatoire
curl https://api-marc-video-production.up.railway.app/api/xnxx/random

# Recherche
curl "https://api-marc-video-production.up.railway.app/api/xnxx/search?q=test&limit=10"
`

### Python
`python
import requests

# Télécharger une vidéo
response = requests.get('https://api-marc-video-production.up.railway.app/api/xnxx/download/video123')
data = response.json()
print(f"Fichier téléchargé: {data['data']['filename']}")

# Streamer une vidéo
response = requests.get('https://api-marc-video-production.up.railway.app/api/xnxx/stream/video123')
data = response.json()
print(f"URLs de streaming: {data['data']['streamingUrls']}")
`

##  Réponses d'Exemple

### Téléchargement
`json
{
  "success": true,
  "message": " Vidéo téléchargée avec succès!",
  "data": {
    "filename": "xnxx_video123_1692234567890.mp4",
    "downloadUrl": "/downloads/xnxx_video123_1692234567890.mp4",
    "size": 45623789,
    "sizeFormatted": "43.52 MB",
    "downloadTime": "3245ms",
    "speed": "13765 KB/s",
    "quality": "720p",
    "format": "MP4"
  }
}
`

### Streaming
`json
{
  "success": true,
  "data": {
    "id": "video123",
    "platform": "xnxx",
    "streamingUrls": {
      "1080p": "https://cdn.example.com/video-1080p.mp4",
      "720p": "https://cdn.example.com/video-720p.mp4",
      "480p": "https://cdn.example.com/video-480p.mp4"
    },
    "canDownload": true,
    "downloadEndpoint": "/api/xnxx/download/video123"
  }
}
`

##  Déploiement sur Railway

Cette API est déployée sur **Railway.app** avec les configurations suivantes :

- ** Node.js 18+** automatiquement détecté
- ** Variables d'environnement** configurées automatiquement
- ** HTTPS** activé par défaut
- ** Logs** en temps réel
- ** Auto-redémarrage** en cas de crash

##  Notes Importantes

- **Pas de stockage permanent** - Les fichiers sont des liens directs
- **CORS activé** - Utilisable depuis n'importe quel domaine
- **Rate limiting** - Pas de limite actuellement
- **Logs complets** - Toutes les requêtes sont loggées

##  Liens Utiles

- **Repository GitHub** : https://github.com/dianakhilefay/API-MARC-VIDEO
- **API Live** : https://api-marc-video-production.up.railway.app
- **Créateur** : [@dianakhilefay](https://github.com/dianakhilefay)

##  License

MIT License - Libre d'utilisation

---

**Créé avec  par [dianakhilefay](https://github.com/dianakhilefay)**
