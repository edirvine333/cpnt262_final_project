# CPNT 262 - FINAL PROJECT - HOT HOUNDS PHOTOGRAPHY

##  DESCRIPTION OF PROJECT 

A multi-page website for a photo studio dedicated to taking pictures of dogs.  The site will include:  
  -  a landing page displaying some information about the company  
  -  a subscription page allowing a user to subscribe to a monthly newsletter
  -  a team page showing the four photographers at the studio  
  -  a gallery page showing example photos, where each photo can be clicked on to display it on an individual page 
  -  an administraion page showing the list of subscribers to the newsletter  

##  REPOSITORY AND DEPLOYMENT INFORMATION  

GitHub Repo:  [cpnt262_final_project](https://github.com/edirvine333/cpnt262_final_project)  
Heroku App:  [sait-wbdv-final-project](https://sait-wbdv-final-project.herokuapp.com/)  

Repository Maintainer:  Ed Irvine  
Repository Collaborators:  Norvillie Villaruel, Karen Sule, Michael Hintz  

## NOTES

### Routes  
- '/'  
- '/subscribe'  
- '/admin'  
- '/gallery'  
- '/gallery/:id'  
- '/team' 

### APi's
**Get request**
- '/api/v0/gallery' -->retrieve all images from database
- '/api/v0/subscribers'  -->retrieve all subscribers from database.
- '/api/v0/members' -->retrieve all members from database.

**POST request**
- POST: '/api/v0/subscriber'  -->Save data to database

### NPM Packages  
- ejs    
- dotenv    
- mongoose    
- express 
- cors   


## ATTRIBUTIONS

Photos Courtesy of Joshua Sacopla  

### LICENSE  
Licensed under a Creative Commons [CC-BY-NC-4.0 license](https://creativecommons.org/licenses/by-nc/4.0/).  
Copyright Hot Hounds 2021.


