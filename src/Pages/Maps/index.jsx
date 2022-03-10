import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import PropTypes from 'prop-types';


import markerImage from '../../assets/marker.png';
import backImage from '../../assets/back.png';


import {getPixelSize} from '../../utils/utlis';

import {
  Container,
  LocationBox,
  LocationText,
  LocationTimeBox,
  LocationTimeText
} from './styles';

import { Directions } from '../../Components/Directions';
import {SearchInput} from '../../Components/SearchLocation'

//Container Information object

export function Maps({
  region,
  destination,
  location,
  onLocationSelected,
  onPressBackButton,
}){

  //useRef Cria um obj mutavel 

  const inputEl = React.useRef(null);



  // estado SALVE/UPADETE Tempo do usuario;
  const[timeToDestine, setTimeToDestine] = React.useState(0);

  function handleOnReady ({
    coordinates,
    duration,
  }){
    setTimeToDestine(Math.floor(duration));


    inputEl.current.fitToCoordinates(coordinates, {
      edgePadding:{
        right: getPixelSize(50),
        left: getPixelSize(50),
        top: getPixelSize(50),
        bottom: getPixelSize(350),
      },
    });
  };

  return (
    <Container>
        <MapView
          style={{flex:1}}
          ref={inputEl}
          region={region}
          showsUserLocation
          loadingEnabled
        >

        {destination && (
          <>
            <Directions
              origin={region}
              destination={destination}
              onReady={handleOnReady}
            />

            <Marker
              coordinates={destination}
              anchor={{x: 0, y: 0}}
            >
              <LocationBox>
                  <LocationText>{location}</LocationText>
              </LocationBox>

            </Marker>

            <Marker
              coordinates={destination}
              anchor={{x: 0, y: 0}}
              image={markerImage}
            >
               <LocationBox>
                <LocationTimeBox>
                  <LocationTimeText>{timeToDestination}</LocationTimeText>
                  <LocationTimeTextSmall>min</LocationTimeTextSmall>
                </LocationTimeBox>
                <LocationText>{destination.title}</LocationText>
              </LocationBox>
            </Marker>
          </>
        )}
        </MapView>

        {destination ? (
        <Fragment>
          <Back onPress={onPressBackButton}>
            <Image source={backImage} />
          </Back>
          <Details />
        </Fragment>
      ) : (
        <SearchInput onLocationSelected={onLocationSelected} />
      )}
    </Container>
  );
}