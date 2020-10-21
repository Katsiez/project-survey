import React from 'react'
import { FirstQuestion } from './components/FirstQuestion'
import { SecondQuestion } from './components/SecondQuestion'
import { ThirdQuestion } from './components/ThirdQuestion'
import { FourthQuestion } from './components/FourthQuestion'
import './app.css'

export const App = () => {
  return (
    <section className='main'>

      <div className="intro" id="intro">
        <h1>Daily self-care survey</h1>
        <h2>Let's start with a quick self-assessment check</h2>
        <div class="container">
          <img src="img/heart.png" class="heart" alt="human heart" />
        </div>
        <button><a href="#first">begin</a></button>
      </div>
      <div>
        <FirstQuestion />
      </div>
      <div>
        <SecondQuestion />
      </div >
      <div>
        <ThirdQuestion />
      </div>
      <div>
        <FourthQuestion />
      </div>
    </section>
  )
}
