import React from 'react'
import { Icon, Nav, Sidenav, Tooltip, Whisper } from 'rsuite'
import './Sidebar.css'

const MySidebar = () => (
  <Sidenav expanded={false} style={{position: "fixed", height: "100%", background: "#1f2329"}}>
    <Sidenav.Body className="sidenav-body">
      <Nav>
        <Whisper placeholder="right" trigger="hover" speaker={<Tooltip>GitHub</Tooltip>}>
          <Nav.Item href="https://github.com/0Kate" icon={<Icon icon="github" inverse />}>
          </Nav.Item>
        </Whisper>
        <Whisper placeholder="right" trigger="hover" speaker={<Tooltip>LinkedIn</Tooltip>}>
          <Nav.Item href="https://www.linkedin.com/in/%E5%9C%AD%E9%9A%BC-%E5%A4%A7%E5%B4%8E-425a0819b" icon={<Icon icon="linkedin" inverse />}>
          </Nav.Item>
        </Whisper>
      </Nav>
    </Sidenav.Body>
  </Sidenav>
)

export default MySidebar
