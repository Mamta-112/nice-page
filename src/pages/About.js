import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About=()=>{
     return (
    <Container className='model'>
      <Row style={{margin: "10px"}}>
        <Col>
        <img className="mod-image" src="./Image/images/man.jpg" alt="profile picture" ></img>
        </Col>
        <Col style={{background: "black"}}>
        <p className="mod-par"><h5>MOPERATING MODELS </h5><br></br>Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
             Excepteur sint occaecat cupidatat non proident.<br></br>Image from Freepik
             <br></br>
             <button className="btn" >LEARN MORE</button>
              </p>
             
        </Col>
        <Col>
        <img className="mod-image" src="./Image/images/mangirl.jpg" alt="profile picture" ></img>
        </Col>
      </Row>
        
      <Row style={{margin: "20px"}}>
        <Col style={{background: "black"}}>
          <p className="mod-par1"><h5>DATA & ANALYTICS </h5><br></br>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                 dolore eu fugiat nulla pariatur.Excepteur sint occaecat 
                 cupidatat non proident.<br></br>Image from Freepik<br></br>
                 <button className="btn">LEARN MORE</button></p>
                 </Col>
                 <Col> 
                  <img className="mod-image1" src="./Image/images/boy.jpg" alt="profile picture" ></img>
                  </Col>
                 <Col style={{background: "black"}}>
                 <p className="mod-par1"><h5>BUSINESS STRATEGY </h5> <br></br>Duis aute irure dolor in reprehenderit in voluptate velit
                   esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. <br></br>
                  Image from Freepik <br></br><button className="btn">LEARN MORE</button>
                  </p>
                  </Col>

      </Row>
    </Container>
  );
}
export default About;
 