import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact=()=>{
    return(
        <>
        <Container>
      <Row>
        <Col className='contact-heading'><h1>Benefits of Coaching for Individuals.</h1></Col>
        <Col className='con-list'><li>Establish and act toward achieving goals</li>
           <li> Increased level of engagement</li>

            <li> Safe Place to Gain Perspective</li> 
                <li> Deeper Level of Learning</li>
                 <li>Build Personal Awareness</li>
                 <li> Boost your networking opportunities</li></Col>
                 <Col className='con-par'>
                 Sed pulvinar proin gravida hendrerit lectus. Faucibus et molestie ac feugiat sed.
                  Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. 
             Turpis egestas integer eget aliquet nibh praesent. Vitae et leo duis ut diam quam nulla porttitor massa. 
                 Quis lectus nulla at volutpat diam ut venenatis tellus.
                Eget nullam non nisi est sit amet facilisis magna etiam. </Col>
      </Row>
    </Container>
    <h1 className='fact-title'>Some facts about us</h1>
       <p className='fact-text'> Sample text. Click to select the text box. Click again or double click to start editing the text.
         Image from </p>
         <button className='fact-btn'>LEARN MORE</button><br></br>
         <Container>
         <img className="image7" src="./Image/images/boygirl.jpg" alt="profile picture" ></img>
      <Row >
        
        <Col className='fact-box1'>PROJECTS<br></br> 100</Col>
        <Col className='fact-box2'>CLIENTS <br></br>40</Col>
        <Col className='fact-box3'>OUR TEAM <br></br>20</Col>
        <Col className='fact-box4'>AWARDS <br></br>76</Col>
        
      </Row>
    </Container>
         
        </>
    )
};
export default Contact;