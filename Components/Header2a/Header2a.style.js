import { StyleSheet } from "react-native";

export const s = StyleSheet.create ({

container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  identification: {
    flexDirection: "column",
  },
  photo: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#450045',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',

  },
  miniLogo: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
 })