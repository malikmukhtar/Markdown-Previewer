import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    markdown: ""
  };

  handleChange = e => {
    this.setState({
      markdown: e.value.target
    });
  };

  render() {
    const { markdown } = this.state;
    return (
      <div className="">
        <h1>Convert your Markdown</h1>
        <div className="row">
          <div className="col-6">
            <textarea
              id="editor"
              value="markdown"
              onChange={this.handleChange}
            />
          </div>
          <div className="col-6" id="preview"></div>
        </div>
      </div>
    );
  }
}

export default App;
