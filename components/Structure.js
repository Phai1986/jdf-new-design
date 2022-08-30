import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import LanguageSwitchLink from './LanguageSwitchLink'
import pkg from 'next-i18next/package.json'
import pkgLD from 'next-language-detector/package.json'
import i18nextConfig from '../next-i18next.config';

import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import css from "../styles/Structure.module.scss"
import { Company_Director } from './Company_Director'
import { Executive_Committee } from './Executive_Committee'
import { Nomination_committee } from './Nomination_committee'
import { Audit_Committee } from './Audit_Committee'


export const Structure = () => {
    const router = useRouter()
    const { t } = useTranslation('About-us')
    const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;

    const structure1 = t('structure.0.structure1', { returnObjects: true });

    return (
        <>
            <section className={css.structure}>
                <Container>
                    <Row>
                        <div className={css.product}>
                            <h2>{t("About-us:structure.0.title")}</h2>
                            <Tabs
                                defaultActiveKey={t("About-us:structure.0.structure1.0.title")}
                                id="uncontrolled-tab-example"
                                className={css.tab}
                            >
                                <Tab eventKey={t("About-us:structure.0.structure1.0.title")} title={t("About-us:structure.0.structure1.0.title")}>
                                    <br /><br />
                                    <img className='img-fluid' src={t("About-us:structure.0.structure1.0.img")} />
                                </Tab>
                                <Tab eventKey={t("About-us:structure.0.structure2.0.title")} title={t("About-us:structure.0.structure2.0.title")}>
                                    <Company_Director />
                                </Tab>
                                <Tab eventKey={t("About-us:structure.0.structure3.0.title")} title={t("About-us:structure.0.structure3.0.title")}>
                                    <Executive_Committee />
                                </Tab>
                                <Tab eventKey={t("About-us:structure.0.structure4.0.title")} title={t("About-us:structure.0.structure4.0.title")}>
                                    <Nomination_committee />
                                </Tab>
                                <Tab eventKey={t("About-us:structure.0.structure5.0.title")} title={t("About-us:structure.0.structure5.0.title")}>
                                    <Audit_Committee />
                                </Tab>
                            </Tabs>
                        </div>
                    </Row>
                </Container>

            </section>
        </>
    )
}

