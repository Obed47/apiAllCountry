//fetching data with ajax from an api and showing the names of all countries
//uses xmlHttpRequest to fetch with the api's url
//the following example shows example with shoeing names of all countries
//search for countries rest APi and replace the url in the js code
//search extension called json view holder
function showCountries()
{
    let xhr = new  XMLHttpRequest()
    xhr.open('GET','https://restcountries.com/v3.1/all',true)
    //true above just to specify that its an assychronous function
    xhr.onload = function(){
        if(xhr.status==200)
            {
                console.log("success")
                //trying to get and log into tht html file the country name and flag
                let countries=JSON.parse(this.response)
                console.log(countries[1].name.common)
                 
                
                //this simply responds the result as a json file to make it more organised as objects
                countries.forEach(country => {
                   const countryCard= document.createElement('div')
                   countryCard.innerHTML=country.name.common
                   document.getElementById('allCountries').appendChild(countryCard)
                });
            }
            else{
                console.log('error')
            }
    }
    xhr.send()
}
