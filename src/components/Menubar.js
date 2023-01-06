import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Menubar = ({routes}) => {
    return(
    <Navbar className='menubar'>
        <Container fluid>
            <Navbar.Brand>
                <h2>Victor Kruglov</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{right:'none'}}>
                <Nav className="me-auto">
                {
                routes.map((prop,key) => 
                    <Nav.Link href={'#'+prop.path} key={key} style={{fontSize:'20px'}}>{prop.name}</Nav.Link>
                )
                }
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Menubar