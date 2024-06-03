// FormOnBoarding.jsx
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
import { setUser } from '../../store/reducer/UserReducer'; // Assurez-vous que ce chemin est correct

function FormOnBoarding({ setUser }) {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInscriptionPress = () => {
        navigation.navigate('SignUp1');
    };

    const handleConnexionPress = () => {
        console.log("Email saisi avant fetch :", email);
        console.log("Mot de passe saisi avant fetch :", password);
        fetch(`${config}/utilisateurs`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                const foundUser = data.find(utilisateurs => utilisateurs.email === email && utilisateurs.password === password);
                console.log("email", email);
                console.log("password", password);
                console.log("Utilisateur trouvé :", foundUser);

                if (foundUser) {
                    setUser(foundUser); // Met à jour le store Redux avec l'utilisateur trouvé
                    navigation.navigate('SignUp2Show');
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

const mapDispatchToProps = (dispatch) => ({
    setUser: (user) => dispatch(setUser(user))
});

export default connect(null, mapDispatchToProps)(FormOnBoarding);
