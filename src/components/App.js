import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from '../logo.svg'
import '../App.css'
import { addField } from '../actions/index'

export const Joe = 'test'

class App extends Component {
  state = {
    input: ''  
  }

  onInputChange = e => {
    this.setState({
      input: e.target.value
    })
  }

  submit = e => {
    this.props.addField(this.state.input)
  }

  render() {
    let { data } = this.props
    let list = data.map(item => {
      return <li>{item}</li>
    })
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input name="txt" placeholder="input here" onChange={this.onInputChange}></input>
        <button onClick={this.submit}>button</button>
        <p>current state: {this.state.input}</p>
        <ul>{list}</ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    data: state.data
  }
}

export default connect(mapStateToProps, { addField })(App)

