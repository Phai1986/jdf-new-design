import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import css from "../../styles/Policy.module.scss"

const banner_bg = "../../images/banner_policy.jpg"

const Join_Us = () => {

    const { t } = useTranslation(['career', 'common', 'footer', 'header'])

    const block = t('Career.0.career_lists', { returnObjects: true });

    return (
        <>
            <Header heading={t('h1')} title={t("career:title")} />
            <section className={css.policy}>

                <div className={css.banner} style={{ backgroundImage: `url(` + banner_bg + `)` }}>
                    <Container className={css.text_center}>
                        <h1>{t("career:title")}</h1>
                    </Container>
                </div>

                <Container className={css.join_us}>

                    {block.map((career, index) => (
                        <Row key={index} data-aos="fade-up">
                            <Col lg={6} xs={12}>
                                <h4>{index+1}. {career.position} ( {career.unit} อัตรา )</h4>
                            </Col>
                            <Col lg={6} xs={12}>
                                <h4>{t("career:Career.0.title_1")}</h4>
                                <div className={css.desc} dangerouslySetInnerHTML={{ __html: career.job_reqeust }}></div>

                                <h4>{t("career:Career.0.title_2")}</h4>
                                <div className={css.desc} dangerouslySetInnerHTML={{ __html: career.job_description }}></div>
                            </Col>
                            <hr />
                        </Row>
                    ))}

                </Container>

            </section>
            <Footer />
        </>
    )
}

export default Join_Us

const getStaticProps = makeStaticProps(['career', 'common', 'footer', 'header'])
export { getStaticPaths, getStaticProps }