import React from 'react'
import {
  Button, Modal, 
  Grid, Row,
} from 'rsuite'
import { connect, ConnectedProps } from 'react-redux'
import  { closeModal } from '../../store/certifications/actions'
import { RootState } from '../../store'
import Certification from '../Certification'
import { LOGO_URLS } from './data'
import '../../App.css'
import './Certifications.css'

const mapState = (state: RootState) => ({
  showModal: state.certifications.showModal,
  clicked: state.certifications.clicked,
})

const mapDispatch = {
  closeModal: () => closeModal(),
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

const Certifications = (props: PropsFromRedux) => (
  <div className="App-header">
    <h3>Certificates</h3>
    (click a logo!)

    <Grid className="certifications-grid">
      <Row gutter={12}>
        {
          LOGO_URLS.map(({name, logoUrl}) => {
            return <Certification name={name} logoUrl={logoUrl} />
          })
        }
      </Row>
    </Grid>

    <Modal show={props.showModal} onHide={props.closeModal}>
      <Modal.Header>
        <strong>{props.clicked.name}</strong>
      </Modal.Header>
      <Modal.Body className="certifications-modal-body">
        <img src={props.clicked.logoUrl} />
      </Modal.Body>
    </Modal>
  </div>
)

export default connector(Certifications)
