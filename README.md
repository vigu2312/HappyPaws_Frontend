# Web Project Proposal
## Web Group 6 - Happy Paws
The application, HappyPaws, is a web application primarily for pet lovers. We majorly feature dogs and cats. The aim of this application was to create
a platform for petlovers to adopt a pet if they wish to. They can also sponsor a particular pet or volunteer with shelters to take care of a pet. If a user is not able to have
a pet of their own at home, but wants to contribute something for the animals, they can donate to animal shelters as well. The application also features pet care videos to help
new pet owners to take care of their pets. Users can also share the stories of their adoption on the web application to encourage other users to adopt or contribute to the pet
community.

Application URL: [https://happypaws-a2.herokuapp.com](https://happypaws-a2.herokuapp.com) <br>
GitLab URL: [https://git.cs.dal.ca/ramathas/csci5709_group6/-/tree/Initial_Repo](https://git.cs.dal.ca/ramathas/csci5709_group6/-/tree/Initial_Repo) <br>

* *Date Created*: 20 June 2020
* *Last Modification Date*: 23 June 2020


## Authors
Moni Shah - (Developer) 
Bhagyashree Pandit - (Developer)
Ramya Ramathas - (Developer)
Ravichandran Vigneshwari - (Developer)
Shah Devam - (Developer)

## Getting Started
The react web application is developed for adopting pets online and helping rescue houses and shelters. Users will be able to search the perfect pet they need using the filters. 
The project contains the front-end of the application

## Prerequisites
Run the following command for installing npm <br>
`npm install`

Following react depenencies were used. They can be downloaded as:
```
npm install react-bootstrap
npm install react-router-dom
npm install @material-ui/core
npm install bootstrap
```


## Installing
1. Clone the repository from git - "https://git.cs.dal.ca/ramathas/csci5709_group6"

2. Import the project in your IDE

3. After installing the prerequisites, run the following command in terminal
In the project directory <br>
## `npm install`
## `npm run build`
## `npm start`

4. The application will run on 'https://localhost:3000'.


## Usage Instructions
The application features are easy to use and access. Following is the breif sitemap of application
Homepage		[https://happypaws-a2.herokuapp.com/](https://happypaws-a2.herokuapp.com/)
Register			[https://happypaws-a2.herokuapp.com/register](https://happypaws-a2.herokuapp.com/)
Login			[https://happypaws-a2.herokuapp.com/login](https://happypaws-a2.herokuapp.com/login)
Search Page		[https://happypaws-a2.herokuapp.com/search](https://happypaws-a2.herokuapp.com/search)
Adopt Page		[https://happypaws-a2.herokuapp.com/adopt](https://happypaws-a2.herokuapp.com/adopt)
Volunteer Page		[https://happypaws-a2.herokuapp.com/volunteer](https://happypaws-a2.herokuapp.com/volunteer)
Sponsor Page		[https://happypaws-a2.herokuapp.com/sponsor](https://happypaws-a2.herokuapp.com/sponsor)
Enquire Page		[https://happypaws-a2.herokuapp.com/enquire](https://happypaws-a2.herokuapp.com/enquire)
Share your Story page	[https://happypaws-a2.herokuapp.com/share](https://happypaws-a2.herokuapp.com/share)
Donate Page		[https://happypaws-a2.herokuapp.com/donate](https://happypaws-a2.herokuapp.com/share)
Pet Care Page		[https://happypaws-a2.herokuapp.com/petCare](https://happypaws-a2.herokuapp.com/petCare)
Pet Profile Page                        [https://happypaws-a2.herokuapp.com/profile](https://happypaws-a2.herokuapp.com/profile)


## Deployment
Heroku is used as a deployment server.
For deploying the application link your Git hub account with Heroku and deploy the project branch. Application will be deployed on the specified URL.
For this assignment : https://happypaws-a2.herokuapp.com/

## Built With
[create-react-app](https://create-react-app.dev/) - It generates development server, Webpack for bundling files, and Babel for compiling javascript code.
[react-bootstrap](https://react-bootstrap.github.io/) - It provides basic components for rendering different layouts.
[materialUI](https://material-ui.com/)- It also provides attractive components for rendering different elements.

## Sources Used
Following components were used from [react-bootstrap](https://create-react-app.dev/)
* Navbar
* Form
* FormControl
* Button
* Carousel
* Jumbotron
* Col
* Image
* Row

Two examples of how these components were used is given below. Rest of the listed components were used in the same manner.
### Navbar.js

Lines 40 - 82
---------------

```
<Navbar className="navbar_bg" expand="lg" >
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={logo}
                            width="35"
                            height="35"
                        />{' '}
                        Happy Paws</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/donation">Donation</Nav.Link>
                            <Nav.Link as={Link} to="/search">Find a Pet</Nav.Link>
                            <Nav.Link as={Link} to="/petCare">Pet Care</Nav.Link>
                            <Nav.Link as={Link} to="/share" className="my-active">Share your Story</Nav.Link>
                            <NavDropdown title="Support Us" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={() => alert("Under Construction")} href="#action/3.2">Volunteer</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={() => alert("Under Construction")} href="#action/3.4">See our stories</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/contactus"  >Contact Us</Nav.Link>
                            {/* <Nav.Link as ={Link} to="/enquire" >Enquire</Nav.Link> */}
                          
                        </Nav>
                        <Form inline>
                            <button variant="light" onClick={this.showLoginModal}>Register</button>
                            <div className = "modal-show">
                            <Login 
                            show = {LoginModal} 
                            onHide = {this.LoginModalClose}>                                
                            </Login>
                        </div>

                        </Form>
                    </Navbar.Collapse>
                </Navbar>

```

The code above was created by adapting the code in [react-bootstrap-documentation](https://react-bootstrap.netlify.app/components/navbar/) as shown below: 

```
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
```

- [react-bootstrap-navbar](https://react-bootstrap.netlify.app/components/navbar/) was included as ready-to-use component. 
- The code renders a navigation bar at the top of the browser window. It is responsive and better to you use then div components, which will reneder different on different screens
- Code was modified to cater the necessity. The extra part of the code such as drop down menu was removed, because it wasnt needed.

### contact.js

Lines 119 - 139
---------------

```
       <Jumbotron fluid className="class-jumbotron">
                    <Container>
                        <Row>
                            <Col xs={6} md={4}> 
                                <Image src={contactus} height="280px" width="280px" roundedCircle />
                            </Col>
                            <Col xs={12} md={8}>
                                <h3 style={{paddingTop:'6vh'}}>Contact Information</h3>
                                <p >Phone: 902-999-9999</p>
                                <p>Email: support@happypaws.com</p>
                                <p>Address: 1113 WaterBridge Terminal, 
                                    B3A A3B, Halifax, NS, Canada
                                </p>
                                <Button variant="outline-info" style={{marginLeft:'25px',marginRight:'25px'}}><img src={facebook} height="30px" width="30px" /></Button>
                                <Button variant="outline-info" style={{marginLeft:'25px',marginRight:'25px'}}><img src={twitter} height="30px" width="30px"/></Button>
                                <Button variant="outline-info" style={{marginLeft:'25px',marginRight:'25px'}}><img src={insat} height="30px" width="30px"/></Button>
                    
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>

```

The code above was created by adapting the code in [react-bootstrap-documentation](https://react-bootstrap.netlify.app/components/jumbotron/) as shown below: 

```
<Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>

```

- [jumbotron](https://react-bootstrap.netlify.app/components/jumbotron/) was implemented by importing the dependency and including the component in the render method
- Code was easy to use and responsive. 
- Code was modified to adjust a round image inside the jumbotron. The entire design then looks attractive

### login.js

Lines 32 - 45
---------------

```
onNameChange= (e) => {
        const val= e.target.value;
        if (val!==null && val!=="" && val!==" " && val.length>1){
            this.state.nameError = null;
            this.setState({
            username: e.target.value,
            });
        }
        else{
            this.setState({
                nameError: "Enter Valid Value",
            });
        }
      }

```

The code above was created by adapting the code on [stack-overflow](https://stackoverflow.com/questions/41296668/reactjs-form-input-validation) as shown below: 

```
handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }
```

- The code on [stack-overflow](https://stackoverflow.com/questions/41296668/reactjs-form-input-validation) was implemented by understanding the concept of passing arguments.
- I was implementing the same concept with the help of 'refs', but it was not working. Therefore, I used this code to handle the change in input.
- Code was not cloned directly, only the idea behind it was taken and modified to suit the need.

### search.js

Lines 161 - 190
---------------

```
let items = data.filter((d)=>{
    console.log("1");
    filteredData=this.search(d);
    return filteredData;
  }).filter((d)=>{
    console.log("2");
    filteredData=this.searchType(d);
    return filteredData;
  }).filter((d)=>{
    console.log("3");
    filteredData=this.searchColor(d);
    return filteredData;
  }).filter((d)=>{
    console.log("4");
    filteredData=this.searchBreed(d);
    return filteredData;
  }).filter((d)=>{
    console.log("6");
    filteredData=this.searchGender(d);
    return filteredData;
  }).filter((d)=>{
    console.log("5");
    filteredData=this.searchAge(d);
    return filteredData;
  }).filter((d)=>{
    console.log("7");
    filteredData=this.searchProximity(d);
    return filteredData;
  }).map(d=>{
    return()}

```

The code above was created by adapting the code on [medium-filter-data](https://medium.com/crobyer/search-filter-with-react-js-88986c644ed5) as shown below: 

```
const items = Information.filter((data)=>{
      if(this.state.search == null)
          return data
      else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.country.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map(data=>{
      return()}
```

### Enquire.js

Lines 57
---------------

```
 this.props.history.push('/profile');

```

The code above was created by adapting the code in [NAME] (https://stackoverflow.com/questions/41296668/reactjs-form-input-validation) as shown below: 

```
 this.props.history.push('/');

```
- The code in (https://stackoverflow.com/questions/41296668/reactjs-form-input-validation) was used to redirect to the desired page after form was successfully submitted.


- The code on [stack-overflow](https://stackoverflow.com/questions/41296668/reactjs-form-input-validation) was implemented by understanding the concept of passing arguments.
- I was implementing the same concept with the help of 'refs', but it was not working. Therefore, I used this code to handle the change in input.
- Code was not cloned directly, only the idea behind it was taken and modified to suit the need.

## Image Sources
[1] [image1.jpg](https://thewallpaper.co//wp-content/uploads/2016/02/cute-dog-desktop-background-high-resolution-wallpaper-pictures-dog-free-doggy-pets-puffy-dogs-1920x1200.jpg)
[2] [cat-images](https://unsplash.com/s/photos/cat)
[3] [dog-images](https://unsplash.com/s/photos/dog)
[4] [other-pets](https://unsplash.com/s/photos)
[5] [enquire.jpg](https://www.vicnews.com/news/b-c-guide-dogs-is-looking-for-volunteer-puppy-raisers/)
[6] [profile-images](https://www.pexels.com/id-id/foto/anak-anjing-anjing-bayi-anjing-belum-tua-605496/)
[7] [home-page-image](https://www.insidermedia.com/uploads/news/images/puppy-1207816_960_720.jpg)
[8][home-page-image](https://live.staticflickr.com/730/21225816748_c41918293d_b.jpg)
[9][home-page-image](https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg)
[10][home-page-image](https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg)
[11][home-page-image](https://storage.needpix.com/rsynced_images/couple-532010_1280.jpg)
[12][home-page-image](https://p1.pxfuel.com/preview/633/272/975/dogs-dog-pet-pug.jpg)
[13][home-page-image](https://www.isqua.org/images/2018/02/16/faq-img.png)
[14][home-page-image](https://mortgagephonenumber.com/wp-content/uploads/2018/12/contact_insurance.jpg)
[15][home-page-image](https://coaottawa.ca/wp-content/uploads/2019/09/volunteer-hands-COA.jpg)

## Code Sources
[1]"React – A JavaScript library for building user interfaces", Reactjs.org, 2020. [Online]. Available: https://reactjs.org/. [Accessed: 10- Jun- 2020].
[2]"CSS Tutorial", W3schools.com, 2020. [Online]. Available: https://www.w3schools.com/css/default.asp. [Accessed: 10- Jun- 2020].
[3]"HTML Tutorial", W3schools.com, 2020. [Online]. Available: https://www.w3schools.com/html/default.asp. [Accessed: 11- Jun- 2020].
[4]"How do I deploy my code to Heroku using GitLab CI/CD?", Medium, 2020. [Online]. Available: https://medium.com/swlh/how-do-i-deploy-my-code-to-heroku-using-gitlab-ci-cd-6a232b6be2e4. [Accessed: 13- Jun- 2020].
[5]Form Validation 2020. [Online]. Available: https://www.youtube.com/watch?v=FM2RN8rHCTE&t=6s. [Accessed: 12- Jun- 2020].
[6]A. Adoption, "Dog Adoption | Petfinder", Petfinder, 2020. [Online]. Available: https://www.petfinder.com/pet-adoption/dog-adoption/. [Accessed: 14- Jun- 2020].
[7] R. validation, "Reactjs - Form input validation", Stack Overflow, 2020. [Online]. Available: https://stackoverflow.com/questions/41296668/reactjs-form-input-validation. [Accessed: 09- Jun- 2020].
[8]"Top 10 Reasons to Adopt from an Animal Shelter | Helping Hands Humane Society", Hhhstopeka.org, 2020. [Online]. Available: http://www.hhhstopeka.org/adopt/top-10-reasons-to-adopt-from-an-animal-shelter/. [Accessed: 23- May- 2020]
[9]Search Filter with React js. (2020). Retrieved 24 June 2020, from https://medium.com/crobyer/search-filter-with-react-js-88986c644ed5
[10] Pexels, 2020. [Online]. Available: https://www.pexels.com/search/dogs/. [Accessed: 08- Jun- 2020].

## Acknowledgements

1. [programming with mosh-tutorials](https://programmingwithmosh.com)- It helped me understand the basic concepts of react
2. Tutorials available on brightspace were very informative and helpful.