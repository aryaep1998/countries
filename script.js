function fetchData() {
  let countryName = country_name.value

  fetch(`https://restcountries.com/v2/name/${countryName}?fullText=true`).
    then(res=>{
      if(res.ok) {
        return res.json()
      }
      else{
        throw new Error("failed")
      }
    }).
    then(data=>populateValues(data)).catch(error=>alert("failed to fetch data"))
}

function populateValues(country) {
  //console.log(country[0]);


  let countryName = country[0].name;
  let countryFlag = country[0].flag;
  let countryCurrencyPopulation = country[0].population;
  let countryCurrencyName = country[0].currencies[0].name;
  let countrySymbol = country[0].currencies[0].symbol;
  let countryLanguages = country[0].languages[0].name;
  let countryCapital = country[0].capital;
  let html_data = `<div class="card" style="width: 18rem;">
        <img src="${countryFlag}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Country Name: ${countryName}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Population: ${countryCurrencyPopulation}</li>
          <li class="list-group-item">Country Currency Name: ${countryCurrencyName}</li>
          <li class="list-group-item">Country Currency Symbol: ${countrySymbol}</li>
          <li class="list-group-item">Country Language: ${countryLanguages}</li>
          <li class="list-group-item">Country Capital: ${countryCapital}</li>
        </ul>
        
      </div>`

  document.querySelector("#result").innerHTML=html_data

}




