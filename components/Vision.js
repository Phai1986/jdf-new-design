import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import LanguageSwitchLink from './LanguageSwitchLink'
import pkg from 'next-i18next/package.json'
import pkgLD from 'next-language-detector/package.json'
import i18nextConfig from '../next-i18next.config';

import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import css from "../styles/Vision.module.scss"


export const Vision = () => {
    const router = useRouter()
    const { t } = useTranslation('About-us')
    const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;

    const block = t('vision.0.block', { returnObjects: true });

    return (
        <>
            <section className={css.vision}>
                <Container>
                    <Row>
                        <Row className={css.product}>
                            {block.map((block, index) => (
                                <Col key={index} lg={4} md={6} className={css.block} data-aos="fade-up">
                                    <Card className={css.card}>
                                        <Card.Img className={css.img} src={block.img} alt="Card image" />
                                        <Card.ImgOverlay className={css.overlay}>
                                            <Card.Title className={css.card_title}>{block.title}</Card.Title>
                                            <Card.Text className={css.card_text}>
                                                {block.text}
                                            </Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Row>
                </Container>

            </section>
        </>
    )
}

