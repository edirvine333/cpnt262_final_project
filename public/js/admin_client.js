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
    let main = document.querySelector('.admin'); //  grips to <main> element in html
    members.forEach( subscriber => {
      main.innerHTML += `<p class="sub-name">${subscriber.firstname}, ${subscriber.lastname}</p><br><p class="sub-email">${subscriber.email}</p>`;
    })
  })

  //  catch any errors that fall through the .then statements
  .catch((error) => {
    console.log(error);
  });
