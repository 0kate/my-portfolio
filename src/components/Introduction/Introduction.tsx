import React from 'react'
import posed from 'react-pose'
import {
  Button, Drawer,
  Icon, IconButton,
  Panel, Timeline,
} from 'rsuite'
import { connect, ConnectedProps } from 'react-redux'
import { Dispatch } from 'redux'
import {
  openDrawer, closeDrawer,
} from '../../store/introduction/actions'
import { RootState } from '../../store'

import '../../App.css'
import './Introduction.css'
import mypic from './introduction.jpeg'
import { TIMELINES } from './data'

const Box = posed.div({
  hoverable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 2,
  }
})

const mapBoxing = (s: string) => {
  return s.split('').map(c => {
    return (
      <Box className="introduction-box">{c}</Box>
    )
  })
}

const mapState = (state: RootState) => ({
  showDrawer: state.introduction.showDrawer,
})

const mapDispatch = {
  openDrawer: () => openDrawer(),
  closeDrawer: () => closeDrawer(),
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

const Introduction = (props: PropsFromRedux) => (
  <div className="App-header">
    <h1>
      {mapBoxing("Hi!")} {mapBoxing("I'm")} {mapBoxing("0Kate")}<br />
      {mapBoxing("Programmer.")}<br />
    </h1>
    <br />
    <IconButton
      icon={<Icon icon="angle-double-right" />}
      size="lg"
      color="cyan"
      circle
      onClick={props.openDrawer}
    />
    more!
    
    <Drawer show={props.showDrawer} onHide={props.closeDrawer} size="xs">
      <Drawer.Header></Drawer.Header>
      <Drawer.Body className="introduction-drawer-body">
        <Panel>
          <img src={mypic} />
          <Panel>
            <p><strong>Keito Osaki</strong></p>
            <p>1999/03/17</p>
            <p>21 years old</p>
            <p>Programmer💻</p>
            <p>Japan 🇯🇵</p>
            <p></p>
          </Panel>
        </Panel>
        <Timeline align="alternate">
          {
            TIMELINES.map(({date, description}) => {
              return (
                <Timeline.Item>
                  <strong>{date}</strong>
                  <p>{description}</p>
                </Timeline.Item>
              )
            })
          }
        </Timeline>
      </Drawer.Body>
    </Drawer>
  </div>
)

export default connector(Introduction)
