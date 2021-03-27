//  fetch() JSON data of members database to be used in a forEach() to display the team members

'use strict';

const endpoint = '/api/v0/members';

fetch(endpoint)

  //  standard error handling for failed fetch() request
  .then((res) => {
    if(!res.ok) {
      throw new Error('Not 200 OK');
    }
    return res.json();
  })

  //  forEach() loop to display pictures and bios of team
  .then( (members) => {
    console.log(members)
    let figure = document.querySelector('figure'); //  grips to <figure> element in html

    members.forEach( member => {
      
      figure.innerHTML = figure.innerHTML + `<img src="${member.profilePic}" alt="Picture of team member"></img><figcaption>${member.name}</figcaption>`;

    })

  })

  //  catch any errors that fall through the .then statements
  .catch( (error) => {
    console.log(error);
  });
