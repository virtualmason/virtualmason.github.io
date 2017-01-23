import React from 'react';
import Axios from 'axios';
import { hashHistory } from 'react-router';

export default class EditUser extends React.Component {
  constructor() {
    super();
    this.state = {
      showForm: 'none'
    }
  }
  componentWillReceiveProps(prop) {
    this.setState({ showForm: prop.show });
  }
  closeForm() {
    this.setState({ showForm: 'none' });
  }
  saveForm() {
    let newUserInfo = {
      username: document.getElementById('inputUsername').value,
      email: document.getElementById('inputEmail').value,
      zipcode: document.getElementById('inputZipcode').value
    };
    let currentUser = JSON.parse(localStorage.getItem('currentPost'));
    currentUser.userDetail.username = newUserInfo.username;
    currentUser.userDetail.email = newUserInfo.email;
    currentUser.userDetail.zipcode = newUserInfo.zipcode;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    Axios.post('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      alert(response.status);
      this.closeForm();
      hashHistory.push('/');
    })
    .catch(function(error) {
      throw error;
    });
  }
  render() {
    return (
      <form style={{'display': this.state.showForm}} className="form-horizontal">
        <fieldset>
          <div className="form-group">
            <label className="col-lg-2 control-label">Username</label>
            <div className="col-lg-6 col-lg-offset-2">
              <input className="form-control" id="inputUsername" placeholder="Username" type="text" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-2 control-label">Email</label>
            <div className="col-lg-6 col-lg-offset-2">
              <input className="form-control" id="inputEmail" placeholder="Email" type="text" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-2 control-label">Zipcode</label>
            <div className="col-lg-6 col-lg-offset-2">
              <input className="form-control" id="inputZipcode" placeholder="Zipcode" type="text" />
            </div>
          </div>
          <button className="btn btn-warning" onClick={this.closeForm.bind(this)}>Cancel</button>
          <button className="btn btn-success" onClick={this.saveForm.bind(this)}>Save</button>
        </fieldset>
      </form>
    );
  }
}
