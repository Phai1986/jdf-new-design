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
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import css from "../styles/Product.module.scss"


export const SauceFilling_sub = () => {
    const router = useRouter()
    const { t } = useTranslation('sauce_filling_sub')
    const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;

    const block1_1 = t('SauceFilling_sub.0.list_items.0.sub_list_items', { returnObjects: true });
    const block1_2 = t('SauceFilling_sub.0.list_items.1.sub_list_items', { returnObjects: true });
    const block1_3 = t('SauceFilling_sub.0.list_items.2.sub_list_items', { returnObjects: true });

    const block2 = t('SauceFilling_sub.1.list_items', { returnObjects: true });

    return (
        <>
            <Container fluid className={css.content_sub}>
                <Row>
                    <div className={css.product_tab}>
                        <Tabs
                            defaultActiveKey={t("SauceFilling_sub.0.title")}
                            id="uncontrolled-tab-example"
                            className={css.tab_sub}
                        >
                            <Tab eventKey={t("SauceFilling_sub.0.title")} title={t("SauceFilling_sub.0.title")}>

                                <Container className={css.content}>
                                    <h3 className='text-center'>{t("SauceFilling_sub.0.title")}</h3>
                                    <p className='text-center' dangerouslySetInnerHTML={{ __html: t("SauceFilling_sub.0.desc") }}></p>
                                    <h4>{t("sauce_filling_sub:text_top")}</h4>
                                    <Row>
                                        <Col lg={2}></Col>
                                        <Col lg={3}>
                                            <h5>{t('SauceFilling_sub.0.list_items.0.sub_title')}</h5>
                                            <ul className={`${css.list} ${css.list_1}`}>
                                                {block1_1.map((SauceFilling_sub, index) => (
                                                    <li key={index}>{SauceFilling_sub}</li>
                                                ))}
                                            </ul>
                                        </Col>
                                        <Col lg={3}>
                                            <h5>{t('SauceFilling_sub.0.list_items.1.sub_title')}</h5>
                                            <ul className={`${css.list} ${css.list_1}`}>
                                                {block1_2.map((SauceFilling_sub, index) => (
                                                    <li key={index}>{SauceFilling_sub}</li>
                                                ))}
                                            </ul>
                                        </Col>
                                        <Col lg={3}>
                                            <h5>{t('SauceFilling_sub.0.list_items.2.sub_title')}</h5>
                                            <ul className={`${css.list} ${css.list_1}`}>
                                                {block1_3.map((SauceFilling_sub, index) => (
                                                    <li key={index}>{SauceFilling_sub}</li>
                                                ))}
                                            </ul>
                                        </Col>
                                        <Col lg={1}></Col>
                                    </Row>
                                </Container>
                            </Tab>
                            <Tab eventKey={t("SauceFilling_sub.1.title")} title={t("SauceFilling_sub.1.title")}>
                                <Container className={css.content}>
                                    <h3 className='text-center'>{t("SauceFilling_sub.1.title")}</h3>
                                    <p className='text-center' dangerouslySetInnerHTML={{ __html: t("SauceFilling_sub.1.desc") }}></p>
                                    <h4>{t("sauce_filling_sub:text_top")}</h4>
                                    <h4>{t('SauceFilling_sub.1.title')}</h4>
                                    <Row>
                                        <Col lg="3"></Col>
                                        <Col lg="7">
                                            <ul className={`${css.list} ${css.list_2}`}>
                                                {block2.map((SauceFilling_sub, index) => (
                                                    <li key={index}>{SauceFilling_sub}</li>
                                                ))}
                                            </ul>
                                        </Col>
                                        <Col lg="2"></Col>
                                    </Row>
                                </Container>
                            </Tab>
                        </Tabs>
                    </div>
                </Row>
            </Container>
        </>
    )
}

