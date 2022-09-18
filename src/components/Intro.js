import { Button, Col, Container, Row } from 'react-bootstrap';

const Intro = () => {
    return (
        <div className='intro'>
            <Container className='text-white d-flex justify-content-center align-items-center'>
                <Row>
                    <Col>
                        <div className='title'>NONTON SEPUASNYA</div>
                        <div className='title'>TANPA BAYAR</div>
                        <div className='intro-button mt-4 text-center'>
                            <Button variant='dark'>Lihat Semua List</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro