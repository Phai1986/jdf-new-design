import { useTranslation } from 'next-i18next'

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import css from "../../styles/GoodEats.module.scss"

export const KindeeBox = () => {
    const { t } = useTranslation('GoodEat')

    const block = t('GoodEat:kindee.items', { returnObjects: true });
    return (
        <>
            <Container>
                <Row>
                    <Col lg={12} data-aos="fade-up">
                        <Row className={css.banner_box} style={{ backgroundColor: "#f0f0f0", margin: "0 0 30px" }}>
                            <Col lg={5} xs={12} className={css.img}>
                                <img className='img-fluid float-end' src={t("GoodEat:kindee.banner.img")} />
                            </Col>
                            <Col lg={7} xs={12} className={css.desc} style={{ padding: "40px" }}>
                                <img src={t("GoodEat:kindee.banner.logo")} width={120} />
                                <p dangerouslySetInnerHTML={{ __html: t("GoodEat:kindee.banner.p") }}></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container style={{ marginBottom: "30px" }}>
                <Row>
                    {block.map((item, index) => (
                        <Col lg={4} key={index} data-aos="fade-up">
                            <Row className={css.card}>
                                <Col lg={12} xs={12} className={css.img}>
                                    <img className='img-fluid' src={item.img} />
                                </Col>
                                <Col lg={12} xs={12} className={css.desc}>
                                    <h3>{item.h1}</h3>
                                    <p dangerouslySetInnerHTML={{ __html: item.p }}></p>
                                </Col>
                            </Row>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}