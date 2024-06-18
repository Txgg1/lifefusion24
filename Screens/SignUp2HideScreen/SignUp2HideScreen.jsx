import React, { memo } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../Components/Header/Header";
import FormSignUp2Hide from "../../Components/Form/FormSignUp2Hide";
import Layout from "../../Components/Layout/Layout";
import { s } from "./SignUp2HideScreen.style";
import { connect } from "react-redux";

function SignUp2HideScreen({user}) {
  const navigation = useNavigation();

  return (
    <Layout>
      <View style={s.container}>
        <View>
          <Header
            style={s.txtSubtitle}
            txtTitle="Bienvenue sur LifeFusion"
            txtSubtitle={
              "Pour acceder a toutes les foctionnalités," +
              "\n" +
              " veuillez creer votre account et reinseigner" +
              "\n" +
              " vos données personnelles"
            }
          />
        </View>
        <FormSignUp2Hide />
      </View>
    </Layout>
  );
}
const mapStateToProps = (state) => ({
  user: state.user,
});


export default connect(mapStateToProps)(memo(SignUp2HideScreen));
