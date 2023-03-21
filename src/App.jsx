import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Course from './components/Course'
import Angular from './images/angular.webp'
import React from './images/react.png'
import Boots from './images/boots.png'
import Vue from './images/vue.webp'
import 'bulma/css/bulma.css'

function App() {

  return (
    <div className="App">
      <>
        <section class="hero is-warning">
          <div class="hero-body">
            <p class="title">
              Kurslarim
            </p>
          </div>
        </section>

        <section className='section'>
          <div className="container">
            <div className="columns">
              <div className="column">
                <Course image={Angular} title="Angular" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias porro sed ipsa nam cum enim voluptate nisi, voluptas eos repudiandae." />
              </div>
              <div className="column">
                <Course image={React} title="React" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias porro sed ipsa nam cum enim voluptate nisi, voluptas eos repudiandae." />
              </div>
              <div className="column">
                <Course image={Vue} title="Vue js" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias porro sed ipsa nam cum enim voluptate nisi, voluptas eos repudiandae." />
              </div>
              <div className="column">
                <Course image={Boots} title="Tilt" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias porro sed ipsa nam cum enim voluptate nisi, voluptas eos repudiandae." />
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  )
}

export default App
