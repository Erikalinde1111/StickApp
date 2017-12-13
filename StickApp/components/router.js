import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Entry from './entry';
import Projekt from './projekt';
import AddPerson from './addPerson';
import ShowPattern from './showPattern';
import Designs from './designs';
import firebase from 'firebase';


const roterComponent = () => {
  return(
    <Router>
      <Scene key="root" hideNavBar>

        <Scene key="auth">
          <Scene key="entry" component={Entry} title="LOG IN"/>
        </Scene>

        <Scene key="main">
          <Scene key="projekt"
            onRight={() => Actions.addPerson()}
            rightTitle="Add"
            component={Projekt}
            title="PROJEKT" />

          <Scene key="addPerson" title="NY PERSON" component={AddPerson}/>

          <Scene key="showPattern"
            title="INSTRUKTIONER"
            onRight={() => firebase.auth().signOut().then( () => Actions.auth())}
            rightTitle="Logga ut"
            component={ShowPattern}/>

          <Scene key="designs" title="DESIGNS" component={Designs}/>
        </Scene>

      </Scene>
    </Router>
  );
};

export default roterComponent
