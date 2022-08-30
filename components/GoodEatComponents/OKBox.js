import { useTranslation } from 'next-i18next'

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import css from "../../styles/GoodEats.module.scss"
import CardProductInSlide from "../CardProductInSlide";

export const OKBox = () => {
    const { t } = useTranslation('GoodEat')

    const block = t('GoodEat:okseasonings.items', { returnObjects: true });
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoPlay: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className={css.history}>
                <Container>
                    <Row>
                        <Col lg={12} data-aos="fade-up">
                            <Row className={css.banner_box} style={{ backgroundColor: "#f0f0f0", margin: "0 0 30px" }}>
                                <Col lg={7} xs={12} className={css.desc} style={{ padding: "40px" }}>
                                    <img src={t("GoodEat:okseasonings.banner.logo")} width={120} />
                                    <p dangerouslySetInnerHTML={{ __html: t("GoodEat:okseasonings.banner.p") }}></p>
                                </Col>
                                <Col lg={5} xs={12} className={css.img}>
                                    <img className='img-fluid float-end' src={t("GoodEat:okseasonings.banner.img")} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Slider {...settings} className={css.slider}>
                                {block.map((el, index) => (
                                    <CardProductInSlide item={el} key={index.toString()} />
                                ))}
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}