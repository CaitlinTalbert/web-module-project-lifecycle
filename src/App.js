import React from 'react';
import axios from 'axios';

class App extends React.Component {
  render() {
    return(<div>
      <h1>GitHub Info</h1>
      <form>
        <input />
        <button>Search</button>
      </form>
      <div>
        <img src="https://api.github.com/users/CaitlinTalbert"/>
      </div>
      <div>
        <h3>Followers:</h3>
        <img src="https://api.github.com/users/your_github_name/followers"/>
      </div>
    </div>);
  }
}

export default App;
