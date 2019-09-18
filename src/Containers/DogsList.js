import React, { Component } from "react";
import DogCard from "../Components/DogCard";

class DogList extends Component {

  constructor(){
    super()
    this.state = {
      dogList: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:4000/dogs")
      .then(res => res.json())
      .then(data => this.setState({
        dogList: data
      }))
  }


  render() {
    let list = this.state.dogList.map(dog => (
      <DogCard key = {dog.id} dog = {dog}/>
    ))
    console.log(list)
    return <div className="dogContainer">{list}</div>;
  }
}

export default DogList;
