import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactCardFlip from 'react-card-flip';

class VerticalExample extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip
        isFlipped={this.state.isFlipped}
        flipSpeedBackToFront={0.1}
        flipSpeedFrontToBack={0.1}
        flipDirection="vertical"
      >
        <div style={this.props.styles.card}>
          <img
            style={this.props.styles.image}
            src="https://images.unsplash.com/photo-1682621034535-c156f42b4b6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
          />

          <button onClick={this.handleClick}>Flip Card</button>
        </div>

        <div style={this.props.styles.card}>
          <img
            style={this.props.styles.image}
            src="https://images.unsplash.com/photo-1682448079461-9369131fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
          />

          <button onClick={this.handleClick}>Flip Card</button>
        </div>
      </ReactCardFlip>
    );
  }
}

export default VerticalExample;
