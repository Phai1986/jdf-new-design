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


export const CoconutChips_sub = () => {
    const router = useRouter()
    const { t } = useTranslation('coconut_chips_sub')
    const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;

    const block1 = t('CoconutChips_sub.0.list_items', { returnObjects: true });
    const block2 = t('CoconutChips_sub.1.list_items', { returnObjects: true });
    const block3 = t('CoconutChips_sub.2.list_items', { returnObjects: true });



    return (
        <>
            <Container fluid className={css.content_sub}>
                <Row>
                    <div className={css.product_tab}>
                        <Tabs
                            defaultActiveKey={t("CoconutChips_sub.0.title")}
                            id="uncontrolled-tab-example"
                            className={css.tab_sub}
                        >
                            <Tab eventKey={t("CoconutChips_sub.0.title")} title={t("CoconutChips_sub.0.title")}>

                                <Container className={css.content}>
                                    <h3 className='text-center'>{t("CoconutChips_sub.1.title")}</h3>
                                    <p className='text-center' dangerouslySetInnerHTML={{ __html: t("CoconutChips_sub.1.desc") }}></p>
                                    <h4>{t("coconut_chips_sub:text_top")}</h4>
                                    <h4>{t('CoconutChips_sub.0.title')}</h4>
                                    <ul className={css.list}>
                                        {block1.map((CoconutChips_sub, index) => (
                                            <li key={index}>{CoconutChips_sub}</li>
                                        ))}
                                    </ul>
                                </Container>
                            </Tab>
                            <Tab eventKey={t("CoconutChips_sub.1.title")} title={t("CoconutChips_sub.1.title")}>
                                <Container className={css.content}>
                                    <h3 className='text-center'>{t("CoconutChips_sub.1.title")}</h3>
                                    <p className='text-center' dangerouslySetInnerHTML={{ __html: t("CoconutChips_sub.1.desc") }}></p>
                                    <h4>{t("coconut_chips_sub:text_top")}</h4>
                                    <h4>{t('CoconutChips_sub.1.title')}</h4>
                                    <ul className={css.list}>
                                        {block2.map((CoconutChips_sub, index) => (
                                            <li key={index}>{CoconutChips_sub}</li>
                                        ))}
                                    </ul>
                                </Container>
                            </Tab>
                            <Tab eventKey={t("CoconutChips_sub.2.title")} title={t("CoconutChips_sub.2.title")}>
                                <Container className={css.content}>
                                    <h3 className='text-center'>{t("CoconutChips_sub.2.title")}</h3>
                                    <p className='text-center' dangerouslySetInnerHTML={{ __html: t("CoconutChips_sub.2.desc") }}></p>
                                    <h4>{t("coconut_chips_sub:text_top")}</h4>
                                    <h4>{t('CoconutChips_sub.2.title')}</h4>
                                    <ul className={css.list}>
                                        {block3.map((CoconutChips_sub, index) => (
                                            <li key={index}>{CoconutChips_sub}</li>
                                        ))}
                                    </ul>
                                </Container>
                            </Tab>
                        </Tabs>
                    </div>
                </Row>
            </Container>
        </>
    )
}

