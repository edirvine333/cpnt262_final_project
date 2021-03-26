//  fetch() JSON data of gallery to be used in a forEach() to display the gallery

'use strict';

const endpoint = //  api/v0/gallery

fetch(endpoint)

  //  standard error handling for failed fetch() request
  .then((res) => {
    if(!res.ok) {
      throw new Error('Not 200 OK');
    }
    return res.json();
  })

  //  forEach() loop to display gallery
  .then( () => {

    // forEach() 

  })

  //  catch any errors that fall through the .then statements
  .catch( (error) => {
    console.log(error);
  });

