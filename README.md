# Yoga Flip

(Developer: Katie Dunne)

![AmIResponsive Image](docs/amiresponsive_screenshot.webp)

## Live website

Link to live website: [Whisper Riding School](https://ksdunne.github.io/yoga_flip/)

## Purpose of the project

Yoga Flip is a version of the classic card memory game. It provides value to a user of any age through an educational aspect. The educational aspect is that the game gives the name of the yoga pose shown on the cards, after each successful match. Therefore, the user is learning the name of each yoga pose as they are playing the game. The game is also challenging, because the player is playing against a countdown timer. When the timer reaches zero the grid playing area fades away and a 'Time Out!' slogan appears. There are also social links in the footer of the main game page to encourage the user to connect with the yoga studio business, which offers in-person classes. The color theme of yoga flip was specifically chosen to provide feel-good and energizing emotions. Bright anchor colors were chosen. These are; purple, yellow, pink and white. The whole theme of this project is based around energising Vinyasa yoga.

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

### Target audience

### User requirements and expectations

## User stories

- As a site visitor, I am first assessing if this is an intuitive and eye-catching game that I would like to play
- As a site visitor, I will initaially see a grid style game with 16 cards. I will initailly be able to see the back-side of the cards
- As a site visitor, I will be able to click two cards at a time. They will flip over and stay flipped over if I have matched them
- As a site visitor, I will see that the timer starts when I flip the first card
- As a site visitor, I will see that a move is logged when the second card is flipped
- As a site visitor, I will see that the timer stops once I finish matching all of the 16 cards on the grid
- As a site visitor, I will be able to click a button that says "challenge" to get a random yoga pose to try at home for fun. This will pop up via a modal.
- As a site visitor, I will be able to close this modal whenever I want
- As a site visitor, I will be able to click a "reset" button at any time during the game to flip all the cards over to start again
- As a site visitor, I will be able to see links in the footer for social media sites to a specific yoga studio. This will encourage me to go there for in-person lessons
- As a site visitor, the value I get from this site is; I have fun in a time of boredom, I learn the names of the yoga poses, if my fitness allows I get some activity in my day by doing the yoga pose challenge and I can also find ways to contact an in-person yoga studio

## Features

### Main Game Page

#### Title of game with icon

#### Grid of 16 cards

#### Moves tracker

#### Timer

#### Name of pose on the cards that have just been matched

#### Challenge modal button

#### Reset button

#### Footer with social links

### Modal

#### Challenge instructions

#### Name of a pose

#### Picture of a pose

#### Button to close modal

## Future Features

- 'Congratulations you finished the game!' modal with moves count and time it took you to finish the game
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

### Media

### Inspiration from other memory game websites

### Inspiration from other yoga websites

### Inspiration for structure from other CI students

## Acknowledgements

Thank you to friends, family and pets for the massive support. Also thank you to the leader of our CI cohort :sparkles:
