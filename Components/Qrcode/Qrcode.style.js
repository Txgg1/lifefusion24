import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const s = StyleSheet.create({
  container: {
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  qrContainer: {
    alignItems: 'center',
  },
  qrWrapper: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  qrCodeContainer: {
    alignItems: 'center',
  },
  qrText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    // width: width * 0.9, // Largeur du modal à 90% de la largeur de l'écran
    padding: 20,
    justifyContent: 'center',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    paddingHorizontal: 50,
    backgroundColor: '#450045',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
  },
});
