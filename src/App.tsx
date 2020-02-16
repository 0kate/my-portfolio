import React from 'react';
import { Container, Content, Footer, Icon, Header, Navbar, Nav, Sidebar } from 'rsuite';
import { BrowserView, MobileView } from 'react-device-detect';
import {
  Sidebar as MySidebar,
  Introduction,
  Skills,
  Certifications,
} from './components';

import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Container>
          <BrowserView>
            <Sidebar width={56} style={{background: "#282c34"}}>
            <MySidebar />
            </Sidebar>
          </BrowserView>
          <MobileView>
            <Header>
              <Navbar style={{position: "fixed", width: "100%", background: "#282c34"}}>
                <Navbar.Body style={{position: "absolute", right: 0}}>
                  <Nav>
                    <Nav.Item href="https://github.com/0Kate" icon={<Icon icon="github" inverse />}>
                    </Nav.Item>
                    <Nav.Item href="https://www.linkedin.com/in/%E5%9C%AD%E9%9A%BC-%E5%A4%A7%E5%B4%8E-425a0819b" icon={<Icon icon="linkedin" inverse />}>
                    </Nav.Item>
                  </Nav>
                </Navbar.Body>
              </Navbar>
            </Header>
          </MobileView>
          <Container>
            <Content>
              <Introduction />
              <Skills />
              <Certifications />
            </Content>
            <Footer style={{color: "white", background: "#282c34"}}>
              <div>o.keito317@gmail.com</div>
              <div>Japan Tokyo</div>
            </Footer>
          </Container>
        </Container>
      </div>
    );
  }
}

export default App;
