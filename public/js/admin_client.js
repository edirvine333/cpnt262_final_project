//  fetch() JSON data of subscribers database to be used in a forEach() to display the subscribers

'use strict';

const endpoint = //  api/v0/subscribers

fetch(endpoint)

  //  standard error handling for failed fetch() request
  .then((res) => {
    if(!res.ok) {
      throw new Error('Not 200 OK');
    }
    return res.json();
  })

  //  forEach() loop to display list of subscribers
  .then( () => {

    // forEach() 

  })

  //  catch any errors that fall through the .then statements
  .catch( (error) => {
    console.log(error);
  });

