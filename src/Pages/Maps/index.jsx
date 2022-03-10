import React from 'react';
import MapView from 'react-native-maps';
import PropTypes from 'prop-types';


import markerImage from '../../assets/marker.png';
import backImage from '../../assets/back.png';

import {
  Container
} from './styles';

export function Maps(){
  return (
    <Container>
        <MapView/>


    </Container>
  );
}