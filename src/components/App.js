import React from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import HotelView from "./HotelView";

import "./../sass/main.scss";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="content">
          <Sidebar />
          <HotelView />
        </div>
      </div>
    );
  }
}

export default App;
