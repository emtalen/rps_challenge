## RPS Challenge

### Authors
[Emma-Maria Thalen](https://github.com/emtalen)

### Built with
**Front End:** React v.16.12.0, | CSS 
**Testing frameworks:** Cypress
**Deployed at:** [Netlify](https://scissorsrockpapergame.netlify.com/)

### The code
This application is a digital version of the traditional game Rock, Paper, Scissors. The player can play against the computer that randomly chooses a weapon and either the player or the computer gets score for each win. 
The traditional rules apply to this game so rock beats scissors, scissors beats paper and paper beats rock. 

### Dependencies
- Yarn
- React
- Cypress
- Chance.js

### Setup
To test this application, fork the repo to your own GitHub account and clone it to your local workspace.

Install all of the dependencies:

``` $ yarn install ```

Start cypress and run the feature tests:

``` $ yarn run cy:open ```
``` $ yarn start ```

### User Stories
As a user
In order to kill some time
I would like to be able to play rock, paper, scissors

As a user
In order to pick a weapon
I need to be able to choose a weapon 

As a user
In order to see if I can win over the computer
I would like the scores to be counted

### Updates/Improvements
- Fix tests so that they correctly stub out the computer selection
- Add/fix and correct the styling
- Add unit tests 
- Finish the feature where the user can choose between playing a simple game and playing best out of three

### License
##### MIT-license

### Acknowledgement

[Thomas Ochman](https://github.com/tochman/) - for getting me back on my feet and back on the right track
[Oliver Ochman](https://github.com/oliverochman/) For helping me with the functionality to count the scores