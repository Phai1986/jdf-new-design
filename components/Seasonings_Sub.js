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


export const Seasonings_Sub = () => {
    const router = useRouter()
    const { t } = useTranslation('seasonings_sub')
    const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;

    const block1 = t('Seasonings_sub.0.list_items', { returnObjects: true });
    const block2 = t('Seasonings_sub.1.list_items', { returnObjects: true });

    const block3_1 = t('Seasonings_sub.2.list_items.0.sub_list_items', { returnObjects: true });
    const block3_2 = t('Seasonings_sub.2.list_items.1.sub_list_items', { returnObjects: true });

    const block4 = t('Seasonings_sub.3.list_items', { returnObjects: true });
    const block4_cards = t('Seasonings_sub.3.cards', { returnObjects: true });

    const block5_1 = t('Seasonings_sub.4.list_items.0.sub_list_items', { returnObjects: true });
    const block5_2 = t('Seasonings_sub.4.list_items.1.sub_list_items', { returnObjects: true });

    const block6_1 = t('Seasonings_sub.5.list_items.0.sub_list_items', { returnObjects: true });
    const block6_2 = t('Seasonings_sub.5.list_items.1.sub_list_items', { returnObjects: true });
    const block6_3 = t('Seasonings_sub.5.list_items.2.sub_list_items', { returnObjects: true });
    const block6_4 = t('Seasonings_sub.5.list_items.3.sub_list_items', { returnObjects: true });

    const block7_1 = t('Seasonings_sub.6.list_items.0.sub_list_items', { returnObjects: true });
    const block7_2 = t('Seasonings_sub.6.list_items.1.sub_list_items', { returnObjects: true });
    const block7_3 = t('Seasonings_sub.6.list_items.2.sub_list_items', { returnObjects: true });
    const block7_4 = t('Seasonings_sub.6.list_items.3.sub_list_items', { returnObjects: true });
    const block7_5 = t('Seasonings_sub.6.list_items.4.sub_list_items', { returnObjects: true });

    return (
        <>
            <Container fluid className={css.content_sub}>
                <Row>
                    <div className={css.product_tab}>
                        <Tabs
                            defaultActiveKey={t("seasonings_sub.0.title")}
                            id="uncontrolled-tab-example"
                            className={css.tab_sub}
                        >
                            <Tab eventKey={t("seasonings_sub.0.title")} title={t("Seasonings_sub.0.title")}>
                                <Container className={css.content}>
                                    <h3 className='text-center'>{t("Seasonings_sub.0.title")}</h3>
                                    <p className='text-center' dangerouslySetInnerHTML={{ __html: t("Seasonings_sub.0.desc") }}></p>
                                    <h4>{t("seasonings_sub:text_top")}</h4>
                                    <ul className={`${css.list} ${css.list_4}`}>
                                        {block1.map((seasonings_sub, index) => (
                                            <li key={index}>{seasonings_sub}</li>
                                        ))}
                                    </ul>
                                </Container>
                            </Tab>
                            <Tab eventKey={t("seasonings_sub.1.title")} title={t("Seasonings_sub.1.title")}>
                                <Container className={css.content}>
                                    <h3 className='text-center'>{t("Seasonings_sub.1.title")}</h3>
                                    <p className='text-center' dangerouslySetInnerHTML={{ __html: t("Seasonings_sub.1.desc") }}></p>
                                    <h4>{t("seasonings_sub:text_top")}</h4>
                                    <ul className={`${css.list} ${css.list_4}`}>
                                        {block2.map((seasonings_sub, index) => (
                                            <li key={index}>{seasonings_sub}</li>
                                        ))}
                                    </ul>
                                </Container>
                            </Tab>
                            <Tab eventKey={t("seasonings_sub.2.title")} title={t("Seasonings_sub.2.title")}>
                                <Container className={css.content}>
                                    <h3 className='text-center'>{t("Seasonings_sub.2.title")}</h3>
                                    <p className='text-center' dangerouslySetInnerHTML={{ __html: t("Seasonings_sub.2.desc") }}></p>
                                    <h4>{t("seasonings_sub:text_top")}</h4>
                                    <Row>
                                        <Col lg={6}>
                                            <h5>{t('Seasonings_sub.2.list_items.0.sub_title')}</h5>
                                            <ul className={`${css.list} ${css.list_2}`}>
                                                {block3_1.map((seasonings_sub, index) => (
                                                    <li key={index}>{seasonings_sub}</li>
                                                ))}
                                            </ul>
                                        </Col>
                                        <Col lg={6}>
                                            <h5>{t('Seasonings_sub.2.list_items.1.sub_title')}</h5>
                                            <ul className={`${css.list} ${css.list_2}`}>
                                                {block3_2.map((seasonings_sub, index) => (
                                                    <li key={index}>{seasonings_sub}</li>
                                                ))}
                                            </ul>
                                        </Col>
                                    </Row>
                                </Container>
                            </Tab>
                            <Tab eventKey={t("seasonings_sub.3.title")} title={t("Seasonings_sub.3.title")}>
                                <Container className={css.content}>
                                    <h3 className='text-center'>{t("Seasonings_sub.3.title")}</h3>
                                    <p className='text-center' dangerouslySetInnerHTML={{ __html: t("Seasonings_sub.3.desc") }}></p>
                                    <Row>
                                    {block4_cards.map((Seasonings, index) => (
                                        <Col lg={3} key={index} data-aos="fade-up">
                                            <Row className={`${css.product_cate} ${css.blue_card}`}>
                                                <Col lg={12} xs={12} className={css.img}>
                                                    <img className='img-fluid' src={`../../images/product/Seasonings/Thai-Seasonings/${Seasonings.img}`} />
                                                </Col>
                                                <Col lg={12} xs={12} className={css.desc}>
                                                    <h3 className={css.small_gap}>{Seasonings.title}</h3>
                                                    <p dangerouslySetInnerHTML={{ __html: Seasonings.desc }}></p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    ))}
                                    </Row>
                                    <h4>{t("seasonings_sub:text_top")}</h4>
                                    <ul className={`${css.list} ${css.list_4}`}>
                                        {block4.map((seasonings_sub, index) => (
                                            <li key={index}>{seasonings_sub}</li>
                                        ))}
                                    </ul>
                                </Container>
                            </Tab>
                            <Tab eventKey={t("seasonings_sub.4.title")} title={t("Seasonings_sub.4.title")}>
                                <Container className={css.content}>
                                    <h3 className='text-center'>{t("Seasonings_sub.4.title")}</h3>
                                    <p className='text-center' dangerouslySetInnerHTML={{ __html: t("Seasonings_sub.4.desc") }}></p>
                                    <h4>{t("seasonings_sub:text_top")}</h4>
                                    <Row>
                                        <Col lg={6}>
                                            <h5>{t('Seasonings_sub.4.list_items.0.sub_title')}</h5>
                                            <ul className={`${css.list} ${css.list_2}`}>
                                                {block5_1.map((seasonings_sub, index) => (
                                                    <li key={index}>{seasonings_sub}</li>
                                                ))}
                                            </ul>
                                        </Col>
                                        <Col lg={6}>
                                            <h5>{t('Seasonings_sub.4.list_items.1.sub_title')}</h5>
                                            <ul className={`${css.list} ${css.list_2}`}>
                                                {block5_2.map((seasonings_sub, index) => (
                                                    <li key={index}>{seasonings_sub}</li>
                                                ))}
                                            </ul>
                                        </Col>
                                    </Row>
                                </Container>
                            </Tab>
                            <Tab eventKey={t("seasonings_sub.5.title")} title={t("Seasonings_sub.5.title")}>
                                <Container className={css.content}>
                                    <h3 className='text-center'>{t("Seasonings_sub.5.title")}</h3>
                                    <p className='text-center' dangerouslySetInnerHTML={{ __html: t("Seasonings_sub.5.desc") }}></p>
                                    <h4>{t("seasonings_sub:text_top")}</h4>

                                    <Row>
                                        <Col lg={3}>
                                            <h5>{t('Seasonings_sub.5.list_items.0.sub_title')}</h5>
                                            <ul className={`${css.list} ${css.list_1}`}>
                                                {block6_1.map((seasonings_sub, index) => (
                                                    <li key={index}>{seasonings_sub}</li>
                                                ))}
                                            </ul>
                                        </Col>
                                        <Col lg={3}>
                                            <h5>{t('Seasonings_sub.5.list_items.1.sub_title')}</h5>
                                            <ul className={`${css.list} ${css.list_1}`}>
                                                {block6_2.map((seasonings_sub, index) => (
                                                    <li key={index}>{seasonings_sub}</li>
                                                ))}
                                            </ul>
                                        </Col>
                                        <Col lg={3}>
                                            <h5>{t('Seasonings_sub.5.list_items.2.sub_title')}</h5>
                                            <ul className={`${css.list} ${css.list_1}`}>
                                                {block6_3.map((seasonings_sub, index) => (
                                                    <li key={index}>{seasonings_sub}</li>
                                                ))}
                                            </ul>
                                        </Col>
                                        <Col lg={3}>
                                            <h5>{t('Seasonings_sub.5.list_items.3.sub_title')}</h5>
                                            <ul className={`${css.list} ${css.list_1}`}>
                                                {block6_4.map((seasonings_sub, index) => (
                                                    <li key={index}>{seasonings_sub}</li>
                                                ))}
                                            </ul>
                                        </Col>
                                    </Row>
                                </Container>
                            </Tab>
                            <Tab eventKey={t("seasonings_sub.6.title")} title={t("Seasonings_sub.6.title")}>
                                <Container className={css.content}>
                                    <h3 className='text-center'>{t("Seasonings_sub.6.title")}</h3>
                                    <p className='text-center' dangerouslySetInnerHTML={{ __html: t("Seasonings_sub.6.desc") }}></p>
                                    <h4>{t("seasonings_sub:text_top")}</h4>
                                    <Row>
                                        <Col lg={1}> </Col>
                                        <Col lg={2}> 
                                            <h5>{t('Seasonings_sub.6.list_items.0.sub_title')}</h5>
                                            <ul className={`${css.list} ${css.list_1}`}>
                                                {block7_1.map((seasonings_sub, index) => (
                                                    <li key={index}>{seasonings_sub}</li>
                                                ))}
                                            </ul>
                                        </Col>
                                        <Col lg={2}>
                                            <h5>{t('Seasonings_sub.6.list_items.1.sub_title')}</h5>
                                            <ul className={`${css.list} ${css.list_1}`}>
                                                {block7_2.map((seasonings_sub, index) => (
                                                    <li key={index}>{seasonings_sub}</li>
                                                ))}
                                            </ul>
                                        </Col>
                                        <Col lg={2}>
                                            <h5>{t('Seasonings_sub.6.list_items.2.sub_title')}</h5>
                                            <ul className={`${css.list} ${css.list_1}`}>
                                                {block7_3.map((seasonings_sub, index) => (
                                                    <li key={index}>{seasonings_sub}</li>
                                                ))}
                                            </ul>
                                        </Col>
                                        <Col lg={2}>
                                            <h5>{t('Seasonings_sub.6.list_items.3.sub_title')}</h5>
                                            <ul className={`${css.list} ${css.list_1}`}>
                                                {block7_4.map((seasonings_sub, index) => (
                                                    <li key={index}>{seasonings_sub}</li>
                                                ))}
                                            </ul>
                                        </Col>
                                        <Col lg={2}>
                                            <h5>{t('Seasonings_sub.6.list_items.4.sub_title')}</h5>
                                            <ul className={`${css.list} ${css.list_1}`}>
                                                {block7_5.map((seasonings_sub, index) => (
                                                    <li key={index}>{seasonings_sub}</li>
                                                ))}
                                            </ul>
                                        </Col>
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

