import React from 'react'
import { Stage, Layer } from 'react-konva'
import Skill from '../Skill'
import '../../App.css'

import {
  python, ruby, cpp, java, go, js, 
  ts, django, nodejs, react, redux, 
  git, docker, k8s, openshift, aws, vim,
} from './logos'

const LOGOS = [
  python, ruby, cpp, go, java, js, ts, django,
  nodejs, react, redux, git, docker, k8s, openshift,aws, vim,
]

const Skills = () => (
  <Stage className="App-header" width={window.innerWidth} height={window.innerHeight} style={{border: "5px"}}>
    <Layer style={{border: "5px"}}>
      {
        LOGOS.map(logo => {
          return <Skill logo={logo} />
        })
      }
    </Layer>
  </Stage>
)

export default Skills
