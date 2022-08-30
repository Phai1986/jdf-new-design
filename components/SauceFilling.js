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
import css from "../styles/Product.module.scss"
import { SauceFilling_sub } from './SauceFilling_sub'


export const SauceFilling = () => {
    const router = useRouter()
    const { t } = useTranslation('sauce_filling')
    const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;

    const block = t('SauceFilling.0.sub', { returnObjects: true });

    return (
        <>
            <section className={css.structure_sub}>
                <Container>
                    <h2 className='text-center'>{t("SauceFilling.0.title")}</h2>
                    <p dangerouslySetInnerHTML={{ __html: t("SauceFilling.0.detail") }}></p>

                    <Row>
                        {block.map((SauceFilling, index) => (
                            <Col lg={6} key={index} data-aos="fade-up">
                                <Row className={css.product_cate}>
                                    <Col lg={6} xs={12} className={css.img}>
                                        <img className='img-fluid' src={SauceFilling.img} />
                                    </Col>
                                    <Col lg={6} xs={12} className={css.desc}>
                                        <h3>{SauceFilling.title}</h3>
                                        <p dangerouslySetInnerHTML={{ __html: SauceFilling.desc }}></p>
                                    </Col>
                                </Row>
                            </Col>
                        ))}
                    </Row>
                </Container>

                <SauceFilling_sub />
            </section>
        </>
    )
}

