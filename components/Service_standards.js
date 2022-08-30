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
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import css from "../styles/Service_standards.module.scss"


export const Service_standards = () => {
    const router = useRouter()
    const { t } = useTranslation('Service-standards')
    const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;

    const block = t('post_block', { returnObjects: true });

    return (
        <>
            <section className={css.service_standards}>
                <Container>
                    <h2 className='text-center'>{t("Service-standards:title")}</h2>
                </Container>
                <Row className={css.product}>
                    {block.map((block, index) => (
                        <Col key={index} lg={3} md={6} className={css.block} data-aos="fade-up">
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

            </section>
        </>
    )
}

