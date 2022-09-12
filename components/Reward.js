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
import css from "../styles/Reward.module.scss"

const img1 = "../images/i_reward_1.png"
const img2 = "../images/i_reward_2.png"
const img3 = "../images/i_reward_3a.png"
const img4 = "../images/i_reward_4a.png"
const img5 = "../images/i_reward_5.png"
const img6 = "../images/i_reward_6.png"
const img7 = "../images/i_reward_7.png"

export const Reward = () => {
    const router = useRouter()
    const { t } = useTranslation('index-page')
    const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;


    return (
        <>
            <section className={css.standard_reward}>
                <Container>
                    <Row>
                        <h2 data-aos="fade-up">{t("index-page:reward.0.title")}</h2>
                        <ul data-aos="fade-up">
                            <li><img src={img1} alt="reword" /></li>
                            <li><img src={img2} alt="reword" /></li>
                            <li><img src={img3} alt="reword" /></li>
                            <li><img src={img4} alt="reword" /></li>
                            <li><img src={img5} alt="reword" /></li>
                            <li><img src={img6} alt="reword" /></li>
                            <li><img src={img7} alt="reword" /></li>
                        </ul>
                    </Row>
                </Container>
            </section>
        </>
    )
}
