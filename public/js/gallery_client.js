//  fetch() JSON data of gallery to be used in a forEach() to display the gallery

'use strict';

fetch('/api/v0/gallery')

  //  standard error handling for failed fetch() request
  .then((res) => {
    if(!res.ok) {
      throw new Error('Not 200 OK');
    }
    return res.json();
  })

  //  forEach() loop to display gallery
  .then((dogs) => {    
    let figure = document.querySelector('.gallery'); //  grips to <main> element in html
    dogs.forEach( dog => {
      figure.innerHTML = figure.innerHTML + `<div class="gallery-list-item"><img src="${dog.img_path}" alt="Picture of Charlie the dog"></img><a href="/api/v0/gallery-item/${dog.id}"> <p>${dog.description}</p>${dog.name}</p><br><p>Photo By ${dog.credit}</p></a> </div>`;
    })
  })

  //  catch any errors that fall through the .then statements
  .catch((error) => {
    console.log(error);
  });

