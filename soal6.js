
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


// buat var tbody untuk panggil tag tbody
const tbody = document.querySelector('tbody')

// buat var untuk menampung fungsi
// jadikan fungsi asynchronous karena keluaran fetch api merupakan promise
const loadData = async () => {
  let usersData = [];

  // try & catch untuk handle async & await
  try {
    const url = await fetch('https://jsonplaceholder.typicode.com/users'); //await untuk fetch api
    usersData = await url.json();  //await untuk const url nya
    console.log(usersData);
    loadUserData(usersData);
  } catch (err) {
    console.log(err)

  }
}

const loadUserData = (data) => {
  let no = 1;
  const output = data.map((el) => {
    return `
    <tr>
          <td>` + (no++) + `</td>
          <td>${el.name}</td>
          <td>${el.username}</td>
          <td>${el.email}</td>
          <td>${el.address}</td>
          <td>${el.address.city}</td>
          <td>${el.phone}</td>
          <td>${el.website}</td>
          <td>${el.company}</td>
    </tr>
    `
  })
  tbody.innerHTML = output
}

loadData();



//cara lain

// function loadData() {

//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => {
//       let output = ''
//       let no = 1;
//       data.forEach(el => {
//         output += `
//         <tr>
//           <td>` + (no++) +`</td>
//           <td>${el.name}</td>
//           <td>${el.username}</td>
//           <td>${el.email}</td>
//           <td>${el.address}</td>
//           <td>${el.phone}</td>
//           <td>${el.website}</td>
//           <td>${el.company}</td>
//         </tr>
//         `
//       });
//       document.querySelector('tbody').innerHTML = output
//     });

// }
// loadData;


