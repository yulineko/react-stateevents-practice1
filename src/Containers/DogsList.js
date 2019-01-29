import React, { Component } from "react";
import Dogs from "../dogs";
import DogCard from "../Components/DogCard";

class DogList extends Component {
  state = {
    dogsList: Dogs
  };
  render() {
    console.log(this.state);
    let dogs = this.state.dogsList.map(dog => (
      <DogCard key={dog.id} dog={dog} />
    ));
    return <div className="dogContainer">{dogs}</div>;
  }
}

export default DogList;
