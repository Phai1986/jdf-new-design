import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useRouter } from "next/router";
import css from "../../styles/Product.module.scss"

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Seasonings } from '../../components/Seasonings';
import { SauceFilling } from '../../components/SauceFilling';
import { CoconutChips } from '../../components/CoconutChips';
import { GoodEat } from '../../components/Good_Eat';
import { RAndD } from '../../components/RAndD'

const Product = () => {

    const { t } = useTranslation(['Product', 'common', 'footer', 'header', 'seasonings', 'sauce_filling', 'coconut_chips', 'seasonings_sub', 'sauce_filling_sub', 'coconut_chips_sub', 'GoodEat', 'RAndD'])

    const { query } = useRouter();
    let active_tab = '';


    if (query.product == 'seasonings') {
        active_tab = t("Product:product1")
    } else if (query.product == 'sauceFilling') {
        active_tab = t("Product:product2")
    } else if (query.product == 'coconutChips') {
        active_tab = t("Product:product3")
    } else if (query.product == 'jdfood') {
        active_tab = t("Product:product4")
    } else {
        active_tab = t("Product:product1")
    }

    return (
        <>
            <Header heading={t('h1')} title={t("Product:page")} />

            <section className={css.product}>

                <div className={css.banner} style={{ backgroundImage: `url(` + t("Product:banner.0.img") + `)` }}>
                    <Container className={css.text_center}>
                        <h1>{t("Product:banner.0.h1")}</h1>
                        <p>{t("Product:banner.0.p")}</p>
                    </Container>
                </div>

                <section className={css.product_all}>
                    <Container fluid>
                        <Row>
                            <div className={css.product_tab}>
                                <Tabs
                                    defaultActiveKey={active_tab}
                                    id="uncontrolled-tab-example"
                                    className={css.tab}
                                >
                                    <Tab eventKey={t("Product:product1")} title={t("Product:product1")}>
                                        <Seasonings />
                                    </Tab>
                                    <Tab eventKey={t("Product:product2")} title={t("Product:product2")}>
                                        <SauceFilling />
                                    </Tab>
                                    <Tab eventKey={t("Product:product3")} title={t("Product:product3")}>
                                        <CoconutChips />
                                    </Tab>
                                    <Tab eventKey={t("Product:product4")} title={t("Product:product4")}>
                                        <GoodEat />
                                    </Tab>
                                    <Tab eventKey={t("Product:product5")} title={t("Product:product5")}>
                                        <RAndD />
                                    </Tab>
                                </Tabs>
                            </div>
                        </Row>
                    </Container>

                </section>


            </section>

            <Footer />
        </>
    )
}

export default Product

const getStaticProps = makeStaticProps(['Product', 'common', 'footer', 'header', 'seasonings', 'sauce_filling', 'coconut_chips', 'seasonings_sub', 'sauce_filling_sub', 'coconut_chips_sub', 'GoodEat', 'RAndD'])
export { getStaticPaths, getStaticProps }