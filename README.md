# Mon-calendrier-basket-ball  [![Build Status](https://app.bitrise.io/app/e2b86904be4881de/status.svg?token=0fgbS-8_sgFUvdhDzAJxBw&branch=master)](https://app.bitrise.io/app/e2b86904be4881de)

##Présentation

C'est un projet à but d'apprentissage ayant pour objectif de prendre en main les principaux outils de développement mobile utilisés lorsque l'on développe avec React Native. Ce projet m'a été suggéré dans le cadre du processus de recrutement chez __BAM,__ la liste des jalons est disponible en fin de page.

Cette application React Native sert à afficher les matchs de NBA de la journée. 


L'utilisateur peut sélectionner ses équipes favorites grâce aux étoiles.

![premier ecran](assets/homescreen.jpg?raw=true "HomeScreen")

Ces équipes seront alors affichées sur la seconde page

![premier ecran](assets/favorites.jpg?raw=true "Favorites")

On pourra aussi suivre les matchs de son équipe favorite exclusivement avec une page 'Favoris'.

Cette application utilise l'API publique https://www.balldontlie.io/



__NB :__ Étant donné que les matchs de NBA ne reprennnent qu'en octobre 2021, pour que l'application affiche toujours des matchs,  une date fixe a été choisie temporairement, le 17/08/2021.

___

##Principaux points traités : 

| Task                        | Progression      |
| ----------------------------|:----------------:|
| Créer un repository Git                                                                       |:heavy_check_mark:|
| Créer une appli ReactNative avec Expo                                                         |:heavy_check_mark:|
| Installer TypeScript pour typer le code                                                       |:heavy_check_mark:|
| Créer un service pour fetcher des données simples depuis une API avec fetch                   |:heavy_check_mark:|
| Tester le service                                                                             |:x:|
| Créer une première page "Liste" avec une scroll view pour afficher les résultats de l'API     |:heavy_check_mark:|
| Créer une deuxième page "Favoris"                                                             |:heavy_check_mark:|
| Créer un bottom tab navigator pour naviguer avec la page de Favoris                           |:heavy_check_mark:|
| Afficher à droite de chacun des items de la liste une icône "étoile"                          |:heavy_check_mark:|
| Animer l'étoile au clic en taille et couleur                                                  |:heavy_check_mark:|
| Ajouter l'item dans les favoris au clic grâce à une gestion de state global                   |:heavy_check_mark:|
| Faire tourner les test lors sur Bitrise au push sur github                                    |:heavy_check_mark:|
| Publier son appli pour android                                                                |:heavy_check_mark:|

___
##Lien expo :
Afin de pouvoir utiliser l'application sur un smartphone Android muni de l'application Expo Go, vous pouvez utiliser ce lien : https://exp.host/@samsoum41/BasketBallCalendar