//  fetch() JSON data of members database to be used in a forEach() to display the team members

'use strict';

fetch('localhost:3000/api/v0/members')

  //  standard error handling for failed fetch() request
  .then((res) => {
    if(!res.ok) {
      throw new Error('Not 200 OK');
    }
    return res.json();
  })

  //  forEach() loop to display pictures and bios of team
  .then( (members) => {
   
    const team = document.querySelector('.team')
    members.forEach( member => {
      team.innerHTML = team.innerHTML +  `<div class="team-item"><img src="${member.profilePic}" alt="Picture of team member"></img><figcaption>${member.name}</figcaption></div>`;
    })

  })

  //  catch any errors that fall through the .then statements
  .catch( (error) => {
    console.log(error);
  });
