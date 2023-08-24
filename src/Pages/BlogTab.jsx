import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import BlogCard from './BlogCard';
const BlogTab = () => {
    return (
      <section className='blogTab'>
        <Container fluid>
          <Row>
            <Col md = '12'>
            <Tabs
          defaultActiveKey="all"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="all" title="All">
            <BlogCard/>
          </Tab>
          <Tab eventKey="trending" title="Trending">
          <BlogCard/>

          </Tab>
          <Tab eventKey="food&beverages" title="Food & Beverages">
          <BlogCard/>

          </Tab>
          <Tab eventKey="fashion" title="Fashion">
          <BlogCard/>

          </Tab>
          <Tab eventKey="beauty" title="Beauty">
          <BlogCard/>

          </Tab>
          <Tab eventKey="entertainment" title="Entertainment">
          <BlogCard/>

          </Tab>
          <Tab eventKey="fitness" title="Fitness">
          <BlogCard/>

          </Tab>
          <Tab eventKey="event" title="Event">
                        <BlogCard/>

          </Tab>
          <Tab eventKey="travel" title="Travel">
                        <BlogCard/>

          </Tab>
          <Tab eventKey="others" title="Others">
                        <BlogCard/>

          </Tab>

        </Tabs>
            </Col>
          </Row>
        </Container>
       
        </section>
      );
}

export default BlogTab
