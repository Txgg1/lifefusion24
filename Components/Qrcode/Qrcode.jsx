import React, { memo, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, Dimensions } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { s } from './Qrcode.style';
// import ScreenBrightness from 'react-native-screen-brightness';


const { width } = Dimensions.get('window');


function Qrcode() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedQrData, setSelectedQrData] = useState(null);
  const modalQrSize = width * 0.7;

  // useEffect(() => {
  //   // Réinitialiser la luminosité lorsque le composant se démonte
  //   return () => {
  //     ScreenBrightness.setBrightness(0); // Réinitialiser à la luminosité par défaut du système
  //   };
  // }, []);

  const qrCodes = [
    { id: 1, data: 'Lien ou données pour l’application' },
    { id: 2, data: 'Lien ou données pour l’affiliation' },
  ];

  const handleQrPress = (data) => {
    setSelectedQrData(data);
    setIsModalVisible(true);
    // ScreenBrightness.setBrightness(1); // Définir la luminosité à 100% lorsque le modal s'ouvre

  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedQrData(null);
    // ScreenBrightness.setBrightness(0); // Réinitialiser la luminosité lorsque le modal se ferme

  };

  // Fonction pour personnaliser le QR code avec une image au centre
  const renderCustomQRCode = (data, size) => {
    return (
      <QRCode
        value={data}
        size={size}
        logo={{
          uri: 'splash.png',
          width: 100, // Taille de l'image
          height: 100 ,
        }}
        logoBackgroundColor="white" // Couleur de fond derrière l'image
      />
    );
  };

  return (
    <View style={s.container}>
      {qrCodes.map((qr) => (
        <TouchableOpacity key={qr.id} style={s.qrContainer} onPress={() => handleQrPress(qr.data)}>
          <View style={s.qrWrapper}>
            {renderCustomQRCode(qr.data, 100)}
          </View>
          <Text style={s.qrText}>{qr.id === 1 ? 'Code Application' : 'Code Affiliation'}</Text>
        </TouchableOpacity>
      ))}

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={s.modalContainer}>
          <View style={s.modalContent}>
            {selectedQrData ? (
              renderCustomQRCode(selectedQrData ,modalQrSize)
            )  : (
              <Text style={s.errorText}>Aucune donnée à afficher pour le code QR</Text>
            )}
            <TouchableOpacity onPress={closeModal} style={s.closeButton}>
              <Text style={s.closeButtonText}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default memo(Qrcode);
