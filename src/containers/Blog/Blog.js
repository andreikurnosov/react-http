import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import axios from 'axios';
// import axios from '../../axios';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
  state = {
    auth: false
  }
  render() {
    return (
      <div>
        <header className="Blog">
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: '#fa923f',
                    textDecoration: 'underline'
                  }}>
                  Posts
                </NavLink>
                <NavLink
                  to={{
                    pathname: '/new-post',
                    // pathname: this.props.match.url + '/new-post',
                    hash: '#submit',
                    search: '?quick-submit=true'
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>}/> */}

        <Switch>
          { this.state.auth ? <Route path="/new-post" component={NewPost} /> : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1 style={{textAlign: 'center'}}>Not found ಠ_ಠ</h1>}/>
          {/* <Redirect from="/" to="/posts" /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
