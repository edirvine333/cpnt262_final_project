//  fetch() JSON data of gallery to be used in a forEach() to display the gallery

'use strict';

const endpoint = '/api/v0/gallery';

fetch(endpoint)

  //  standard error handling for failed fetch() request
  .then((res) => {
    if(!res.ok) {
      throw new Error('Not 200 OK');
    }
    return res.json();
  })

  //  forEach() loop to display list of subscribers
  .then( (dogs) => {
    
    let figure = document.querySelector('.gallery'); //  grips to <main> element in html

    dogs.forEach( dog => {

      figure.innerHTML = figure.innerHTML + `<div> <img src="${dog.img_path}" alt="Picture of Charlie the dog"></img>  <a href="/gallery-item/${dog.id}">${dog.name}</a> </div>`;

    })

  })

  //  catch any errors that fall through the .then statements
  .catch( (error) => {
    console.log(error);
  });

