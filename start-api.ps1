# Script de démarrage API-MARC
Write-Host " Démarrage d'API-MARC Local..." -ForegroundColor Green

# Vérifier si Node.js est installé
if (!(Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host " Node.js n'est pas installé." -ForegroundColor Red
    Write-Host " Téléchargez depuis: https://nodejs.org/" -ForegroundColor Yellow
    Read-Host "Appuyez sur Entrée pour continuer après installation"
    exit 1
}

Write-Host " Installation des dépendances..." -ForegroundColor Yellow
npm install

Write-Host " Démarrage du serveur..." -ForegroundColor Yellow
Write-Host " API sera disponible sur: http://localhost:3000" -ForegroundColor Green
Write-Host " Documentation: http://localhost:3000/" -ForegroundColor Cyan
Write-Host "  Pour arrêter: Ctrl+C" -ForegroundColor Red

npm start
