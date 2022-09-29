function renderCountryList(countries) {
    let countryList = '';
    for (let country of countries) {
        let { name, flags } = country;
         countryList += `<li class="country-list-item"><img src=${flags.svg} alt=${name.official}> <p>${name.official}</p></li>`;
    }
    return countryList;    
}
export {renderCountryList};