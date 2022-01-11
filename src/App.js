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
      <div id="UserCard">
        <img src= "https://avatars.githubusercontent.com/u/92820628?v=4"/>
        <a href="https://github.com/CaitlinTalbert"><h3>Caitlin Talbert</h3></a>
        <p>(CaitlinTalbert)</p>
        <p>Total Repositories: 34 </p>
        <p>Total Followers: 5</p>
      </div>

      <div id="followers">
        <h3>Followers:</h3>
        <img src="https://avatars.githubusercontent.com/u/38574400?v=4"/>
        <p>dbvker</p>
        <img src="https://avatars.githubusercontent.com/u/77358128?v=4"/>
        <p>PriscilaMonteiro</p>
        <img src="https://avatars.githubusercontent.com/u/91200504?v=4"/>
        <p>JorgeEvangelista500</p>
        <img src="https://avatars.githubusercontent.com/u/91918476?v=4"/>
        <p>daaavit</p>
        <img src="https://avatars.githubusercontent.com/u/92267062?v=4"/>
        <p>kfam22</p>
        <img src="https://avatars.githubusercontent.com/u/92415478?v=4"/>
        <p>BrittanyPete</p>
      </div>
    </div>);
  }
}

export default App;
