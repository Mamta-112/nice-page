import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import'./Main.css'
const Home=()=>{
    return(
        <>
        <nav className="navbar">
    <img className="navbar-image" src="./Image/images/girl.jpg" alt="profile picture" ></img>
    
    </nav> 
    <h1 className='navbar-title'>Welcome to Consulting Firm </h1>
    <div className="pargrap">
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br>
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br> Ut enim ad minim veniam,
        quis nostrud exercitation ullamco<br></br> laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <button className='btn-title1'>LEARN MORE</button>
       
    <Container className='mt-5'>
        <Row>
            <Col className='col1'>
            <p>Sample text. Click to select the text box.
           Click again or double click to start editing the text.
                <br></br>
                <br></br>
                 <h4><b>-May Smith</b></h4>
                 creative leader
                 
                 </p>
            
            </Col>
            
            <Col>
            <img className="home-image1" src="./Image/images/pic.jpg" alt="profile picture" ></img>
            <h1 className='man-title'>CHANGE<br></br> MANAGEMENT</h1>
            
           
            </Col>
            <Col>
            <p className='col2'>Sample text. Click to select the text box. Click again or double click to start editing the text.
           <br></br><br></br> <h6>LEARN MORE</h6></p>
            </Col>
        </Row>
        <img className="home-image2" src="./Image/images/comp.jpg" alt="profile picture" ></img>
    </Container>
     
        </>
    )

} 
export default Home;

