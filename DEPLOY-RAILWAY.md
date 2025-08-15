#  Guide de Déploiement Railway pour dianakhilefay

##  Prérequis Complétés 

Tous les fichiers sont **prêts et configurés** pour le déploiement :

-  pi-video.js - API complète avec téléchargement
-  package.json - Dépendances et configuration
-  Procfile - Commande de démarrage Railway
-  ailway.json - Configuration Railway optimisée
-  README.md - Documentation complète
-  .gitignore - Exclusions Git

##  Étapes de Déploiement

### 1.  Créer Repository GitHub

1. **Aller sur [github.com](https://github.com)**
2. **Se connecter avec le compte dianakhilefay**
3. **Cliquer "New repository"**
4. **Configuration :**
   - Nom : API-MARC-VIDEO
   - Description :  API de scraping pour plateformes adultes avec téléchargement vidéo
   - Visibilité : **Public**
   -  **Ne pas** ajouter README, .gitignore, ou license (on a déjà tout)
5. **Cliquer "Create repository"**

### 2.  Pousser le Code vers GitHub

Exécuter ces commandes dans PowerShell :

`powershell
# Initialiser le repository Git
git init

# Configurer Git avec les infos de dianakhilefay
git config user.name "dianakhilefay"
git config user.email "dianakhilefay@gmail.com"

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m " API-MARC Video v2.0.0 - Complete with download support

 Features:
- Video streaming (1080p, 720p, 480p, 360p)
- Video download with metadata
- Advanced search across platforms
- Health monitoring endpoint
- Full CORS support

 Tech Stack:
- Node.js + Express
- Railway-optimized deployment
- RESTful API design

 Platforms:
XNXX, PornHub, XVideos, RedTube, XHamster, YouPorn

 Ready for Railway deployment"

# Connecter au repository GitHub
git remote add origin https://github.com/dianakhilefay/API-MARC-VIDEO.git

# Définir la branche principale
git branch -M main

# Pousser vers GitHub
git push -u origin main
`

### 3.  Déployer sur Railway

#### A. Créer Compte Railway
1. **Aller sur [railway.app](https://railway.app)**
2. **"Login with GitHub"**
3. **Autoriser Railway** à accéder aux repositories

#### B. Créer Nouveau Projet
1. **"New Project"**
2. **"Deploy from GitHub repo"**
3. **Sélectionner "dianakhilefay/API-MARC-VIDEO"**
4. **Railway détecte automatiquement Node.js**

#### C. Configuration Automatique
Railway va automatiquement :
-  **Installer** les dépendances via 
pm install
-  **Démarrer** l'API via 
ode api-video.js
-  **Configurer** le port automatiquement
-  **Activer** HTTPS par défaut
-  **Générer** une URL publique

### 4.  URL Finale

Après déploiement, l'API sera disponible à :
`
https://api-marc-video-production.up.railway.app
`

### 5.  Test des Endpoints

#### Test de Base
`ash
curl https://api-marc-video-production.up.railway.app/
`

#### Test de Santé
`ash
curl https://api-marc-video-production.up.railway.app/api/health
`

#### Test Téléchargement
`ash
curl https://api-marc-video-production.up.railway.app/api/xnxx/download/test123
`

#### Test Streaming
`ash
curl https://api-marc-video-production.up.railway.app/api/xnxx/stream/test123
`

#### Test Recherche
`ash
curl "https://api-marc-video-production.up.railway.app/api/xnxx/search?q=test&limit=5"
`

##  Monitoring Railway

### Logs en Temps Réel
- **Railway Dashboard**  Deployments  View Logs
- **Logs automatiques** de toutes les requêtes
- **Métriques** de performance et uptime

### Variables d'Environnement
- **PORT** : Configuré automatiquement par Railway
- **NODE_ENV** : production (automatique)

### Health Checks
- **Endpoint** : /api/health
- **Timeout** : 100ms
- **Auto-restart** en cas de problème

##  Résultat Final

Après déploiement, tu auras :

###  API Complètement Fonctionnelle
- ** Téléchargement de vidéos** avec métadonnées
- ** Streaming direct** multi-qualités
- ** Recherche avancée** par plateforme
- ** Monitoring** et health checks

###  URLs d'Accès Public
- **API Base** : https://api-marc-video-production.up.railway.app
- **GitHub** : https://github.com/dianakhilefay/API-MARC-VIDEO
- **Documentation** : Dans le README.md du repository

###  Support Complet
- **6 Plateformes** : XNXX, PornHub, XVideos, RedTube, XHamster, YouPorn
- **4 Endpoints** : random, search, stream, download
- **CORS Activé** : Utilisable depuis n'importe quel site
- **HTTPS** : Sécurisé par défaut

##  Commandes à Exécuter

**Copie-colle ces commandes dans PowerShell :**

`powershell
# 1. Configurer Git
git config user.name "dianakhilefay"
git config user.email "dianakhilefay@gmail.com"

# 2. Premier commit
git add .
git commit -m " API-MARC Video v2.0.0 - Railway Ready"

# 3. Connecter GitHub (après avoir créé le repo)
git remote add origin https://github.com/dianakhilefay/API-MARC-VIDEO.git
git branch -M main
git push -u origin main
`

**Ensuite aller sur Railway.app et déployer !**

---

** Temps estimé : 5-10 minutes pour avoir l'API live !** 
