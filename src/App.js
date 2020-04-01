import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import marked from "marked";

const initailState = `
This is a paragraph

**This is a bolded text**

> Block Quotes!

# Heading
## Heading 2
### Heading 3

- list item 1
- list item 2

[Visit my website](https://malikmukhtar.com)

This is an Inline \`<div></div>\`

This is a block of code

\`\`\`
  let x = 1;
  let y = 2;
  let z = x + y;
  console.log(z);
\`\`\`

![React](https://goo.gl/Umyytc)

`;

class App extends React.Component {
  state = {
    text: initailState
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  render() {
    const { text } = this.state;

    const markdown = marked(text);

    return (
      <div className="container">
        <h2 className="text-center m-4">Convert your Markdown</h2>
        <div className="row">
          <div className="col-6">
            <h6 className="text-center">Enter your markdown here:</h6>
            <textarea
              className="form-control p-2"
              id="editor"
              value={text}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-6">
            <h6 className="text-center">See the results:</h6>
            <div
              id="preview"
              className="preview rounded"
              dangerouslySetInnerHTML={{ __html: markdown }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
