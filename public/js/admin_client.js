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
        admin.innerHTML = admin.innerHTML + `<div class="admin-item"><p>${subscriber.firstname}</p><p>${subscriber.lastname}</p> <p>${subscriber.email}</p></div>`;
    })
  })

  //  catch any errors that fall through the .then statements
  .catch((error) => {
    console.log(error);
  });
