import React, {useEffect, useState} from 'react';
import {Button, Card, Carousel, Col, Container, Row} from "react-bootstrap";
import axios from "axios";

const Main = () => {

    const [manyProducts, setManyProducts] = useState([]);

    const getManyProducts = async () => {

        const address = "http://localhost:9090/api/products";

        try {

            const productGeting = await axios.get(address);


            console.log("$$$$$$$$$$$$$$$$",productGeting.data.products)

            setManyProducts(productGeting.data.products)



        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        getManyProducts()
    }, [])

    const carouseItem = [
        {
            "id" : "1",
            "title" : "d-block w-100",
            "desc" : "First slide",
            "img" : require('../img/one.jpg'),
            "label" : "Make a gift!"
        },
        {
            "id" : "2",
            "title" : "d-block w-100",
            "desc" : "Second slide",
            "img" : require('../img/two.jpg'),
            "label" : "Let's think of the Earth together!"
        },
        {
            "id" : "3",
            "title" : "d-block w-100",
            "desc" : "Third slide",
            "img" : require('../img/three.jpg'),
            "label" : "Your environment will improve!"
        }
    ];

    // const productItem = [
    //     {
    //         "id" : "1",
    //         "title" : "macbook #1",
    //         "img" : require('../img/macbook-air.jpg'),
    //         "explanation" : "MacBooks entered a new era. The company announced it was moving away from the Intel chips it had been using since 2006, and rolled out the first Macs with the Apple-designed M1."
    //     },
    //     {
    //         "id" : "2",
    //         "title" : "macbook #2",
    //         "img" : require('../img/macbook-air.jpg'),
    //         "explanation" : "MacBooks entered a new era. The company announced it was moving away from the Intel chips it had been using since 2006, and rolled out the first Macs with the Apple-designed M1."
    //     },
    //     {
    //         "id" : "3",
    //         "title" : "macbook #3",
    //         "img" : require('../img/macbook-air.jpg'),
    //         "explanation" : "MacBooks entered a new era. The company announced it was moving away from the Intel chips it had been using since 2006, and rolled out the first Macs with the Apple-designed M1."
    //     },
    //     {
    //         "id" : "4",
    //         "title" : "macbook #4",
    //         "img" : require('../img/macbook-air.jpg'),
    //         "explanation" : "MacBooks entered a new era. The company announced it was moving away from the Intel chips it had been using since 2006, and rolled out the first Macs with the Apple-designed M1."
    //     },
    //     {
    //         "id" : "5",
    //         "title" : "macbook #5",
    //         "img" : require('../img/macbook-air.jpg'),
    //         "explanation" : "MacBooks entered a new era. The company announced it was moving away from the Intel chips it had been using since 2006, and rolled out the first Macs with the Apple-designed M1."
    //     },
    //     {
    //         "id" : "6",
    //         "title" : "macbook #6",
    //         "img" : require('../img/macbook-air.jpg'),
    //         "explanation" : "MacBooks entered a new era. The company announced it was moving away from the Intel chips it had been using since 2006, and rolled out the first Macs with the Apple-designed M1."
    //     },
    //     {
    //         "id" : "7",
    //         "title" : "macbook #7",
    //         "img" : require('../img/macbook-air.jpg'),
    //         "explanation" : "MacBooks entered a new era. The company announced it was moving away from the Intel chips it had been using since 2006, and rolled out the first Macs with the Apple-designed M1."
    //     },
    //     {
    //         "id" : "8",
    //         "title" : "macbook #8",
    //         "img" : require('../img/macbook-air.jpg'),
    //         "explanation" : "MacBooks entered a new era. The company announced it was moving away from the Intel chips it had been using since 2006, and rolled out the first Macs with the Apple-designed M1."
    //     },
    //     {
    //         "id" : "9",
    //         "title" : "macbook #9",
    //         "img" : require('../img/macbook-air.jpg'),
    //         "explanation" : "MacBooks entered a new era. The company announced it was moving away from the Intel chips it had been using since 2006, and rolled out the first Macs with the Apple-designed M1."
    //     }
    //
    // ]

    return (
        <>

            {/* benner */}

            <Carousel nextLabel={""} prevLabel={""}>
                {carouseItem && carouseItem.map(e => (
                    <Carousel.Item>
                        <img
                            className={e.title}
                            src={e.img}
                            alt={e.desc}
                        />
                        <Carousel.Caption>
                            <h3 className="text-white">{e.desc}</h3>
                            {e.label}
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>

            {/*  product  */}

            <Container>
                <Row>
                    <Col className={"mt-5"}>
                            {manyProducts && manyProducts.map(m => (
                                <Card className={"mt-5"} style={{ width: '18rem' }}>
                                    <Card.Img
                                        variant="top"
                                        src={m.image}
                                    />
                                    <Card.Body>
                                        <Card.Title>
                                            {m.name}
                                        </Card.Title>
                                        <Card.Text>
                                            {m.brand}
                                        </Card.Text>
                                        <Button variant="primary">Go Shopping</Button>
                                    </Card.Body>
                                </Card>
                            ))}
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default Main;