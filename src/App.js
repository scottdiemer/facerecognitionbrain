import React, { Component } from 'react'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'

import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import './App.css'

const app = new Clarifai.App({
  apiKey: 'f491ef86824e41e4981c763f47c8a80f'
})

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 200
      }
    }
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
    }
  }

  onInputChange = event => {
    console.log(event.target.value)
  }

  onButtonSubmit = () => {
    console.log('click')
    app.models.predict('f491ef86824e41e4981c763f47c8a80f', "https://samples.clarifai.com/face-det.jpg").then(
  function(response) {
    console.log(response)
  },
  function(err) {
    // there was an error
  }
);
  }

  render() {
    return (
      <div className="App">
        <Particles
          className='particles'
          params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition />
      </div>
    )
  }
}

export default App
