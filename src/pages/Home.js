import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import picture from '../profile-pic.jpeg'

const Home = () => {
    return(
    <>
    <Row>
        <Col xs={2}>

            <img style={{width:'100%'}}src={picture}/>
        </Col>
        <Col xs={10}>
            <h1>Vitya's Home!</h1>
            <p>
                Something Something nice
            </p>

        </Col>
    </Row>
        
    </>
    )
}

export default Home