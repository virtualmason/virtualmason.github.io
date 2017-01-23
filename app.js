import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import axios from 'axios';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
          posts: []
        }
    }
    componentWillMount() {
      axios.get('https://jsonplaceholder.typicode.com/posts').then( (response) => {
        var postsResponse = response.data;
        axios.get('https://jsonplaceholder.typicode.com/users').then( (response) => {
          var  userResponse = response.data;
          postsResponse.map( (post) => {
            post.userDetail = userResponse[post.userId - 1];
            return post;
          });
          this.setState({ posts: postsResponse });
        }).catch(error => console.log(error));
      }).catch(error => console.log(error));
    }
    getPostDetails(postIndex) {
      hashHistory.push('/postdetails');
      localStorage.setItem('currentPost', JSON.stringify(this.state.posts[postIndex]))
      console.log('posts page', JSON.parse(localStorage.getItem('currentPost')) );
    }
    render() {
      return (
        <div className="container">
          <div className="jumbotron text-center">
            <h1>React Challenge</h1>
          </div>
          {this.state.posts.map((post, index) => {
            return (
              <div className="well" key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <button className="btn btn-success"
                        onClick={this.getPostDetails.bind(this, index)}>{post.userDetail.username}</button>
              </div>
            );
          })}
        </div>
      );
    }

}
