import React from "react";
import { Alert, Share, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Subtitle } from "../Subtitle/Subtitle";
import { Title } from "../Title/Title";
import QRCode from 'react-native-qrcode-svg'; // Importation de react-native-qrcode-svg
import { s } from "./FormPartnerShip1.style"; // Assurez-vous que ce fichier de style existe et est correctement configuré

export function FormPartnerShip1() {
  const navigation = useNavigation();

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Découvrez LifeFusion et offrez un compte exclusif à vos collaborateurs !',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // partagé avec le type d'activité result.activityType
        } else {
          // partagé
        }
      } else if (result.action === Share.dismissedAction) {
        // annulé
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={s.container}>
      <Title style={s.txtTitle} txtTitle={"Offrez un compte LifeFusion"} />
      <Subtitle
        style={s.txtSubtitle}
        txtSubtitle={
          "Vous avez trouvé un nouveau collaborateur ?  " +
          "Super !" + "\n\n" +
          "Offrez lui un compte exclusif;" + "\n" +
          "en lui permettant de rejoindre " + "\n" +
          "LifeFusion." + "\n\n"
        }
      />
      <TouchableOpacity style={styles.shareButton} onPress={onShare}>
        <Text style={styles.shareButtonText}>PARTAGER (MAIL, CONTACTS, RÉSEAUX SOCIAUX)</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>OU</Text>
      <Text style={styles.qrInstruction}>Scannez vos QR CODES</Text>
      <View style={styles.qrContainer}>
        <View style={styles.qrCode}>
          <QRCode
            value="https:/install"
            size={100}
          />
          <Text style={styles.qrLabel}>Application</Text>
        </View>
        <View style={styles.qrCode}>
          <QRCode
            value="https:/signup"
            size={100}
          />
          <Text style={styles.qrLabel}>Affiliation</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shareButton: {
    backgroundColor: '#450045',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  shareButtonText: {
    color: 'white',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
  },
  qrInstruction: {
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  qrContainer: {
    width : "75%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  qrCode: {
    alignItems: 'center',
  },
  qrLabel: {
    marginTop: 10,
    textAlign: 'center',
  },
});
