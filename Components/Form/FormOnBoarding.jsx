import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Title } from '../Title/Title';
import { Subtitle } from '../Subtitle/Subtitle';
import { InputText } from '../InputText/InputText';
import { Button } from '../Button/Button';
import { s } from './FormOnBoarding.style';
import config from '../1rootconfig/ipconfig';
import { connect } from 'react-redux';

function FormOnBoarding() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInscriptionPress = () => {
        navigation.navigate('SignUp1');
    };

    const handleConnexionPress = () => {
        console.log("Email saisi avant fetch :", email);
        console.log("Mot de passe saisi avant fetch :", password);
        // Effectuer la requête fetch
        fetch(config + '/utilisateurs')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                // console.log("Données récupérées de la base de données :", data);
    
                const foundUser = data.find((utilisateurs) => utilisateurs.email === email && utilisateurs.password === password);
                console.log("email",email)
                console.log("password",password)
                console.log("Utilisateur trouvé :", foundUser);
    
                if (foundUser) {
                    // Connexion réussie, rediriger vers le tableau de bord
                    navigation.navigate('SignUp2Hide');
                } else {
                    Alert.alert('Erreur', 'E-mail ou mot de passe incorrect');
                }
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des utilisateurs:', error);
                Alert.alert('Erreur', 'Une erreur est survenue lors de la connexion');
            });
    };

    return (
        <View style={s.container}>
            <Title style={s.txtTitle} txtTitle={'Connectez-vous'} />
            <Subtitle style={s.txtSubtitle} txtSubtitle={'Uniquement sur invitation'} />
            <InputText
                style={s.txtInput}
                placeholder={'Votre Adresse e-mail'}
                onChangeText={text => setEmail(text)}
                value={email}
            />
            <InputText
                style={s.txtInput}
                placeholder={'Votre Mot de passe'}
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry={true}
            />
            <Button type="connexion" title="Connexion" onPress={handleConnexionPress} />
            <Button type="inscription" title="Inscription" onPress={handleInscriptionPress} />
        </View>
    );
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(FormOnBoarding);
