import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Item1 from '../images/image 1.png'

const Sale = () => {
  return (
    <section className='mt-5 mb-5'>
        <Container>
            <Row>
                <Col>
                    <img src = {Item1} className='img-fluid w-100' />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Sale
