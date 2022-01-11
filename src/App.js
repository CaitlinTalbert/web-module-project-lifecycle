import React from 'react';
import User from './components/User'; 
import FollowerList from './components/FollowerList';
import axios from 'axios'; 


class App extends React.Component {
  state = {
    currentUser: "caitlintalbert", 
    user: {}, 
    followers: []
  }

componentDidMount () {
  axios.get(`https://api.github.com/users/${this.state.currentUser}`)
    .then(resp=> {
      console.log(resp.data)
      this.setState({
        ...this.state,
        user: resp.data
      });
    })
}

componentDidUpdate (prevProps, prevState) {
  if(this.state.user !== prevState.user) {
    axios.get(`https://api.github.com/users/${this.state.currentUser}/followers`)
    .then(resp=> {
      console.log(resp)
      this.setState({
        ...this.state,
        followers: resp.data
      });
    })
  }
}

handleChange = (e) => {
  this.setState({
    ...this.state, 
    currentUser: e.target.value
  });
}

handleSearch = (e) => {
  e.preventDefault(); 
  axios.get(`https://api.github.com/users/${this.state.currentUser}`)
  .then(resp => {
    this.setState({
      ...this.state, 
      user: resp.data
    }); 
  }); 
}

  render() {
    return(<div>
      <h1>GitHub Info</h1>
      <form>
        <input placeholder="GitHub Handle" onChange={this.handleChange}/>
        <button onClick={this.handleSearch}>Search</button>
      </form>

      <User user={this.state.user}/>
      <FollowerList followers={this.state.followers}/>
    </div>);
   }
 
}

export default App;
