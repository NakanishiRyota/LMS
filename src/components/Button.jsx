import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  render() {
    
    return (
      <>
        <input type="submit" value="記録する" />
      </>
    )
  }
}

export default Button;

