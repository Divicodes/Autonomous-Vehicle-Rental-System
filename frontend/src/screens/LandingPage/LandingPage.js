import React from 'react'
import { Container,Row , Button} from 'react-bootstrap'
import Header from '../../Components/Header/Header';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <>
        <Header/>
        <div className="main">
            <Container>
                <Row>
                    <div className="auth-inner">
                    <div className="intro-text">
                        <h1 className='title' style={{color:'black'}}>Welcome to AV Cloud Management System</h1>
                    </div>
                    <div className = "buttonContainer">
                        < a href ="/login">
                            <Button size='lg' className='landingButton' variant='outline-primary' > Login </Button>
                        </a>
                        < a href ="/register">
                            <Button size='lg' className='landingButton' > Register </Button>
                        </a>
                    </div>
                    </div>
                    </Row>
            </Container>
            
        </div>
        </>
    )
}

export default LandingPage
