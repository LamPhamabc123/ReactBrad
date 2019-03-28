import React, { Component } from 'react'

class Test extends Component {
state ={
  title: '',
  body: ''
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => this.setState({
    title: data.title,
    body: data.body
  }))
}

// componentWillMount() {
//   console.log('componentWillMount...');
// }

// componentDidUpdate() {
//   console.log('componentDidUpdate...');
// }

// componentWillUpdate() {
//   console.log('componentWillUpdate...');
// }

// componentWillReceiveProps(nextProps, nextState) {
//   console.log('componentWillReceiveProps...');
// }
// static getDerivedStateFromProps(nextProps, prevState) {
//   return {
//     test:'Something'
//   };
// }

// getSnapshotBeforeUpdate(prevProps, prevState) {
//   console.log('getSnapshotBeforeUpdate...');
// }


  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>Test Component</h1>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    )
  }
}

export default Test;