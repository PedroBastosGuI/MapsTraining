import React from 'react';
import PropTypes from 'prop-types';
import MapViewDirections from 'react-native-maps-directions';


export function Directions({destination,origin,onReady}){
  return (
    <MapViewDirections
        origin={origin}
        destination={destination}
        onReady={onReady}
        apikey="AIzaSyAPGIUTqAko4_AgLfqWLO2ld7mPQx-rRwY"
        strokeWidth={3}
        strokeColor="000"
    />
  );



//PropType passar o tipo do parametro PORQUE NAO USAR A PORRA DO TS QUE JA FAZ ISSO;

//Depois usar TS em nome de Jesus amem


Directions.propTypes = {
    destination: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
    }),
    origin: PropTypes.object,
    onReady: PropTypes.func,
};



Directions.defaultProps = {
    duration:{
        latitude:0,
        longitude:0,
    },

    origin: {},
    onReady: () => undefined,
}

}