//  The data object for the Members database to be imported into MongoDB Atlas

const members = [
  
  {
   name: "Ed Irvine",
   profilePic: "/images/member001.jpg",
   title:  "Administrative Assistant",
   bio: "Employed with Hot Hounds Photography for over seven years, Ed manages the office and performs the administrative duties of the company."
  },

  {
    name: "Norvillie Villaruel",
    profilePic: "/images/member002.jpg",
    title:  "Technical Lead",
    bio: "Norvillie maintains all the equipment required by the company, and doubles as a photgrapher when busy."
  },

  {
    name: "Karen Sule",
    profilePic: "/images/member003.jpg",
    title:  "Photographer",
    bio: "Karen specializes in digital photgraphy and mixes traditional techniques with evoloving technology to create beautiful art."
  },

  {
    name: "Michael Hintz",
    profilePic: "/images/member004.jpg",
    title:  "Photo Editing / Data Management",
    bio: "Michael uses cutting-edge editing software and the best equipment to produce high quality output."
  }

]

//  Defines the script as a module for loading where required
module.exports = members