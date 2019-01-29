import React from "react";

class DogCard extends React.Component {
  state = {
    bark: false
  };

  clickHandler = () => {
    this.setState({
      bark: !this.state.bark
    });
  };
  render() {
    return (
      <div>
        <h2>{this.props.dog.name}</h2>
        <img alt="" src={this.props.dog.img} />
        {this.state.bark ? <h1 className="bark">RUFF</h1> : null}
        <button onClick={this.clickHandler}>Bark</button>
      </div>
    );
  }
}

export default DogCard;
