import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    // Ajoutez vos styles pour le container ici
  },
  btnPurple: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 150,
    backgroundColor: '#450045',
    borderRadius: 15,
  },
  txtPurple: {
    color: '#450045',
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: 'center',
    padding: 25,
  },
  btnWhite: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 150,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#450045',
    borderRadius: 15,
  },
  txtWhite: {
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    padding: 40,
  },
});
