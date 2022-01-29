import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            HackerMatch
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br/>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title id="home-title">
                  Form your dream team with HackerMatch
                </Card.Title>
                <Card.Text className="mb-0">
                  HackerMatch is a platform that helps you find your perfect hackathon team.
                  Our intuitive sorting methods allow you to find teammates that complement your skillsets and requirements.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
