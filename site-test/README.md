#  API-MARC Tester Website

Site web interactif pour tester l'\''API-MARC de dianakhilefay.

##  Fonctionnalités

###  Tests en Temps Réel
- **Random Video** : Génère des vidéos aléatoires
- **Stream** : Test du streaming avec lecteur vidéo intégré  
- **Download** : Simulation de téléchargement
- **Search** : Recherche avec termes personnalisés

###  6 Plateformes Supportées
- XNXX
- PornHub  
- XVideos
- RedTube
- XHamster
- YouPorn

###  Monitoring
- **Statut API** en temps réel
- **Temps de réponse** affiché
- **Vérification automatique** toutes les 30s

##  Utilisation

### Option 1 : Local
```bash
# Ouvrir dans le navigateur
start site-test\index.html
```

### Option 2 : Serveur Local
```bash
# Python
cd site-test
python -m http.server 8000

# Node.js  
npx http-server site-test

# Puis aller sur http://localhost:8000
```

##  Configuration

### Changer l'\''URL de l'\''API
1. Cliquer sur le bouton **"Changer"**
2. Entrer la nouvelle URL
3. Le site se met à jour automatiquement

### URLs par Défaut
- **Production** : `https://web-production-7115f.up.railway.app`
- **Local** : `http://localhost:3000`

##  Responsive Design

Le site s'\''adapte automatiquement :
- **Desktop** : Grille 3 colonnes
- **Tablet** : Grille 2 colonnes  
- **Mobile** : Colonne unique

##  Interface

### Design Moderne
- **Gradient background** violet/bleu
- **Glass morphism** effects
- **Animations** fluides
- **Icons** Font Awesome

### Couleurs par Action
- **Random** : Rouge dégradé
- **Stream** : Bleu-vert dégradé
- **Download** : Rose dégradé  
- **Search** : Bleu ciel dégradé

##  Résultats

### Format JSON
Tous les résultats sont affichés en JSON formaté avec :
- **Syntax highlighting**
- **Scroll automatique**
- **Font monospace**

### Lecteur Vidéo
Pour les tests de streaming :
- **Contrôles HTML5** natifs
- **Responsive** 100% largeur
- **Qualité 720p** par défaut

##  Auto-Update

Le site vérifie automatiquement :
- **Statut API** toutes les 30 secondes
- **Mise à jour** des indicateurs
- **Gestion d'\''erreurs** automatique

##  Métriques

### Temps de Réponse
- Affiché en **millisecondes**
- Mesuré pour chaque requête
- Mise à jour en temps réel

### Indicateur de Statut
- ** Online** : API accessible
- ** Offline** : API inaccessible
- **Animation pulse** pour indiquer l'\''activité

##  Développement

### Structure
```
site-test/
 index.html    # Site principal
 README.md     # Documentation
```

### Technologies
- **HTML5** sémantique
- **CSS3** avec animations
- **JavaScript ES6+** vanilla
- **Font Awesome** pour les icônes

### Compatibilité
- **Chrome** 80+
- **Firefox** 75+
- **Safari** 13+
- **Edge** 80+

##  Déploiement

### GitHub Pages
```bash
# Pousser vers GitHub
git add site-test/
git commit -m "Add API tester website"
git push origin main

# Activer GitHub Pages sur le dossier site-test
```

### Netlify Drop
1. Zipper le dossier `site-test`
2. Aller sur [netlify.com/drop](https://app.netlify.com/drop)
3. Glisser-déposer le zip
4. Site live en quelques secondes !

### Vercel
```bash
cd site-test
npx vercel --prod
```

##  Liens Utiles

- **API Live** : https://web-production-7115f.up.railway.app
- **GitHub Repo** : https://github.com/dianakhilefay/API-MARC  
- **Railway Dashboard** : https://railway.app
- **Documentation API** : Voir README principal

---

**Créé par dianakhilefay** 