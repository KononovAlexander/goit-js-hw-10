function renderCountryCard (countries) {
    const [{ name, flags, capital, population, languages }] = countries;

    return `<ul class="country-data">
                <li class="country-data-item"><img src=${flags.svg} alt=${name.official}><h2>${name.official}</h2></li>
                <li class="country-data-item"><p><span>Capital:</span> ${capital}</p></li>
                <li class="country-data-item"><p><span>Population:</span> ${population}</p></li>
                <li class="country-data-item"><p><span>Languages:</span> ${Object.values (languages)}</p></li>
            </ul>`
} 
export {renderCountryCard}