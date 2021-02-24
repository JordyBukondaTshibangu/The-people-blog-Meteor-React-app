import "/imports/api/posts/client";
import "/imports/api/developers/client"

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom';

import { App } from '/imports/ui/App';
import Footer from '../imports/ui/components/footer/Footer.jsx'
import ProtectedRoute from '../imports/ui/ProtectedRoute';

import LoginPage from '../imports/ui/pages/login/LoginPage.jsx';
import SignUp from '../imports/ui/pages/signup/SignUp.jsx';
import HomePage from '../imports/ui/pages/home/HomePage.jsx';


import SinglePost from '../imports/ui/pages/posts/SinglePost/SinglePostPage.jsx';
import PostsPage from '../imports/ui/pages/posts/AllPost/AllPostsPage.jsx';
import MyPosts from '../imports/ui/pages/myPosts/myPosts/MyPostsPage.jsx';
import UpdatePost from '../imports/ui/pages/myPosts/updatePost/UpdatePost.jsx'
import NewPostPage from '../imports/ui/pages/myPosts/newPost/NewPostPage.jsx';

import UpdateProfil from '../imports/ui/pages/profil/updateProfile/UpdateProfile.jsx';
import MyProfile from '../imports/ui/pages/profil/myProfile/MyProfile.jsx';


import DevelopersPage from '../imports/ui/pages/developers/DevelopersPage.jsx';
import AboutPage from '../imports/ui/pages/about/AboutPage.jsx';



const routes = (

  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/sign-in" exact component={LoginPage} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
      <App /> 
      {/* Find a better way to handle the App and the Footer component */}
      <Switch>
        <ProtectedRoute path="/" exact component={HomePage} />

        <ProtectedRoute path="/posts" exact component={PostsPage} />
        <ProtectedRoute path="/my-posts" exact component={MyPosts} />
        <ProtectedRoute path="/new-post" exact component={NewPostPage} />
        <ProtectedRoute path="/posts/:postId" exact component={SinglePost} />
        <ProtectedRoute path="/update-post/:postId" exact component={UpdatePost} />

        <ProtectedRoute path="/my-profile" exact component={MyProfile} />
        <ProtectedRoute path="/update-my-profile" exact component={UpdateProfil} />

        <ProtectedRoute path="/devs" exact component={DevelopersPage} />

        <ProtectedRoute path="/about" exact component={AboutPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>

)

Meteor.startup(() => {
  render(routes, document.getElementById('react-target'));
});
