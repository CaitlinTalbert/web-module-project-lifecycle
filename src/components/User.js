import React from 'react'; 

class User extends React.Component {
    render() {
        return(
            <div id="UserCard">
                <img src= "https://avatars.githubusercontent.com/u/92820628?v=4"/>
                <a href="https://github.com/CaitlinTalbert"><h3>Caitlin Talbert</h3></a>
                <p>(CaitlinTalbert)</p>
                <p>Total Repositories: 34 </p>
                <p>Total Followers: 6</p>
            </div>
        );
    }
}

export default User; 