/**
          --- SignUp2HideScreen.style.js ---

  * Description:
    
    Ce fichier définit les styles utilisés pour le composant `SignUp2HideScreen`.
    Il utilise `StyleSheet` de React Native pour créer des styles réutilisables et modulaires.
    On exporte une constant s pour gerer les styles dans les fichiers .jsx

  * Styles utilisés:

    wrap: Style appliqué au conteneur principal pour centrer verticalement le contenu.
    txtSubtitle: Style appliqué au texte du sous-titre pour centrer le texte.
    
**/

import { StyleSheet } from "react-native";

export const s = StyleSheet.create ({

    wrap: {
    flex: 1,
    justifyContent: "center",
  },
  txtSubtitle: {
    textAlign: "center",
  },
});