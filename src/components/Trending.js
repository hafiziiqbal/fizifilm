import { Card, Container, Row, Col, Image } from "react-bootstrap"
import duneImage from "../assets/images/trending/dune.jpg"
import everythingImage from "../assets/images/trending/everything.jpg"
import infiniteImage from "../assets/images/trending/infinite.jpg"
import jokerImage from "../assets/images/trending/joker.jpg"
import lightyearImage from "../assets/images/trending/lightyear.jpg"
import morbiusImage from "../assets/images/trending/morbius.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-center fw-bold text-white">TRENDING MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movie-wrapper">
                        <Card className="text-white bg-dark movie-image">
                            <Card.Img src={duneImage} alt="Dune Movies" />
                            <div className="m-1 p-2">
                                <Card.Title className="text-center ">DUNE</Card.Title>
                                <Card.Text className="text-left">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ae
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movie-wrapper">
                        <Card className="text-white bg-dark movie-image">
                            <Card.Img src={everythingImage} alt="Dune Movies" />
                            <div className="m-1 p-2">
                                <Card.Title className="text-center ">EVERYTHING</Card.Title>
                                <Card.Text className="text-left">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ae
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movie-wrapper">
                        <Card className="text-white bg-dark movie-image">
                            <Card.Img src={infiniteImage} alt="Dune Movies" />
                            <div className="m-1 p-2">
                                <Card.Title className="text-center ">INFINITE</Card.Title>
                                <Card.Text className="text-left">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ae
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movie-wrapper">
                        <Card className="text-white bg-dark movie-image">
                            <Card.Img src={jokerImage} alt="Dune Movies" />
                            <div className="m-1 p-2">
                                <Card.Title className="text-center ">JOKER</Card.Title>
                                <Card.Text className="text-left">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ae
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movie-wrapper">
                        <Card className="text-white bg-dark movie-image">
                            <Card.Img src={lightyearImage} alt="Dune Movies" />
                            <div className="m-1 p-2">
                                <Card.Title className="text-center ">LIGHTYEAR</Card.Title>
                                <Card.Text className="text-left">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ae
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movie-wrapper">
                        <Card className="text-white bg-dark movie-image">
                            <Card.Img src={morbiusImage} alt="Dune Movies" />
                            <div className="m-1 p-2">
                                <Card.Title className="text-center ">MORBIUS</Card.Title>
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

export default Trending