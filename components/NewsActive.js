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
import css from "../styles/NewsActive.module.scss"


export const NewsActive = () => {
    const router = useRouter()
    const { t } = useTranslation('About-us')
    const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;

    const block = t('newsactive.0.news', { returnObjects: true });

    return (
        <>
            <section className={css.news_active}>
                <Container>
                    <h2>{t("newsactive.0.title")}</h2>
                    {block.map((block, index) => (
                        <Row key={index} className={css.hisbox}>
                            <Col lg={6} sm={6} xs={12} className={css.line} data-aos="fade-left">
                                <img className='img-fluid' src={block.img} />
                            </Col>
                            <Col lg={6} sm={6} xs={12} data-aos="fade-right">
                                <h3>{block.years}</h3>
                                <h4>{block.title}</h4>
                                <p>{block.text}</p>
                            </Col>
                        </Row>
                    ))}
                </Container>

            </section>
        </>
    )
}

