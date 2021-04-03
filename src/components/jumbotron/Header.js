import React from "react";
import '../../css/card-intro.css';
import { Card, Button } from 'react-bootstrap';


function Header() {
    return (
        <>
<div class="header box effect7">
 <Card >
  <Card.Body>
    <Card.Title class="title">World Wildlife Fund for Nature</Card.Title>
    <Card.Subtitle class="subtitle">Conservation efforts</Card.Subtitle>
    <Card.Text class="desc">
      with love and dedication to the nature
    </Card.Text>
    <Card.Link href="#">
      <Button variant="primary">DONATE</Button>
    </Card.Link>
    <Card.Link href="#">
      <Button variant="primary">ADOPT</Button>
    </Card.Link>
  </Card.Body>
</Card>


        </div>
        </>
    );
}

export default Header;


