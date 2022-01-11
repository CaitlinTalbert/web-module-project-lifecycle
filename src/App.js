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
        <p>Total Followers: 6</p>
      </div>

      <div id="followers">
        <h3>Followers:</h3>
        <img src="https://avatars.githubusercontent.com/u/38574400?v=4"/>
        <a href="https://github.com/dbvker"><p>dbvker</p></a>
        <img src="https://avatars.githubusercontent.com/u/77358128?v=4"/>
        <a href="https://github.com/PriscilaMonteiro"><p>PriscilaMonteiro</p></a>
        <img src="https://avatars.githubusercontent.com/u/91200504?v=4"/>
        <a href="https://github.com/JorgeEvangelista500"><p>JorgeEvangelista500</p></a>
        <img src="https://avatars.githubusercontent.com/u/91918476?v=4"/>
        <a href="https://api.github.com/users/daaavit"><p>daaavit</p></a>
        <img src="https://avatars.githubusercontent.com/u/92267062?v=4"/>
        <a href="https://github.com/kfam22"><p>kfam22</p></a>
        <img src="https://avatars.githubusercontent.com/u/92415478?v=4"/>
        <a href="https://github.com/BrittanyPete"><p>BrittanyPete</p></a>
      </div>
    </div>);
  }
}

export default App;
