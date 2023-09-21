# Yoga Flip

(Developer: Katie Dunne)

![AmIResponsive Image](docs/amiresponsive_screenshot.webp)

## Live website

Link to live website: [Yoga Flip](https://ksdunne.github.io/yoga_flip/)

## Purpose of the project

Yoga Flip is a version of the classic card memory game. It provides value to a user of any age through an educational aspect. The educational aspect is that the game gives the name of the yoga pose shown on the cards, after each successful match. Therefore, the user is learning the name of each yoga pose as they are playing the game. The game is also challenging, because the player is playing against a countdown timer. When the timer reaches zero the grid playing area fades away and a 'Time Out!' slogan appears. There are also social links in the footer of the main game page to encourage the user to connect with a yoga studio business, which offers in-person classes. The color theme of yoga flip was specifically chosen to provide feel-good and energizing emotions. Bright anchor colors were chosen. These are; purple, yellow, light pink, bright pink and bright green. These colors were also inspired by accessible color palettes. The whole theme of this project is based around energising Vinyasa yoga.

## Table of contents

- [User experience (UX)](#user-experience-ux)
- [User stories](#user-stories)
- [Features](#features)
- [Future features](#future-features)
- [Design](#design)
- [Wireframes](#wireframes)
- [Technology](#technology)
- [Testing](#testing)
- [Deployment](#deployment)
- [Credits](#credits)
- [Acknowledgements](#acknowledgements)

## User experience (UX)

### Key project goals

- Create an interactive memory game with a yoga theme that uses feel-good colors and striking images, while always keeping accessibility in mind
- Make a game that provides value to the user through an educational aspect
- Make a game that lets the user initiate the countdown timer and gives feedback through the display of each yoga pose name, when cards are successfully matched
- Make the game responsive on multiple screen sizes
- Use a defensive design
- Show the user is making progress when they play the game a couple of times, through the use of local storage
- Create a real world aspect, by putting links to socials in the footer, because users might be interested in booking classes at an in-person yoga studio

### Target audience

- Users of any age that would like to play a fun game online
- People of any age that would like to practice their memory skills
- People that are interested in yoga
- People that are interested in learning the names of popular yoga poses
- People that might be interested in joining an in-person yoga class

### User requirements and expectations

- An accessible website / game for all users
- A visually appealing memory game and intuitively structured website / game. For example, there is feedback when cards are clicked, rules button is easy to find and reset button is easy to find
- A webpage that is responsive on all screen sizes
- A website / game that loads quickly on all devices and connections
- An ability to track the amount of moves made
- A fun way to be challenged against the computer, with a countdown timer which leads to a time-out page
- Feedback when the user wins a game, through the use of an animation
- A way to learn the names of popular yoga poses
- An ability to reset the board, move-number and timer
- A defensive design, so that the user does not reset their game prematurely by accident
- A way to see if they are they improving as they play the game a few times
- Ability to quickly find social links which would help them find a yoga business for classes

## User stories

- As a site visitor, I am first assessing if this is an intuitive and eye-catching game that I would like to play
- As a site visitor, I will initially see a grid style game with 16 cards.
- As a site visitor, I will initially be able to see the back-side of the cards
- As a site visitor, I will see that the timer starts when I flip the first card
- As a site visitor, I will be able to click two cards at a time. They will flip over and stay flipped over if I have matched them
- As a site visitor, I will see that a move is logged when the second card is flipped
- As a site visitor, I will see that the countdown timer stops once I finish matching all of the 16 cards on the grid
- As a site visitor, I will be able to click a button that says "rules" and the rules of the game will pop up. This will pop up via a modal
- As a site visitor, I will be able to close this modal whenever I want and return to where I was in the game
- As a site visitor, I will be able to click a "reset" button at any time during the game
- As a site visitor, I will make use of the defensive design in the reset button by confirming what I would like to do, whether that is continue playing the game I was playing or reset all cards, timer and current moves
- As a site visitor, I will be able to see links in the footer to social media, where I can search for yoga studios if I would like to do that. This will encourage me to a local yoga studio for in-person lessons
- As a site visitor, I will get feeback when the countdown timer reaches zero and I will get feed back when I win a game. Both of these feedback mechanisms will be animations
- As a site visitor, I can see the max amount of moves I made in the last few times I played the game through local storage and I can compare this number to my current move number
- Overall, as a site visitor, the value I get from this site is; I have fun, I am challenged by the countdown timer, I learn the names of the yoga poses and I can also find ways to contact an in-person yoga studio

## Features

### Main Game Page

#### Title of game with icon

#### Moves tracker

#### Countdown timer

#### Grid of 16 cards

#### Name of pose on the cards that have just been matched

#### Rules button

#### Reset current game button with a defensive design

#### Responsive compare board with a local storage feature

#### Footer with social links and logo

#### Attractive background that doesn't obstruct foreground

#### Favicon

### Modals and animations

#### Rules modal

#### Rules modal play button

#### Reset modal

#### Reset modal buttons for continue play or reset

#### Time out page

#### Win page

## Future Features

- An option to input a username
- A limited number of tries before the game is over
- A 404 page
- A video with the yoga moves beside the game with responsive design to take up the screen real estate on monitor
- Fun sounds when the cards are flipped
- Fun sounds when the cards are matched
- A fun sound when you finish the game
- Music playing while you play the game

## Design

### Design Choices

### Typography

Google Fonts were used to import Poppins and Oxygen fonts into styles.css. A sans-serif generic font was chosen as a back-up. These were chosen as they are easy to read and sans-serif fonts are common in modern website design.

### Color

Since the theme for this game is energising Vinyasa yoga I chose bright colors that give the user an energetic feeling. I also kept accessibility in mind when choosing colors and I used a color blind friendly palette for inspiration. Colors were adapted from palettes generated using [Venngage's accessible color palette generator](https://venngage.com/tools/accessible-color-palette-generator).

#### Primary accessible color palette

The main colors I am taking from the primary color palette are: White / Purple / Yellow

![Primary accessible color palette](docs/primary_accessible_colors.webp)

#### Secondary accessible color palette

The main color I am taking from the secondary color palette is: Pink

![Secondary accessible color palette](docs/secondary_accessible_colors.webp)

## Wireframes

### Index page wireframes

![Index iPhone SE](docs/wireframes/iphone_index.png)

![Index Tablet](docs/wireframes/tablet_index.png)

![Index Monitor](docs/wireframes/monitor_index.png)

### Rules modal wireframes

![Rules Modal iPhone SE](docs/wireframes/iphone_rules_modal.png)

![Rules Modal Tablet](docs/wireframes/tablet_rules_modal.png)

![Rules Modal Monitor](docs/wireframes/monitor_rules_modal.png)

### Are you sure modal wireframes

![Are You Sure Modal iPhone SE](docs/wireframes/iphone_sure_modal.png)

![Are You Sure Modal Tablet](docs/wireframes/tablet_sure_modal.png)

![Are You Sure Modal Monitor](docs/wireframes/monitor_sure_modal.png)

### Time out screen wireframes

![Time out screen iPhone SE](docs/wireframes/iphone_time_out_screen.png)

![Time out screen Tablet](docs/wireframes/tablet_time_out_screen.png)

![Time out screen Monitor](docs/wireframes/monitor_time_out_page.png)

### Win screen wireframes

![Win screen iPhone SE](docs/wireframes/iphone_win_screen.png)

![Win screen Tablet](docs/wireframes/tablet_win_screen.png)

![Win screen Monitor](docs/wireframes/monitor_win_page.png)

## Technology

### Languages

- HTML
- CSS
- JavaScript

### Frameworks & Tools

- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)
- [Visual Studio Code IDE](https://code.visualstudio.com/)
- [Balsamiq](https://balsamiq.com/wireframes/)
- [Favicon](https://favicon.io/favicon-generator/#google_vignette)
- [Venngage's Accessible color palette generator](https://venngage.com/tools/accessible-color-palette-generator)
- [Google Fonts](https://fonts.google.com/)
- [Font Awesome](https://fontawesome.com/)
- [W3C Markup Validation Service](https://validator.w3.org/)
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
- [Google Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Google Maps](https://www.google.com/maps)
- [YouTube](https://www.youtube.com/)

## Testing

### Code validation

#### HTML validation

#### CSS validation

#### JS Hint

### Accessibility and Lighthouse

### Manual testing

#### Responsiveness of features tested using Chrome DevTools

#### Browser compatibility testing

#### Testing all links on the site

### Feature testing table

### User story testing

### Fixed bugs

- Height was specified in header style and the content then spilled over to the next element. This was fixed by removing the specific height and then the header height just changed automatically to fit the content which was much better.

### Unfixed bugs

### Supported screens and browsers

#### Screens

- iPhone SE, 375px wide. Also looks good down to 300px according to devtools
- iPad Mini, 768px wide
- Nest Hub Max, 1280px wide

#### Browsers

- Chrome
- Edge
- Firefox
- Safari
- Opera

## Deployment

### How this site was deployed

- In the GitHub repository, go to the Settings tab, then choose Pages from the left hand menu
- Make sure that source is set to 'Deploy from Branch'
- Main branch needs to be selected and folder should be set to root
- Under branch, click save
- Revisit the code tab and wait a few minutes for the build to finish, then refresh your repository
- There will be an option to click on 'github-pages', on the right hand side, in the environments section
- Click on 'view deployment' to see the live site.

  The live link can be found here -

## Credits

### Code

Love Maths

[Grid Game Medium Tutorial](https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae/)

[CI Student Memory Card Game 1](https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/tree/master)

[CI Student Memory Card Game 2](https://github.com/Kathrin-ddggxh/CI-PP2_memory-card-game)

### Media

### Inspiration from other memory game websites

### Inspiration from other yoga websites

### Inspiration for structure from other CI students

## Acknowledgements

Thank you to friends, family and pets for the massive support. Also thank you to my mentor and the leader of our CI cohort :sparkles:
