//  fetch() JSON data of subscribers database to be used in a forEach() to display the subscribers

'use strict';

fetch('//localhost:3000/api/v0/subscribers')

  //  standard error handling for failed fetch() request
  .then((res) => {
    if(!res.ok) {
      throw new Error('Not 200 OK');
    }
    return res.json();
  })

  //  forEach() loop to display list of subscribers
  .then( (members) => {
    
    let main = document.querySelector('.admin'); //  grips to <main> element in html

    members.forEach( subscriber => {

      main.innerHTML = main.innerHTML + `<p>${subscriber.firstname}</p> <p>${subscriber.lastname}</p> <p>${subscriber.email}</p>`;

    })

  })

  //  catch any errors that fall through the .then statements
  .catch( (error) => {
    console.log(error);
  });
