import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './service.css'
const Service=()=>{
    return(<>
        
         <Container>
            <h1 className='title-team'>Our Team</h1>
            <p className='ourpara'>Sample text. Click to select the text box. 
                    Click again or<br></br> double click to start editing the text.</p>
      <Row>

       
        
                    <Col >
                    <img className="image1" src="./Image/images/sboy.jpg" alt="profile picture" ></img>
                    <div className="name1"> 
                      <h4>Alex Grinfield</h4> <h6>programming guru</h6></div>
                    </Col>
                    <Col><img className="image2" src="./Image/images/ssboy.jpg" alt="profile picture" ></img>
                    <div className="name2">
                    <h4>Jeffrey Brown</h4>  <h6>manager</h6></div></Col>
                    
                    <Col>
                    <img className="image3" src="./Image/images/sgirl.jpg" alt="profile picture" ></img>
                   <div className="name3">
                    <h4>Ann Richmond </h4> <h6>creative leader</h6></div>
                    </Col>
                    
      </Row>
      <Row>
           <Col><img className="image4" src="./Image/images/bgirl.jpg" alt="profile picture" ></img></Col>
           <Col  className="STR-par"><h1>STRATEGY</h1>
                    <p>Sed blandit libero volutpat sed cras ornare arcu dui.
                       Adipiscing elit ut aliquam purus. Dui faucibus in ornare quam.</p></Col>
                    <Col>   <img className="image5" src="./Image/images/sssp.jpg" alt="profile picture" ></img> 
                    </Col>   
      </Row>
      <Row>
      
        <Col className="PLA-par"><h1>PLANNING</h1>
                    <p>Sed blandit libero volutpat sed cras ornare arcu dui.
                       Adipiscing elit ut aliquam purus. Dui faucibus in ornare quam.</p></Col>
                       
                       <Col>
                       <img className="image6" src="./Image/images/sssg.jpg" alt="profile picture" ></img></Col>
                       <Col className="AUT-par"> <h1>AUTOMATION</h1>
                   <p>Sed blandit libero volutpat sed cras ornare arcu dui. 
                      Adipiscing elit ut aliquam purus. Dui faucibus in ornare quam.</p> </Col>
                       </Row>
                       
                      
      
    </Container>
        </>
    )
};
export default Service;