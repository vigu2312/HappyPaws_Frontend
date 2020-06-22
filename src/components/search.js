import React, { Component } from 'react';
import {Col, Image, Row, Card, Form, FormControl, Button } from 'react-bootstrap';
import Select from '@material-ui/core/Select';
import {FormControl as FCMaterial} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import data from './data';
import './search.css';


class Search extends Component {
  constructor(){
    super();

    this.state={
      current:3,
      search:null,
      type:null,
      breed:null,
      color:null,
      age:null,
      gender:null,
      proximity:null
    };
  }

  handleSearch=(e)=>{
    let searchString = e.target.value;
    this.setState({search:searchString})
  }
  handletypeSearch=(e)=>{
    console.log("//////////////////////////////////////////////////Handletype search called");
    let searchString = e.target.value;
    
    console.log("type1:"+this.state.type);
    this.setState({type:searchString})
    console.log("type2:"+this.state.type);
  }
  search=(d)=>{
    if(this.state.search == null )
      return d
    else if(d.name.toString().toLowerCase().includes(this.state.search.toString().toLowerCase()) || d.breed.toString().toLowerCase().includes(this.state.search.toString().toLowerCase()) || d.type.toString().toLowerCase().includes(this.state.search.toString().toLowerCase())){
      return d
    }
  }
  searchType=(d)=>{
    if(this.state.type == null )
      return d
    else if(d.type.toString().toLowerCase().includes(this.state.type.toString().toLowerCase()) ){
      console.log("inside"+this.state.type);
      return d;
    }
  }
  searchColor=(d)=>{
    if(this.state.color == null )
      return d
    else if(d.color.toString().toLowerCase().includes(this.state.color.toString().toLowerCase()) ){
      return d
    }
  }
  searchBreed=(d)=>{
    if(this.state.breed == null )
      return d
    else if(d.breed.toString().toLowerCase().includes(this.state.breed.toString().toLowerCase()) ){
      return d
    }
  }

render() { 
  // let images,titles,text;
  // let data={
  // images:['images/shareStory.jpg','images/shareStory.jpg'],
  // titles:['pet1','pet2'],
  // text:['text1,text2']};
  const items = data.filter((d)=>{
    console.log("1");
    let filteredData=this.search(d);
    console.log("2");
    filteredData=this.searchType(filteredData);
    console.log("3");
    filteredData=this.searchColor(filteredData);
    console.log("4");
    filteredData=this.searchBreed(filteredData);
    console.log("5");
    console.log("data"+filteredData);
    return filteredData;
  }).map(d=>{
    let imagesrc=  d.image;
    return(
      
      <Col sm={4} md={4} className="card-center">
            <ul  ><li>
              <Card className="m-2" style={{ width: '18rem' }}>
                
                <Card.Img variant="top" src={d.image} height="250px" width="250px"  />
                <Card.Body className="nav-background">
                  <Card.Title>{d.name}</Card.Title>
                  <Card.Text>
                  {d.age} | {d.breed}
                  
                  </Card.Text>
                  <Button variant="outline-info">View</Button>
                </Card.Body>
              </Card>
              </li></ul>
            </Col>
    
    )
  })

  return (  
    <React.Fragment>
      <Row className="search-center m-5"> 
        <Form inline >
          <FormControl  type="text" placeholder="Search" onChange={(e)=>this.handleSearch(e)} />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Row>

    <Row>
        <Col sm={2} md={2}>
          <FCMaterial className="search-center ml-5" >
            <InputLabel className="search-center options" width="100">Pet Type</InputLabel>
            <Select className="search-center options ml-5" defaultValue={this.state.selectValue} onchange={this.handletypeSearch}>
              <option aria-label="None" value="" />
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Birds">Other</option>
            </Select>
          </FCMaterial>
          <FCMaterial className="search-center ml-5" >
            <InputLabel className="search-center options" width="100">Age</InputLabel>
            <Select className="search-center options ml-5" >
              <option aria-label="None" value="" />
              <option value="A">1-5</option>
              <option value="B">5-10</option>
              <option value="C">10-20</option>
              <option value="D">20-30</option>
              <option value="E">Above 30</option>
            </Select>
          </FCMaterial>
          <FCMaterial className="search-center ml-5" >
            <InputLabel className="search-center options" width="100">Color</InputLabel>
            <Select className="search-center options ml-5">
              <option aria-label="None" value="" />
              <option value="brown">Brown</option>
              <option value="Golden">Golden</option>
              <option value="black">Black</option>
              <option value="Calico">Calico</option>
              <option value="Green and Yellow">Green and Yellow</option>
              <option value="gray">Gray</option>
            </Select>
          </FCMaterial>
          <FCMaterial className="search-center ml-5" >
            <InputLabel className="search-center options"  width="100">Breed</InputLabel>
            <Select className="search-center options ml-5">
              <option aria-label="None" value="" />
              <option value="Golden Retriever">Golden Retriever (Dog)</option>
              <option value="Pug">Pug (Dog)</option>
              <option value="Labrador">Labrador (Dog)</option>
              <option value="German Shephard">German Shephard (Dog)</option>  
              <option value="foxhound">Foxhound (Dog)</option>
              <option value="husky">Husky (Dog)</option>
              <option value="corgy">Corgy (Dog)</option>
              <option value="Egyptian Mau">Egyptian Mau (Cat)</option>
              <option value="Domestic Long Hair">Domestic Long Hair (Cat)</option>
              <option value="tabby">Tabby (Cat)</option>
              <option value="turtle">Turtle (Turtle) </option>
              <option value="dwarf">Dwarf (Rabbit)</option>              
              <option value="Poicephalus">Poicephalus (Parrot)</option>        

            </Select>
          </FCMaterial>
          <FCMaterial className="search-center ml-5" >
            <InputLabel className="search-center options" width="100">Gender</InputLabel>
            <Select className="search-center options ml-5"
            >
              <option aria-label="None" value="" />
              <option value="Turtle">Male</option>
              <option value="Female">Female</option>
            </Select>
          </FCMaterial>
          <FCMaterial className="search-center ml-5" >
            <InputLabel className="search-center options"  width="100">Proximity</InputLabel>
            <Select className="search-center options ml-5">
              <option aria-label="None" value="" />
              <option value="P">1-5 km</option>
              <option value="Q">5-10 km</option>
              <option value="R">10-15 km</option>
              <option value="S">More than 15</option>
            </Select>
          </FCMaterial>
          <Button variant="success m-5" className="search-center" >Apply </Button>
        </Col>
        <Col sm={10} md={10}>
          <Row>
              {items}
            {/* <Col sm={4} md={4} className="card-center">
            <ul><li>
              <Card className="m-2" style={{ width: '18rem' }}>
            
                <Card.Img variant="top" src={data.images} height="250px" width="250px"  />
                <Card.Body className="nav-background">
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>
                  {data.text}
                  
                  </Card.Text>
                  <Button variant="outline-info">View</Button>
                </Card.Body>
              </Card>
              </li></ul>
            </Col> */}
            {/* <Col sm={4} md={4} className="card-center">
              <Card className="m-2" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="images/shareStory.jpg" height="250px" width="250px"  />
                <Card.Body className="nav-background">
                  <Card.Title>Pet2</Card.Title>
                  <Card.Text>
                  Lorem ipsum dolor sit amet
                  
                  </Card.Text>
                  <Button variant="outline-info">View</Button>
                </Card.Body>
              </Card> 
            </Col>
            <Col sm={4} md={4} className="card-center">
              <Card className="m-2" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="images/shareStory.jpg" height="250px" width="250px"  />
                <Card.Body className="nav-background" >
                  <Card.Title>Pet3</Card.Title>
                  <Card.Text>
                  Lorem ipsum dolor sit amet
                  
                  </Card.Text>
                  <Button variant="outline-info">View</Button>
                </Card.Body>
              </Card>
            </Col> */}
          </Row>

      
        </Col>
      </Row>
    </React.Fragment>
  );
    }
}
 
export default Search;