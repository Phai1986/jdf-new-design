import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import LanguageSwitchLink from './LanguageSwitchLink'
import pkg from 'next-i18next/package.json'
import pkgLD from 'next-language-detector/package.json'
import i18nextConfig from '../next-i18next.config';

import React from "react";
import Link from 'next/link'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import css from "../styles/Product_Service_Blog.module.scss"


export const Product_Service_Blog = () => {
    const router = useRouter()
    const { t } = useTranslation('Product-Service-Blog')
    const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;

    const block = t('product_block', { returnObjects: true });

    return (
        <>
            {/* {t("Product-Service-Blog:array.0.img")} */}
            <section className={css.product_service}>
                <Container>
                    <h2 className='text-center' data-aos="fade-up">{t("Product-Service-Blog:product_title")}</h2>
                    <Row className={css.product}>
                        {block.map((block, index) => (
                            <Col key={index} lg={3} md={6} data-aos="fade-up" data-aos-duration={index * 200}>
                                <Link href={block.link}>
                                    <Card className={css.card}>
                                        <Card.Img variant="top" src={block.img} />
                                        <Card.Body>
                                            <Card.Title className={css.card_title}>{block.title}</Card.Title>
                                            <Card.Text className={css.card_text}>
                                                {block.text}
                                            </Card.Text>
                                            {/* <Button variant="primary">Go somewhere</Button> */}
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    )
}

