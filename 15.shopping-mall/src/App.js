import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import clothes1 from './img/clothes1.png'

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Fashion Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'/> 

      <Container>
        <Row>
          <Col>
            {/* src 하위에 넣었을 때는 import하여 넣는다 */}
            <img src = {clothes1} width="80%"/>
            <h4>상품명</h4>
            <p>상품정보</p>
          </Col>
          <Col>
            {/* public/img 폴더에 그림이 있을 때 import 필요없음 */}
            <img src = "/img/clothes2.png" width="80%"/>
            <h4>상품명</h4>
            <p>상품정보</p>
          </Col>
          <Col>
            {/* public/img 폴더에 그림이 있고 배포할 때 url을 얻어와서 앞에 넣어준다 */}
            {/* 배포시 tjoeun.com/abc/~~~  하위 경로일때는 그림을 못찾음. */}
            {/* <img src = {process.env.PUBLIC_URL + '/img/clothes2.png'} /> */}
            <img src = {`${process.env.PUBLIC_URL}/img/clothes3.png`} width="80%"/>
            <h4>상품명</h4>
            <p>상품정보</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
