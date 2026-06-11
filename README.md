# French Food 40

Site vitrine one-page du **French Food 40** - l'indice annuel des champions cachés de l'alimentaire français.

Sur le modèle du French Tech Next 40/120, le French Food 40 distingue chaque année les PME et ETI alimentaires françaises qui méritent d'être connues : des entreprises enracinées, souvent familiales, qui incarnent le génie alimentaire français.

## Structure du projet

```
frenchfood40/
- index.html          Page principale
- css/
  - style.css         Styles
- js/
  - main.js           Slider hero + animations au scroll
- images/
  - emilie-aris.jpg   Photo Émilie Aris (co-fondatrice)
  - arnaud-nouvion.jpg Photo Arnaud Nouvion (co-fondateur)
- README.md
```

## Développement local

Aucune dépendance, aucun build. Ouvrir `index.html` dans un navigateur, ou servir le dossier :

```bash
python -m http.server 8000
```

Puis ouvrir http://localhost:8000

## Déploiement

Le site est statique et déployé sur Netlify, connecté à ce dépôt GitHub. Chaque `git push` sur la branche principale déclenche un redéploiement automatique.

### Mettre à jour le site

```bash
git add .
git commit -m "Mise a jour [description]"
git push
```

## Porteurs du projet

- **Émilie Aris** - Co-fondatrice, experte agroalimentaire
- **Arnaud Nouvion** - Co-fondateur, communication et affaires institutionnelles

Contact : contact@frenchfood40.fr

## Édition #1

Lancement été 2026, révélation du palmarès début 2027.
