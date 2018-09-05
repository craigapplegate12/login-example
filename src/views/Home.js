import React, {Component} from 'react';
import {findById} from '../data/data-service';

class Home extends Component {
  state ={
    user:{}
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    const user = findById(id);
    this.setState ({user});
  }

  render() {
   if(!this.state.user.id) return <div>Loading gurl....</div>
    return (
      <div> Hello, {this.state.user.firstName}! </div>

    )
  }
}
export default Home;