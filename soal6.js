
// data : {
//   id:
//   name:
//   username:
//   email:
//   address: {
//     street:  
//     suite:
//     city:
//     zipcode:
//     geo:{
//       lat:
//       lng:
//     }  
//   }
//   phone:
//   website:
//   company: {
//     name:
//     catchPhrase:
//     bs:
//   }
// } 
  
// function getData(callback){
//   const allData = document.getElementById('data');
//   allData.innerHTML = callback;
// }

// getData
// const main = document.getElementById('main');
// const bigData = document.createElement('a');

// bigData.text = 'Ini banyak banget datanya'
// bigData.href = 'https://google.com'

// main.appendChild(bigData);


fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    const names = data.map(user => user.name);
    const usernames = data.map(user => user.username);
    const emails = data.map(user => user.email);
    const addresses = data.map(user => user.address);
    
    //object address
    const addressStreets = data.map(user => user.address.street);
    const addressSuites = data.map(user => user.address.suite);
    const addressCities = data.map(user => user.address.city);
    const addressZipcodes = data.map(user => user.address.zipcode);
    const addressGeos = data.map(user => user.address.geo);

    const phones = data.map(user => user.phone);
    const websites = data.map(user => user.website);
    const companies = data.map(user => user.company);
    
    //object companies
    const companyNames = data.map(user => user.company.name);
    const companyCatchPhrases = data.map(user => user.company.catchPhrase);
    const companyBses = data.map(user => user.company.bs);


    //sepertinya bisa menggunakan spread operator
    console.log(names);
    console.log(usernames);
    console.log(emails);
    console.log(addresses);
    
    console.log(addressStreets);
    console.log(addressSuites);
    console.log(addressCities);
    console.log(addressZipcodes);
    console.log(addressGeos);

    console.log(phones);
    console.log(websites);
    console.log(companies);
    
    console.log(companyNames);
    console.log(companyCatchPhrases);
    console.log(companyBses);


    
  

                             
  })
//   .catch(error => console.error(error));   

  // document.getElementById("dataJSON").innerHTML = "Hello World!";