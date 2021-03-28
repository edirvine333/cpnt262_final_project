//  fetch() JSON data of subscribers database to be used in a forEach() to display the subscribers

'use strict';

fetch('/api/v0/subscribers')

  //  standard error handling for failed fetch() request
  .then((res) => {
    if(!res.ok) {
      throw new Error('Not 200 OK');
    }
    return res.json();
  })

  //  forEach() loop to display list of subscribers
  .then((members) => {    
    let admin = document.querySelector('.admin'); //  grips to <main> element in html
    members.forEach( subscriber => {
<<<<<<< HEAD
      main.innerHTML += `<p class="sub-name">${subscriber.firstname}, ${subscriber.lastname}</p><br><p class="sub-email">${subscriber.email}</p>`;
=======
        admin.innerHTML = admin.innerHTML + `<div class="admin-item"><p>${subscriber.firstname}</p><p>${subscriber.lastname}</p> <p>${subscriber.email}</p></div>`;
>>>>>>> 457070e519e3b6de388b8c9ddec040a288be765b
    })
  })

  //  catch any errors that fall through the .then statements
  .catch((error) => {
    console.log(error);
  });
