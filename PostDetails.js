import React from 'react';
import EditUser from './EditUser';
import Axios from 'axios';

export default class PostDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      postData: {},
      postComments: [],
      showForm: 'none'
    }
  }
  componentWillMount() {
    let currentPost = JSON.parse(localStorage.getItem('currentPost'));
    this.setState({ postData: currentPost });
    Axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${currentPost.id}`)
    .then(response => {
      this.setState({ postComments: response.data });
    })
    .catch(function(error) {
      throw error;
    })
  }
  editUser(e) {
    e.preventDefault();
    this.setState({ showForm: 'block' });
  }
  render() {
    return (
      <div className="container">
       <h2>{this.state.postData.title}</h2>
       <h3>{this.state.postData.body}</h3>
       <hr/>
       <h4>{this.state.postData.userDetail.name}&nbsp;
         <a href="#" onClick={this.editUser.bind(this)}>
           <span className="glyphicon glyphicon-pencil"></span>
         </a>
       </h4>
       <div className="row">
         <div className="col-md-3">
           <ul>
             <li>Username: {this.state.postData.userDetail.username}</li>
             <li>Email: {this.state.postData.userDetail.email}</li>
             <li>Zipcode: {this.state.postData.userDetail.address.zipcode}</li>
           </ul>
         </div>
         <div className="col-md-9">
         <h4>Comments</h4>
         {this.state.postComments.map((comment, index) => {
           return (
             <div key={index}>
               <p>{comment.body}</p>
               <hr/>
             </div>
           );
         })}
         </div>
       </div>
       <EditUser show={this.state.showForm}/>
      </div>
    );
  }
}
