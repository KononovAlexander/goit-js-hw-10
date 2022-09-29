

function fetchCountries(name) {
    return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
   
        .then(response =>{
              if (response.status !== 404) {
                    return response.json();
              } else if (response.status === 404) {
                  return Promise.reject(response.status);
            }

        })
        // .then(country => {
        //     console.log(country);
        //     return country; 
        // })
        // .catch((error) => {
        //     throw error;
        // });   
}
export {fetchCountries}