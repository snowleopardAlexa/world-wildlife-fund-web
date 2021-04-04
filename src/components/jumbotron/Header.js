import React from "react";
import '../../css/card-intro.css';
import { Card, Button } from 'react-bootstrap';

const btnAdopt = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

function Header() {
return (
<>
<div class="header box effect7">
 <Card fluid>
  <Card.Body>
    <Card.Title class="title">World Wildlife Fund for Nature</Card.Title>
    <Card.Subtitle class="subtitle">Conservation efforts.</Card.Subtitle>
    <Card.Text class="desc">
      with love and dedication to the nature.
    </Card.Text>
    <div class="button">
     <Button className="btn-donate mx-auto d-block" size="lg" block 
      style={{backgroundColor: 'black',
              border: 'none', 
              borderRadius: '60px', 
              padding: '1em 3em', 
              border: '0'}}
            >DONATE</Button>
    </div>
    <div class="button">
     <Button className="btn-adopt mx-auto d-block" size="lg" block 
     style={{backgroundColor: 'black', 
             border: 'none', 
             borderRadius: '60px', 
             padding: '1em 3em', 
             border: '0',
             marginTop: '20px'}}
            >ADOPT</Button>
    </div>
  </Card.Body>
</Card>
</div>
</>
  );
}

export default Header;


