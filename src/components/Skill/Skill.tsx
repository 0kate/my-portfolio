import React from 'react'
import posed from 'react-pose'
import Konva from 'konva'
import { Circle, Image } from 'react-konva'
import '../../App.css'
import './Skill.css'

interface SkillProps {
  logo: string
}

interface SkillState {
  x: number,
  y: number,
  speedX: number,
  speedY: number,
  image: any,
}

class Skill extends React.Component<SkillProps, SkillState> {
  readonly SPEED: number = 4
  readonly WIDTH: number = window.innerWidth - 150
  readonly HEIGHT: number = window.innerHeight - 150
  readonly MIN_X: number = 12
  readonly MIN_Y: number = 12
  readonly MAX_X: number = this.WIDTH - this.MIN_X
  readonly MAX_Y: number = this.HEIGHT - this.MIN_Y
  image: any

  constructor(props: any) {
    super(props)
    const radian: number = Math.floor(Math.random() * 360)
    this.state = {
      x: Math.floor(Math.random() * this.WIDTH),
      y: Math.floor(Math.random() * this.HEIGHT),
      speedX: Math.floor(Math.cos(radian) * this.SPEED),
      speedY: Math.floor(Math.sin(radian) * this.SPEED),
      image: null,
    }

    this.handleLoad = this.handleLoad.bind(this)
    this.loadImage = this.loadImage.bind(this)
    this.animate = this.animate.bind(this)
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  componentDidMount() {
    this.loadImage()
    this.animate()
  }

  handleLoad() {
    this.setState({
      image: this.image
    })
  }

  loadImage() {
    this.image = new window.Image()
    this.image.src = this.props.logo
    this.image.addEventListener('load', this.handleLoad)
  }

  animate() {
    const {x, y, speedX, speedY} = this.state

    let newSpeedX: number = speedX
    if (x < 0 || this.WIDTH < x) {
      newSpeedX = -newSpeedX
    }

    let newSpeedY: number = speedY
    if (y < 0 || this.HEIGHT < y) {
      newSpeedY = -newSpeedY
    }

    this.setState({
      x: x + newSpeedX,
      y: y + newSpeedY,
      speedX: newSpeedX,
      speedY: newSpeedY,
    })

    setTimeout(this.animate, 10)
  }

  isStopped() {
    const {speedX, speedY} = this.state

    return (speedX == 0 && speedY == 0)
  }

  onClickHandler() {
    const {speedX, speedY} = this.state
    let newSpeedX: number, newSpeedY: number

    if (this.isStopped()) {
      const radian = Math.floor(Math.random() * 360)
      newSpeedX = Math.floor(Math.cos(radian) * this.SPEED)
      newSpeedY = Math.floor(Math.sin(radian) * this.SPEED)
    } else {
      newSpeedX = 0
      newSpeedY = 0
    }

    this.setState({
      speedX: newSpeedX,
      speedY: newSpeedY,
    })
  }

  render() {
    const {x, y, speedX, speedY, image} = this.state

    return (
      <Image
        className="skill"
        x={x}
        y={y}
        image={image}
        shadowBlur={1}
        width={70}
        height={70}
        onClick={this.onClickHandler}
      />
    )
  }
}

export default Skill
