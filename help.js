import React, { Component } from 'react'
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'
import axios from 'axios'
class App extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    
    componentWillMount() {
        var that =this;
        axios.all([
            axios.get('https://jsonplaceholder.typicode.com/posts'),
            axios.get('https://jsonplaceholder.typicode.com/users')
        ])
        
       .then(axios.spread( (postsResponse, userResponse)=> {
            var postsResponse = postsResponse.data || [];
            var userResponse = userResponse.data || [];
             var data = postsResponse.concat(userResponse); 
            console.log(data);                     
        //... but this callback will be executed only when both requests are complete.
             that.setState({data: data})       
      }))
         .catch(error => console.log(error));
    }
        
        
    
    render() {
        return (
            <div>
              {this.state.data.map((info, i) => {
                  return (
                <div>
                      <div key={i}>
                        <p >{info.username}</p>
                        <p>{info.title}</p>
                        <p>{info.body}</p>
                      </div>
                      
                </div>    
                      
            
            
                  );
              })}
            </div>
            
            /*<div>
            {this.state.posts.map((posts)=>{
               <div key ={post.id}>
               <p>{posts.title}</p>
               <p>{posts.body}</p>
            </hr>
               </div>
            })}
            */    
        );
    }
}
export default App

/*import React, { Component } from 'react'
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'
import axios from 'axios'
class App extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    
    componentWillMount() {
        var that =this;
        axios.all([
            axios.get('https://jsonplaceholder.typicode.com/posts'),
            axios.get('https://jsonplaceholder.typicode.com/users')
        ])
        
       .then(axios.spread( (postsResponse, userResponse)=> {
            var postsResponse = postsResponse.data || [];
            var userResponse = userResponse.data || [];
             var data = postsResponse.concat(userResponse); 
        //... but this callback will be executed only when both requests are complete.
             that.setState({data: data})       
      }))
         .catch(error => console.log(error));
    }
        
        
    
    render() {
        return (
            <div>
              {this.state.data.map(info => {
                  return (
                      <div key={info.id}>
                          <p>{info.title}</p>
                          <p>{info.body}</p>
                         //<p>{info.username}</p>-->
                          <hr/>
                      </div>
                      
            
            
                  );
              })}
            </div>
            */
            /*<div>
            {this.state.posts.map((posts)=>{
               <div key ={post.id}>
               <p>{posts.title}</p>
               <p>{posts.body}</p>
            </hr>
               </div>
            })}
            */    
        );
    }
}
export default App
/*import React, { Component } from 'react'
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'
import axios from 'axios'
class App extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }
    
    componentWillMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState({posts:response.data});
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);    
        });
    }
    
    render() {
        return (
            <div>
              {this.state.posts.map(post => {
                  return (
                      <div key={post.id}>
                          <p>{post.title}</p>
                          <p>{post.body}</p>
                          <hr/>
                      </div>
                  );
              })}
            </div>
            
            <div>
            {this.state.posts.map((posts)=>{
               <div key ={post.id}>
               <p>{posts.title}</p>
               <p>{posts.body}</p>
            </hr>
               </div>
            })}
            </div>    
        );
    }
}
*/
export default App

/*import React, { Component } from 'react'
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'
import axios from 'axios'
class App extends Component {
 constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
 }
    
_PostList(){
   const love ="love man";
    console.log(love);
    axios.get('https://jsonplaceholder.typicode.com/')
  .then(function (response) {
    console.log(response);
  })
 /* .catch(function (error) {
    console.log(error);
    
  })
  }   
       
 
    
    
  render () {

    return (

     
        <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='address' component={Address}>
            <IndexRoute component={TwitterFeed} />
            <Route path='instagram' component={Instagram} />
          </Route>
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

const Nav = () => (
  <div>
    <Link onlyActiveOnIndex activeStyle={{color:'#53acff'}} to='/'>Home</Link>&nbsp;
    <Link activeStyle={{color:'#53acff'}} to='/address'>Address</Link>&nbsp;
    <Link  activeStyle={{color:'#53acff'}} to="/about">About</Link>
  </div>
)

const Container = (props) => <div>
  <Nav />
  {props.children}
</div>

const Home = () => <h1>Hello from Home!</h1>

const Address = (props) => <div>
  <br />
  <Link to='/address'>Twitter Feed</Link>&nbsp;
  <Link to='/address/instagram'>Instagram Feed</Link>
  <h1>We are located at 555 Jackson St.</h1>
  {props.children}
</div>

const Instagram = () => <h3>Instagram Feed</h3>
const TwitterFeed = () => <h3>Twitter Feed</h3>

const NotFound = () => <h1>404.. This page is not found!</h1>

export default App

*/    

