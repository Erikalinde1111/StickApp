import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Entry from './entry';
import Projekt from './projekt';
import CreateDesign from './createDesign';
import ShowPattern from './showPattern';


const roterComponent = () => {
  return(
    <Router>
      <Scene key="root" hideNavBar>

        <Scene key="auth">
          <Scene key="entry" component={Entry} title="LOG IN"/>
        </Scene>

        <Scene key="main">
          <Scene key="projekt"
            onRight={() => Actions.createDesign()}
            rightTitle="Add"
            component={Projekt}
            title="PROJEKT" />

          <Scene key="createDesign" title="DESIGN" component={CreateDesign}/>
          <Scene key="showPattern" title="INSTRUKTIONER" component={ShowPattern}/>
        </Scene>

      </Scene>
    </Router>
  );
};

export default roterComponent
