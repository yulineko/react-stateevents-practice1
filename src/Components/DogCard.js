import React from "react";

class DogCard extends React.Component {
  state = {
    clicked: false
  }

  handleClick = () => {
    console.log("Bark")
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <div>
        <h2>{this.props.dog.name}</h2>
        <img alt="" src={this.props.dog.img} />
        <button onClick={this.handleClick}>Bark</button>
        {this.state.clicked ? <h2>Ruff</h2> : null}
      </div>
    );
  }
}

export default DogCard;
