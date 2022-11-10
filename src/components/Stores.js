import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
// when using an internal image it will need to be imported so it can be used in the active .js file.
import bucketofchicken from './bucketofchicken.png'

// The React component below creates 6 cards that are placeholders
// for stores.

// the line " {Array.from({ length: 6 }).map((_, idx) => ( " allows the programer
// to set the lenght on an array.  ".map" iterates over the array creating a card for 
// each length.  

// To use this actively we would do something similar to our Music Library project.
//  - we would need an API or database for store data
//  - we would need a way to limit the pull to stores that match the App user's location parameters.

function Stores() {
  return (
    <div style={{ textAlign: "center"}}>
      <h2>Browse stores in Your Area!</h2>
      <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={bucketofchicken} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  )
}

export default Stores

