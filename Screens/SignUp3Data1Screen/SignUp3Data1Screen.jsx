import React, { memo } from "react";
import { View } from "react-native";
import Header2s from "../../Components/Header2s/Header2s";
import Statistics from "../../Components/Statistics/Statistics";
import FormSignUp3Data1 from "../../Components/Form/FormSignUp3Data1";
import CatchPhrase from "../../Components/CatchPhrase/CatchPhrase";

import { useNavigation } from "@react-navigation/native";
import Layout from "../../Components/Layout/Layout";
import { s } from "./SignUp3Data1Screen.style";
import { connect } from "react-redux";

function SignUp3Data1Screen({user}) {
  const navigation = useNavigation();

  return (
    <Layout>
      <View style={s.container}>
        <Header2s txtTitle="Collaborateur n°" txtSubtitle={user.userId} />
        {/* <Statistics /> */}
        <View style={s.contentAd}>
          <CatchPhrase
            style={[s.catchSubtitle]}
            txtSubtitle="Merci de nous avoir rejoint"
          />
          <CatchPhrase
            style={[s.catchTitle]}
            txtTitle="Veuillez reinseigner vos données personnelles"
          />
        </View>
        <FormSignUp3Data1 />
      </View>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(memo(SignUp3Data1Screen));
