#  Script de Vérification du Déploiement API-MARC v2.1.0

Write-Host " Vérification du déploiement API-MARC v2.1.0..." -ForegroundColor Green
Write-Host ""

# URLs à tester
$API_BASE = "https://web-production-7115f.up.railway.app"
$ENDPOINTS = @(
    @{ Name = "Health Check"; URL = "$API_BASE/health" },
    @{ Name = "API Info"; URL = "$API_BASE/" },
    @{ Name = "Random Video"; URL = "$API_BASE/api/xnxx/random" },
    @{ Name = "Search Test"; URL = "$API_BASE/api/xnxx/search?q=amateur&limit=3" },
    @{ Name = "Custom Stream"; URL = "$API_BASE/api/xnxx/stream/ma_video_perso" },
    @{ Name = "Custom Download"; URL = "$API_BASE/api/xnxx/download/test_custom_123" }
)

Write-Host " Tests des Endpoints:" -ForegroundColor Cyan
Write-Host "=" * 50

foreach ($endpoint in $ENDPOINTS) {
    Write-Host " Testing: $($endpoint.Name)" -ForegroundColor Yellow
    Write-Host "   URL: $($endpoint.URL)" -ForegroundColor Gray
    
    try {
        $response = Invoke-RestMethod -Uri $endpoint.URL -Method Get -TimeoutSec 10
        Write-Host "    SUCCESS" -ForegroundColor Green
        
        if ($endpoint.Name -eq "Search Test") {
            Write-Host "    Results: $($response.totalResults) found" -ForegroundColor Cyan
        }
        if ($endpoint.Name -eq "Health Check") {
            Write-Host "    Status: $($response.status)" -ForegroundColor Green
        }
    }
    catch {
        Write-Host "    FAILED: $($_.Exception.Message)" -ForegroundColor Red
    }
    
    Write-Host ""
}

Write-Host " URLs Importantes:" -ForegroundColor Cyan
Write-Host "=" * 50
Write-Host " API Base: $API_BASE" -ForegroundColor White
Write-Host " Testeur Web: file:///$PWD/site-test/index.html" -ForegroundColor White
Write-Host " GitHub: https://github.com/dianakhilefay/API-MARC" -ForegroundColor White
Write-Host " Changelog: $PWD\CHANGELOG.md" -ForegroundColor White

Write-Host ""
Write-Host " Fonctionnalités Disponibles:" -ForegroundColor Cyan
Write-Host "=" * 50
Write-Host " Recherche avec termes personnalisés" -ForegroundColor Green
Write-Host " IDs de vidéos personnalisés" -ForegroundColor Green  
Write-Host " Téléchargement simulé avec métadonnées" -ForegroundColor Green
Write-Host " Streaming multi-qualités" -ForegroundColor Green
Write-Host " Interface testeur interactive" -ForegroundColor Green
Write-Host " Monitoring API temps réel" -ForegroundColor Green

Write-Host ""
Write-Host " Déploiement v2.1.0 - COMPLET !" -ForegroundColor Green -BackgroundColor Black