import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
const Footer=()=>{
    return(
        <>
         <Container  >
      <Row >
        <Col className='footer-tag'>
        <h4 >JOIN OUR NEWSLETTER</h4>
              <h1 className='footer-title'>Contact us</h1>
         <h5>3045 10 Sunrize Avenue,<br></br> 123-456-7890<br></br>
           Mon  - Fri: 9:00 am - 8:00 pm,<br></br>
          Sat -  Sun: 9:00 am - 10 pm </h5>
</Col>
<Col>  



<Form className='footer-form'>
      
       <Form.Group as={Col} controlId="formGriditem"> 
          <Form.Label>
          <select>
          
          <option value="Item 1">Item 1</option>
                              <option value="Item 2">Item 2</option>
                              <option value="Item 3">Item 3</option> </select>
                              </Form.Label>
            <Form.Control type="item"placeholder="item1"  />
          
         </Form.Group> 

        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="Name" placeholder=" Enter your Name" />
        </Form.Group>


        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your valid email address" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridmessage">
          <Form.Label>Message</Form.Label>
          <Form.Control type="Message" placeholder="Enter your message" />
        </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
</Col>
      </Row>
    </Container>
        </>
    )
}
export default Footer;