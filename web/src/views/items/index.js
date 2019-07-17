import React from "react";
import Layout from "./Layout";
import profileMen from "../../assets/profile-men.jpeg";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemList: [
        { id: 1, name: "One", uri: "../../assets/profile-men.jpeg" },
        { id: 2, name: "Two" },
        { id: 3, name: "Three" },
        { id: 4, name: "Four" }
      ]
    };
  }

  _onSubmitForm = e => {
    alert("Submit");
    e.preventDefault();
  };

  _onClickDanger = () => {
    alert("Danger! Canceled!");
  };

  _onClickWarning = () => {
    alert("Warning! Warning!");
  };

  _onClickItemList = item => {
    alert(item.name);
  };

  render() {
    return (
      <Layout
        onSubmitForm={this._onSubmitForm}
        onClickDanger={this._onClickDanger}
        onClickWarning={this._onClickWarning}
        onClickItemList={this._onClickItemList}
        itemList={this.state.itemList}
        profileMen={profileMen}
      />
    );
  }
}

export default App;
