import React from 'react'
import UserClass from './UseClass';


class About extends React.Component{

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }
  render() {
  
    return (
      <div>
        <UserClass name={"Shubham Agrawal (class compo)"} />
      </div>

    );
  }
}

export default About;