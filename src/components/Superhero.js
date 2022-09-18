import { Card, Container, Row, Col } from "react-bootstrap"
import antmanImage from "../assets/images/superhero/antman.jpg"
import avengerImage from "../assets/images/superhero/avenger.jpg"
import batmanImage from "../assets/images/superhero/batman.jpg"
import robinhoodImage from "../assets/images/superhero/robinhood.jpg"
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg"
import supermanImage from "../assets/images/superhero/superman.jpg"

const Superhero = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-center fw-bold text-white">SUPERHERO MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movie-wrapper">
                        <Card className="text-white bg-dark movie-image">
                            <Card.Img src={antmanImage} alt="Dune Movies" />
                            <div className="m-1 p-2">
                                <Card.Title className="text-center ">ANT MAN</Card.Title>
                                <Card.Text className="text-left">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ae
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movie-wrapper">
                        <Card className="text-white bg-dark movie-image">
                            <Card.Img src={avengerImage} alt="Dune Movies" />
                            <div className="m-1 p-2">
                                <Card.Title className="text-center ">AVENGER</Card.Title>
                                <Card.Text className="text-left">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ae
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movie-wrapper">
                        <Card className="text-white bg-dark movie-image">
                            <Card.Img src={batmanImage} alt="Dune Movies" />
                            <div className="m-1 p-2">
                                <Card.Title className="text-center ">BATMAN</Card.Title>
                                <Card.Text className="text-left">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ae
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movie-wrapper">
                        <Card className="text-white bg-dark movie-image">
                            <Card.Img src={robinhoodImage} alt="Dune Movies" />
                            <div className="m-1 p-2">
                                <Card.Title className="text-center ">ROBINHOOD</Card.Title>
                                <Card.Text className="text-left">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ae
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movie-wrapper">
                        <Card className="text-white bg-dark movie-image">
                            <Card.Img src={spidermanImage} alt="Dune Movies" />
                            <div className="m-1 p-2">
                                <Card.Title className="text-center ">SPIDERMAN</Card.Title>
                                <Card.Text className="text-left">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ae
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movie-wrapper">
                        <Card className="text-white bg-dark movie-image">
                            <Card.Img src={supermanImage} alt="Dune Movies" />
                            <div className="m-1 p-2">
                                <Card.Title className="text-center ">SUPERMAN</Card.Title>
                                <Card.Text className="text-left">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ae
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Superhero