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
import { CoconutChips_sub } from './CoconutChips_sub'


export const CoconutChips = () => {
    const router = useRouter()
    const { t } = useTranslation('coconut_chips')    

    const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;

    const block = t('CoconutChips.0.sub', { returnObjects: true });

    return (
        <>
            <section className={css.structure_sub}>
                <Container>
                    <h2 className='text-center'>{t("CoconutChips.0.title")}</h2>
                    <p dangerouslySetInnerHTML={{ __html: t("CoconutChips.0.detail") }}></p>

                    <Row>
                        {block.map((CoconutChips, index) => (
                            <Col lg={6} key={index} data-aos="fade-up">
                                <Row className={css.product_cate}>
                                    <Col lg={6} xs={12} className={css.img}>
                                        <img className='img-fluid' src={CoconutChips.img} />
                                    </Col>
                                    <Col lg={6} xs={12} className={css.desc}>
                                        <h3>{CoconutChips.title}</h3>
                                        <p dangerouslySetInnerHTML={{ __html: CoconutChips.desc }}></p>
                                    </Col>
                                </Row>
                            </Col>
                        ))}
                    </Row>
                </Container>

                <CoconutChips_sub />
            </section>
        </>
    )
}

