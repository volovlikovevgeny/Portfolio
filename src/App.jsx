import React from 'react'
import Navigation from './components/navbar/navbar'
import Homepage from './components/home/home'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Skills from './components/skills/skills'
import Contacts from './components/contacts/contacts'


import './App.scss'

const App = () => (
  <React.Fragment>
    <Navigation />
    <Homepage />
    <About />
    <Projects />
    <Skills />
    <Contacts />
  </React.Fragment>
)


export default App
