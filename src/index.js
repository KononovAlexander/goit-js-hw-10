import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce'
const DEBOUNCE_DELAY = 300;

import { getRefs } from './js/getRefs.js';
import { clearInfo } from './js/clearInfo.js';
import {fetchCountries} from './js/fetchCountries.js';
import {renderCountryCard} from './js/renderCountryCard.js'
import {renderCountryList} from './js/renderCountryList.js'
const { userSearch, countryList, countryInfo } = getRefs();
function getContries() {

    clearInfo(userSearch.value.trim(), countryList, countryInfo);
            
    fetchCountries(userSearch.value.trim())
        .then((countries) => {
            if (countries.length > 10) {
                Notiflix.Notify.info('Too many matches found. Please enter a more specific name.', 'Okay');
            }
            if (countries.length < 10 && countries.length >= 2) {
                clearInfo('', countryList, countryInfo);
                countryList.insertAdjacentHTML("afterbegin", renderCountryList(countries));
            }
            if (countries.length === 1) {
                clearInfo('', countryList, countryInfo);
                countryInfo.insertAdjacentHTML("afterbegin", renderCountryCard(countries));
            }            
        }).catch((error) =>{
            Notiflix.Notify.failure('Oops, there is no country with that name');
        });
    
}

userSearch.addEventListener('input', debounce(getContries, DEBOUNCE_DELAY));




