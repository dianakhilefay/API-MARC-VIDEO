# Script pour ouvrir le testeur API-MARC
Write-Host " Ouverture du testeur API-MARC..." -ForegroundColor Green

# Vérifier si le fichier HTML existe
if (Test-Path "testeur-api.html") {
    Write-Host " Ouverture du testeur dans votre navigateur..." -ForegroundColor Yellow
    Start-Process "testeur-api.html"
    Write-Host " Testeur ouvert !" -ForegroundColor Green
    Write-Host "
 Instructions:" -ForegroundColor Cyan
    Write-Host "   1. Démarrez d'abord votre API: .\start-api.ps1" -ForegroundColor White
    Write-Host "   2. Utilisez le testeur pour tester les endpoints" -ForegroundColor White
    Write-Host "   3. Les résultats s'affichent en temps réel" -ForegroundColor White
} else {
    Write-Host " Fichier testeur-api.html non trouvé" -ForegroundColor Red
}
