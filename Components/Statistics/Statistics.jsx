import React, { memo } from "react";
import { View } from "react-native";
import Identification from "../Identification/Identification";
import { s } from "./Statistics.style";
import { connect } from 'react-redux';

  function Statistics(userId) {
  return (
    <View style={s.container}>
      <View style={s.item}>
        <Identification txtTitle="Nb. de filleuls:" txtSubtitle="150" />
      </View>
      <View style={s.item}>
        <Identification txtTitle="Agence:" txtSubtitle={userId} />
      </View>
      <View style={s.item}>
        <Identification txtTitle="Nb. de Biens:" txtSubtitle="50" />
      </View>
    </View>
  );
}

const mapStateToProps = (state) => ({
  userId: state.user.userId,
});

export default connect(mapStateToProps)(React.memo(Statistics));

