import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import LanguageSwitchLink from './LanguageSwitchLink'
import pkg from 'next-i18next/package.json'
import pkgLD from 'next-language-detector/package.json'
import i18nextConfig from '../next-i18next.config';

import React, { Component, useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import css from "../styles/Product.module.scss"
import { Seasonings_Sub } from './Seasonings_Sub'
import Link from '../components/Link'


export const Seasonings = () => {
    const router = useRouter()
    const { t } = useTranslation('seasonings')
    const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;

    const block = t('Seasonings.0.sub', { returnObjects: true });
    const [tabs, setTabs] = useState();


    return (
        <>
            <section className={css.structure_sub}>
                <Container>
                    <h2 className='text-center'>{t("Seasonings.0.title")}</h2>
                    <p dangerouslySetInnerHTML={{ __html: t("Seasonings.0.detail") }}></p>
                    <Row>
                        {block.map((Seasonings, index) => (
                            <Col lg={6} key={index} data-aos="fade-up" onClick={() => {
                                setTabs(Seasonings.tab)
                            }}>
                                <Link href="/product#sub1">
                                    <Row className={css.product_cate}>
                                        <Col lg={6} md={6} xs={12} className={css.img}>
                                            <img className='img-fluid' src={Seasonings.img} />
                                        </Col>
                                        <Col lg={6} md={6} xs={12} className={css.desc}>
                                            <h3>{Seasonings.title}</h3>
                                            <p dangerouslySetInnerHTML={{ __html: Seasonings.desc }}></p>
                                        </Col>
                                    </Row>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Container>

                <div id="sub1">
                    <Seasonings_Sub tabCurrent={tabs} />
                </div>

            </section>


        </>
    )
}

