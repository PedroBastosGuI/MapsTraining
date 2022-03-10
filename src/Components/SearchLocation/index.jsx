import react from "react";
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'; //Auto Complete 
import stylesCustom from './styles';

import {View} from 'react-native'

// API google maps functionality


const API_GET_POINTS_MAPS = {
    key:'AIzaSyAPGIUTqAko4_AgLfqWLO2ld7mPQx-rRwY',
    language:'pt'
};


export function SearchInput({onLocationSelected}) {


    return(
        <GooglePlacesAutocomplete
            placeholder="Para onde Você quer ir Capeta"
                    
        />
    );
};

