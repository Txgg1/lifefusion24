import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  txtTitle: {
    fontSize:20,
    fontWeight:"bold",
    textTransform: "uppercase",
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 20, // Ajoute un espace en bas pour éviter la superposition avec les boutons
  },
  input: {
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfInput: {
    flex: 0.48,
  },
  ville: {
    flex: 0.65,
  },
  cp: {
    flex: 0.35,
    marginRight:20,
  },
  smallInput: {
    flex: 0.45,
  },
  buttonContainer: {
    flex:.5,
    alignItems:"center",
    justifyContent: "center",
  },
  btnPurple: {
    width: 280,
    // height: 40,
    marginVertical: 15,
    backgroundColor: '#450045',
    borderRadius: 25,
  },
  txtPurple: {
    color: '#450045',
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: 'center',
    padding: 2,
  },
  btnWhite: {
    width: 280,
    backgroundColor: 'white',
    marginTop: 15,
    borderWidth: 2,
    borderColor: '#450045',
    borderRadius: 25,
  },
  txtWhite: {
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: 'center',
    padding: 2,
  },
  btnHeight: {
    height: 50,
  },
  special: {
    marginTop: 10,
  },
  wrap: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
});
