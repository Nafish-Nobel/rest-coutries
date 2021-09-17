const loadCountries = () => {
    //api link
    fetch("https://restcountries.eu/rest/v2/all")

        .then(res => res.json())
        .then(data => dislayCountrues(data));
}

const displayCountries = countries => {
    consolee.log(countries[0]);
    const container = document.getElementById('countries');
    const countryHTML = countries.map(country => getCountryHTML(country));
    country.innerHTML = countryHTML.join(' ');
}

const getCountryHTML = country => {
    return`
    <div class= "country">
    <h2>${country.name}</h2>
    <h4>Capital:${country.capital}</h4>
    <img class="" src = "${country.flag}">
    
    </div>
    `
}

loadCountries()