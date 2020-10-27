import './App.css';
import marked from 'marked';
import React, { useState } from 'react';

export default function App() {

  const [markdownText, setMarkdownText] = useState(initialMarkdown);

  const handleChange = (e) => {
    setMarkdownText(e.target.value);
  }

  const renderer = new marked.Renderer(); 

  // Set marked.js break option to true to parse carriage returns (Enter key pressed) as line breaks in preview window

  marked.setOptions({
    breaks: true
  })
  
  return (
    <div className="App">
      <h1>Live Markdown Previewer</h1>
      <p>Created for <i class="fab fa-free-code-camp">
        <span> freeCodeCamp</span></i>
      </p>
      <div className="container">
        <div className="editor-cont">
          <label for="editor">Editor</label>
          <textarea
            id="editor"
            value={markdownText}
            onChange={handleChange}
            />
        </div>
        <div className="preview-cont">
          <label for="preview">Preview Window</label>
          <div
            id="preview"
            value={markdownText}
            dangerouslySetInnerHTML={{__html: marked(markdownText, renderer)}}
            >
          </div>
        </div>  
      </div>
    
    </div>
    
  );
}


const initialMarkdown = `
# Markdown Previewer
Hi there! I'm [Cormac](https://github.com/corquaid) and this is my Markdown Previewer app created as part of the [freeCodeCamp](https://www.freecodecamp.org/) Front-End Libraries Certification.

This app uses [React](https://reactjs.org/) and the [Marked](https://reactjs.org/) markdown parser and compiler to convert [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) text into html.

Here are some examples of HTML elements in markdown format.

### Various Header Levels

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

### List

- list item one
- list item two
- list item three

### Links

[Stack Overflow](https://stackoverflow.com "Coder's Bible")

[Google](https://www.google.com "World's Most Popular Search Engine")

### Text Decorations

*italic*

**bold**

***bold and italic***

### Images

![alt text](https://cdn.arstechnica.net/wp-content/uploads/2018/02/FalconHeavy1.jpg 'Big Ass Rocket')

### Blockquote

> Check out my cool little [Random Quote Machine!](https://corquaid.github.io/random_quote_machine_Bootstrap/)

### Code Example

\`npm install create-react-app -g\`

\`\`\`
function addTwoNumbers(a, b) {
  return a + b
}
const name = 'Benjamin'
const age = 37
const number = Math.random() * 10
\`\`\`
`
