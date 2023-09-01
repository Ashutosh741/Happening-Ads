import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const BreadCrumb = () => {
  return (
    <section className="breadcrumb mt-5">
        <Container>
            <Row>
                <Col md = '12'>

                    <nav aria-label="breadcrumb">
                    <ol className = "breadcrumb">
                        <li className = "breadcrumb-item"><a href="#">Home</a></li>
                        <li className = "breadcrumb-item"><a href="#">Delhi</a></li>
                        <li className = "breadcrumb-item active" aria-current="page">Store</li>
                    </ol>
                </nav>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default BreadCrumb
