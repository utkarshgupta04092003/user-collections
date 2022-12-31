import React from "react";
import "./App.css";
import UserData from "./UserData";
import UserForm from "./UserForm";

import { get,addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./index";
import { async } from "@firebase/util";
// import { useState } from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      user_data: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = async () => {
    let docRef = await getDocs(collection(db, "user-collections"));

    onSnapshot(collection(db, "user-collections"), (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      this.setState({ user_data: newData });
      console.log(newData);
    });
  };

  handleChange = async (e) => {

    const target = e.target;
    // alert('Some change happens in : ',target.name);
    console.log("Some change happens in : ", target.name);

    if (target.name == "name") {
      this.setState({
        name: target.value,
      });
    }
    if (target.name == "email") {
      this.setState({
        email: target.value,
      });
    }
    if (target.name == "password") {
      this.setState({
        password: target.value,
      });
    }
    if (target.name == "confirm-password") {
      this.setState({
        confirm_password: target.value,
      });
    }

    // console.log(this.state);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit data clicked");

    const { name, email, password, confirm_password, user_data } = this.state;

    if (password != confirm_password) {
      alert("Oops! Password does not match.");
      return;
    }

    let isPresent = false;
    user_data.forEach((data) => {
      if (data.email == email) {
        alert("Oops! User already exist");
        isPresent = true;
      }
    });

    if (!isPresent) {
      addDoc(collection(db, "user-collections"), {
        name: name,
        email: email,
        password: password,
        confirm_password: confirm_password,
      });

      alert('User data added to collection');
    }

    console.log(name, email, password, confirm_password);
  };

  render() {
    return (
      <div className="container">
        <UserForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <UserData users={this.state.user_data} />
      </div>
    );
  }
}

export default App;
