import React, { Component } from "react";
import Dogs from "../dogs";

class DogList extends Component {
  state = {
    dogsList: Dogs
  };
  render() {
    let dogs = this.state.dogsList.map(dog => <DogCard />);
    return <div>{dogs}</div>;
  }
}

export default DogList;
