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
import css from "../styles/HistoryBackground.module.scss"


export const HistoryBackground = () => {
    const router = useRouter()
    const { t } = useTranslation('About-us')
    const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;

    const block = t('historybg', { returnObjects: true });

    return (
        <>
            <section className={css.history_background}>
                <Container>
                    {block.map((block, index) => (
                        <Row key={index} className={css.hisbox}>
                            <div className={css.bg_year}>{block.yaer}</div>
                            <h2>{block.title}</h2>
                            <Col lg={6} sm={6} xs={5} className={css.line} data-aos="fade-left"><h3>{block.yaer}</h3></Col>
                            <Col lg={6} sm={6} xs={7} data-aos="fade-right"><p>{block.text}</p></Col>
                        </Row>
                    ))}
                </Container>

            </section>
        </>
    )
}

