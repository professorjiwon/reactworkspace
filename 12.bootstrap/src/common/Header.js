import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form } from 'react-bootstrap';
import {useState} from 'react';

const Header = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <header id='header'>
            <img src={'https://www.tjoeun.co.kr/images/head_mcl_logo.jpg?v=20190918'} className='logo'/>
            <h1>Tjoeun</h1>
            <div>
                <Button variant="outline-secondary">회원가입</Button>
                <Button variant="outline-success" onClick={handleShow}>로그인</Button>
            </div>
            <Login show={show} handleClose={handleClose}/>
        </header>
    )
}

function Login({show, handleShow, handleClose}) {
    return (
        <div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
}
export default Header;