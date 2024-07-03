
/**
          --- SplashScreen.style.js ---

  * Description:

    Ce fichier définit les styles utilisés pour le composant `SplashScreen`.
    Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
    On exporte une constant s pour gerer les styles dans les fichiers .jsx

  * Styles utilisés:

    background: Style appliqué à l'image d'arrière-plan pour occuper tout l'écran et centrer son contenu.
    container: Style appliqué au conteneur principal pour centrer le contenu horizontalement et verticalement.
    logo: Style appliqué à l'image du logo pour définir sa taille, son aspect-ratio et son mode de redimensionnement.
     
 **/
import { StyleSheet } from "react-native";

export const s = StyleSheet.create ({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '150%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
});