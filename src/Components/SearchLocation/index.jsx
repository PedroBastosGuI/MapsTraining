import React from "react";
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'; //Auto Complete 
import stylesCustom from './styles';
import PropTypes from 'prop-types'
import {View} from 'react-native'

// API google maps functionality


const API_GET_POINTS_MAPS = {
    key:'AIzaSyAPGIUTqAko4_AgLfqWLO2ld7mPQx-rRwY',
    language:'pt'
};


export function SearchInput({onLocationSelected}) {
    const [searchFocused, setSearchFocused] = React.useState(false);


    return(
        <GooglePlacesAutocomplete
            placeholder="Para onde Você quer ir Capeta"
            onPress={onLocationSelected}
            query={API_GET_POINTS_MAPS}
            textInputProps={{
                onFocus: () => {
                setSearchFocused(true);
                },
                onBlur: () => {
                setSearchFocused(false);
                },
                autoCapitalize: 'none',
                autoCorrect: false,
            }}
            listViewDisplayed={searchFocused}
            fetchDetails
            debounce={200}
            enablePoweredByContainer={false}
            styles={stylesCustom}
            />
    );
};


SearchInput.propTypes = {
    onLocationSelected: PropTypes.func.isRequired,
  };
  
SearchInput.defaultProps = {};


