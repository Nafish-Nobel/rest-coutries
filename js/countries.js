const loadCountries = () => {
    //api link
    fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(data => displayCountries(data));
    
}

const displayCountries = countries => {
    console.log(countries[0]);
    const container = document.getElementById('countries');
    const countryHTML = countries.map(country => getCountryHTML(country));

    // container.innerHTML = countryHTML[0] // singel for singel data

    container.innerHTML = countryHTML.join(' '); // for all data 
    console.log(countryHTML);
}

const getCountryHTML = country =>  {
    //1st type
    
    // return `
    // <div class="country">
    // <h2>${country.name}</h2>
    // <h4>Capital: ${country.capital}</h4>
    // <img class="img-fluid" src="${country.flag}">
    // </div>
    // `

    //second type

    const { name, capital, flag } = country;
    return `
    <div class="country">
    <h2>${name}</h2>
    <h4>Capital: ${capital}</h4>
    <img class="img-fluid" src="${flag}">
    </div>
    `

}

//call data
loadCountries();