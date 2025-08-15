# Script de déploiement Railway pour API-MARC
Write-Host " Déploiement de l''API mise à jour sur Railway..." -ForegroundColor Green

# Vérifier si Railway CLI est installé
try {
    $railwayVersion = railway --version 2>$null
    if ($railwayVersion) {
        Write-Host " Railway CLI trouvé: $railwayVersion" -ForegroundColor Green
        
        # Déployer directement
        Write-Host " Déploiement en cours..." -ForegroundColor Yellow
        railway up
        
        Write-Host " Déploiement terminé!" -ForegroundColor Green
        Write-Host " Votre API est disponible à: https://web-production-7115f.up.railway.app" -ForegroundColor Cyan
    } else {
        Write-Host " Railway CLI non trouvé" -ForegroundColor Red
        Write-Host " Installation de Railway CLI..." -ForegroundColor Yellow
        
        # Installer Railway CLI via npm si disponible
        npm install -g @railway/cli
        
        Write-Host " Railway CLI installé!" -ForegroundColor Green
        Write-Host " Connectez-vous avec: railway login" -ForegroundColor Yellow
        Write-Host " Puis exécutez: railway up" -ForegroundColor Yellow
    }
} catch {
    Write-Host " Erreur lors du déploiement: $_" -ForegroundColor Red
    
    # Alternative: Utiliser GitHub Desktop
    Write-Host " Alternative: Utilisez GitHub Desktop pour pusher les changements" -ForegroundColor Yellow
    Write-Host "1. Ouvrez GitHub Desktop" -ForegroundColor White
    Write-Host "2. Ajoutez le fichier api-video.js modifié" -ForegroundColor White
    Write-Host "3. Commitez avec le message: ''Add search endpoint functionality''" -ForegroundColor White
    Write-Host "4. Pushez vers GitHub" -ForegroundColor White
    Write-Host "5. Railway se redéploiera automatiquement" -ForegroundColor White
}

Write-Host "`n Test de votre API mise à jour:" -ForegroundColor Cyan
Write-Host " Recherche: https://web-production-7115f.up.railway.app/api/xnxx/search?q=amateur" -ForegroundColor Gray
Write-Host " Stream: https://web-production-7115f.up.railway.app/api/xnxx/stream/test123" -ForegroundColor Gray
Write-Host " Download: https://web-production-7115f.up.railway.app/api/xnxx/download/test123" -ForegroundColor Gray

Write-Host "`n Ouvrir le testeur web:" -ForegroundColor Cyan
Write-Host "file:///$PWD/site-test/index.html" -ForegroundColor Gray