import React from 'react'
import posed from 'react-pose'
import { connect, ConnectedProps } from 'react-redux'
import { Col } from 'rsuite'
import { RootState } from '../../store'
import { openModal } from '../../store/certifications/actions'
import './Certification.css'

const Box = posed.div({
  hoverable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
  },
})

const mapState = (state: RootState) => ({
})

const mapDispatch = {
  openModal: (e: object) => openModal(e),
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {
  name: string,
  logoUrl: string,
}

const Certification = (props: Props) => (
  <Col md={4}>
    <Box className="certification-box">
      <img
        src={props.logoUrl}
        onClick={props.openModal}
        data-name={props.name} 
      />
    </Box>
  </Col>
)

export default connector(Certification)
