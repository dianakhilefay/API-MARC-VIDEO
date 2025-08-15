# Script tout-en-un API-MARC
Write-Host " API-MARC - Démarrage Complet" -ForegroundColor Green

Write-Host "
 Fichiers disponibles:" -ForegroundColor Cyan
Get-ChildItem *.ps1,*.html,*.js | Format-Table Name, Length -AutoSize

Write-Host " Options disponibles:" -ForegroundColor Yellow
Write-Host "   1. Démarrer l'API uniquement" -ForegroundColor White
Write-Host "   2. Ouvrir le testeur uniquement" -ForegroundColor White  
Write-Host "   3. Démarrer l'API ET ouvrir le testeur" -ForegroundColor White
Write-Host "   4. Afficher cette aide" -ForegroundColor White

$choice = Read-Host "
Choisissez une option (1-4)"

switch ($choice) {
    "1" {
        Write-Host " Démarrage de l'API..." -ForegroundColor Green
        .\start-api.ps1
    }
    "2" {
        Write-Host " Ouverture du testeur..." -ForegroundColor Green
        .\open-testeur.ps1
    }
    "3" {
        Write-Host " Démarrage de l'API et ouverture du testeur..." -ForegroundColor Green
        .\open-testeur.ps1
        Start-Sleep 2
        .\start-api.ps1
    }
    "4" {
        Write-Host "
 Aide API-MARC:" -ForegroundColor Cyan
        Write-Host "   - testeur-api.html : Interface web de test" -ForegroundColor White
        Write-Host "   - server.js : Code de l'API" -ForegroundColor White
        Write-Host "   - start-api.ps1 : Démarre l'API" -ForegroundColor White
        Write-Host "   - open-testeur.ps1 : Ouvre le testeur" -ForegroundColor White
        Write-Host "   - README.md : Documentation complète" -ForegroundColor White
    }
    default {
        Write-Host " Option invalide" -ForegroundColor Red
    }
}
