# Assignment 2

The assignment shows the Frontend implementation of four pages of my web application "HappyPaws". These pages are Register, Home Page/Landing Page, Donation page and Share your story page.

* Date Created: 14 Jun 2020
* Last Modification Date: 14 Jun 2020

## Authors

* [Moni Shah](mn676765@dal.ca) 


### Prerequisites

To start the application, following software / libraries / plug-ins needs to be installed: Run the following in the command prompt. If already installed check their version running without any error.

npm i node -g

npm i create-react-app


### Installing

Clone the repository from git - "https://github.com/moni2457/HappyPaws.git"

Import the project in your IDE

Run the following command in terminal In the project directory, use the commands:

npm install 

npm start 

On running npm start, the terminal shows a "Listening at port 8080" message.Now, open the application in your preferred browser by typing "localhost:8080" in the address bar.

### Usage Instructions
 
Run the web application and you will be landed on the Home Page. This web application consists of four pages in total.
HomePage
Register
Donation
Share your Story

You can navigate to all the pages using the menu bar. Any error faced while filling information for registeration, donation or sharing your story will be reflected as error messages in the application.

Links of the pages are:
Home Page: https://happypaws-assignment2.herokuapp.com/

Register: https://happypaws-assignment2.herokuapp.com/register

Share your story: https://happypaws-assignment2.herokuapp.com/share

Donation: https://happypaws-assignment2.herokuapp.com/donation 

## Deployment

Heroku link of HappyPaws : https://happypaws-assignment2.herokuapp.com/donation


## Built With

[create-react-app] (https://create-react-app.dev/) - This generates development server, Webpack for bundling files, and Babel for compiling JavaScript code.


## Sources Used

https://medium.com/@matwankarmalay/create-react-app-ie11-script1002-syntax-error-how-to-get-rid-of-it-d70000c53ddf - Used for browser compatibility. React App was not running on Internet Explorer, so I referred this
medium article to solve this issue. 

Lines 1 -2 in index.js
```
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
```
And supporting changes in package.json file were made to solve this issue.

https://stackoverflow.com/questions/19410950/regex-to-match-10-15-digit-number - Regex used for the validation of CardNumber in Donation Page, 

Line 209 in DonateUs.js

```
return new RegExp(/^[1-9][0-9]{12,15}$/).test(cardNumber);
```


https://stackoverflow.com/questions/940577/javascript-regular-expression-email-validation - Regex referenced and edited for email validation

Line 193 in DonateUs.js
```
  return new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email);
```


# Libraries/Frameworks/Third parties Used:

react-router & react-router-dom- https://reacttraining.com/react-router/web/guides/quick-start - This library  is the official react library for achieving routing in a react application. 

Used in:
All the .js files in order to achieve routing

react-social-login-buttons - https://www.npmjs.com/package/react-social-login-buttons - This library is used for the "Login with Facebook" and "Login with Google" buttons on the Registration Page. The main motive
to use this third party library was to provide a beautiful button UI.

Used in:
Register.js file

react-bootstrap - This library was used to provide a beautiful responsive UI to the web application. Its components like Navbar, Carousel and some basic classes were used in the assignment.

Used in:
All the .js and .css files for UI.

jodit-react - https://www.npmjs.com/package/jodit-react - This library of a text editor was used for users to have ample of choices for editing their content while sharing their experience. 

Used in 
Jodit.js file

bootstrap - This library was  used to get a beautiful responsive UI to the web application. 
 
Used in:
All the .js and .css files for UI.

@material-ui/icons - https://material-ui.com/components/material-icons/ - This library is used for the web application logo. The "Paw" Icon created in the application in used from the material UI icons. 

Used in:
Donate.js

Register.js

Navbar.js


@material-ui/core -   https://material-ui.com/getting-started/installation/ - This library was used to get a beautiful look and fell for the user. Its components like Textfield, Button and many more were used in the assignment.

Used in:
All the .js and .css files for UI.


## Design Choices

For having a powerful UI with responsive and beautiful design, I have used react-bootstrap,  material UI and Bootstrap. These css frameworks provide powerful UI and enhances the look and feel for the User. 
The color co-ordination in the web application is blue and grey which are very pleasing and calm colors. I have provided the necessary text for basic understanding and used dummy text everywhere else. I have kept the design of buttons and text consistent in all the pages of the web application.


## Exceeding the requirements
Used many third-party libraries and css framework for best user performance. 
The css is tested on all the popular browsers.

## Acknowledgments

https://www.lipsum.com/ - Lorem ipsum text was used for the dummy data in the entire web application. 

Maximilan Schwarzmueller - For teaching me React and its basic concepts.

Images used in HappyPaws:
Carousel HomePage and Donation Page Image 1: https://storage.needpix.com/rsynced_images/dogs-4137678_1280.jpg

Carousel HomePage and Donation Page Image 2: https://storage.needpix.com/rsynced_images/cat-4262034_1280.jpg

Carousel HomePage and Donation Page Image 3:https://www.hertsforlearning.co.uk/sites/default/files/images/blog/DOG%20PIC%201.jpg

Home Page - 
Contact Us: https://live.staticflickr.com/4294/35454264413_a1241fddbd_b.jpg

About Us: https://cdn.pixabay.com/photo/2016/03/11/08/02/usa-1249880_960_720.jpg

FAQs:https://cdn.pixabay.com/photo/2016/10/20/18/36/search-1756278_960_720.jpg

Read our stories Image 1:https://storage.needpix.com/rsynced_images/couple-532010_1280.jpg

Read our stories Image 2:https://p1.pxfuel.com/preview/633/272/975/dogs-dog-pet-pug.jpg

Pet available near your location Image 1: https://www.insidermedia.com/uploads/news/images/puppy-1207816_960_720.jpg

Pet available near your location Image 2: https://live.staticflickr.com/730/21225816748_c41918293d_b.jpg

Pet available near your location Image 3: https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg

Pet available near your location Image 4:https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg
