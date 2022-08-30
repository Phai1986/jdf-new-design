import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import css from "../../styles/Aboutus.module.scss"

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Vision } from '../../components/Vision'
import { HistoryBackground } from '../../components/HistoryBackground'
import { NewsActive } from '../../components/NewsActive';
import { Structure } from '../../components/Structure';

const img3 = "../../images/i_a1.png"
const img4 = "../../images/i_a2.png"

const Aboutus = () => {

  const { t } = useTranslation(['About-us', 'common', 'footer', 'header',"StructureBoard"])

  return (
    <>
      <Header heading={t('h1')} title={t("About-us:page")} />

      <section className={css.aboutus}>

        <div className={css.banner} style={{ backgroundImage: `url(` + t("About-us:banner.0.img") + `)` }}>
          <Container className={css.text_center}>
            <h1>{t("About-us:banner.0.h1")}</h1>
            <p>{t("About-us:banner.0.p")}</p>
          </Container>
        </div>

        <div className={css.history}>
          <Container>
            <Row>
              <Col lg={6} data-aos="fade-right">
                <p>{t("About-us:history.0.txt1")}</p>
                <p>{t('About-us:history.0.txt2')}</p>
              </Col>
              <Col lg={6} style={{ margin: "0 0 60px" }} data-aos="fade-down"><img className='img-fluid float-end' src={t("About-us:history.0.img1")} /></Col>
              <Col lg={6} style={{ margin: "0 0 30px" }} data-aos="fade-up"><img className='img-fluid' src={t("About-us:history.0.img2")} /></Col>
              <Col lg={6} data-aos="fade-left">
                <p>{t("About-us:history.0.txt3")}</p>
                <p>{t("About-us:history.0.txt4")}</p>
              </Col>
            </Row>
          </Container>
        </div>

        <Vision />
        <HistoryBackground />
        <Structure />
        <NewsActive />

        <section className={css.core_value}>
          <Container>
            <img src={img3} data-aos="fade-up" className="img-fluid rounded float-start" />
            <h2 className='text-center' data-aos="fade-up">{t("About-us:core_value.0.title")}</h2>
            <p data-aos="fade-up">{t("About-us:core_value.0.text1")}</p>
            <p data-aos="fade-up">{t("About-us:core_value.0.text2")}</p>
            <p data-aos="fade-up">{t("About-us:core_value.0.text3")}</p>
            <img src={img4} data-aos="fade-down" className="img-fluid rounded float-end" />
          </Container>
        </section>

      </section>

      <Footer />
    </>
  )
}

export default Aboutus

const getStaticProps = makeStaticProps(['About-us', 'common', 'footer', 'header',"StructureBoard"])
export { getStaticPaths, getStaticProps }