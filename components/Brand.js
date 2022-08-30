import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import i18nextConfig from '../next-i18next.config';

import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import css from "../styles/Brand.module.scss"

const img1 = "../images/brand1.png"
const img2 = "../images/brand2.png"
const img3 = "../images/brand3.png"
const img4 = "../images/brand4.png"

export const Brand = () => {
    const router = useRouter()
    const { t } = useTranslation('index-page')
    const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;


    return (
        <>
            <section className={css.jdf_brand}>
                <Container>
                    <Row>
                        <h2 data-aos="fade-up">{t("index-page:brand.0.title")}</h2>
                        <ul data-aos="fade-up">
                            <li><img src={img1} alt="reword" /></li>
                            <li><img src={img2} alt="reword" /></li>
                            <li><img src={img3} alt="reword" /></li>
                            <li><img src={img4} alt="reword" /></li>
                        </ul>
                    </Row>
                </Container>
            </section>
        </>
    )
}
