import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Entry from './entry';
import Projekt from './projekt';




const roterComponent = () => {
  return(
    <Router>
      <Scene key="root" hideNavBar>

        <Scene key="auth">
          <Scene key="entry" component={Entry} title="LOGGA IN"/>
        </Scene>

        <Scene key="main">
          <Scene key="projekt" component={Projekt} title="PROJEKT" />
        </Scene>

      </Scene>
    </Router>
  );
};

export default roterComponent
