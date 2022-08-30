import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Reward } from '../../components/Reward'
import { Product_Service_Blog } from '../../components/Product_Service_Blog'
import { Brand } from '../../components/Brand'
import { Service_standards } from '../../components/Service_standards'

import Link from '../../components/Link'
import React, { useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import css from "../../styles/Index.module.scss"


const img1 = "../images/jdf_station.jpg"
const img2 = "../images/master.png"
const img3 = "../images/i_a1.png"
const img4 = "../images/i_a2.png"
const b1 = "../images/i_b1.png"
const b2 = "../images/i_b2.png"
const b3 = "../images/i_b3.png"
const b4 = "../images/i_b4.png"



const Homepage = () => {
  const { t } = useTranslation(['common', 'header', 'footer', 'index-page', 'Product-Service-Blog', 'Service-standards'])

  const videoRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play()
    }, 2000)
  }, []);

  return (
    <>
      <Header heading={t('h1')} title={t('index_title')} />
      <div className={css.index}>

        <div className={css.banner_jdf}>
          <div className={css.bg}>
            <Link className={css.crop_vdo} href="https://www.youtube.com/watch?v=cgOnR4cg-x4" target="_blank">
              <video
                ref={videoRef}
                controls
                width="250"
                loop
                muted
                className={css.video}
              >
                <source src="../vdo/vdo.mp4" type="video/mp4" />
              </video>
            </Link>

            <div className={css.content_left}>
              <div>
                <h1>{t("index-page:sec1.0.h1")}</h1>
                <p>{t("index-page:sec1.0.p")}</p>
                <Link href="#jdf_detail" className={css.readmore}><a>{t("readmore")}</a></Link>
              </div>
            </div>
          </div>
        </div>

        <section className={css.jdf_board}>
          <Container>
            <Row>
              <Col lg={6} className={css.ch_img} data-aos="fade-right"><img className='img-fluid' src={img2} alt="ธีรบุล หอสัจจกุล ผู้ก่อตั้ง และกรรมการบริหาร" /></Col>
              <Col>
                <div className={css.txt_good}>
                  <img src={img3} data-aos="fade-up" className="img-fluid rounded float-start" />
                  <h2 className='float-start' data-aos="fade-in">{t("index-page:jdf_board.0.h2")}</h2>
                  <img src={img4} data-aos="fade-down" className="img-fluid rounded float-end" />
                  <p className='float-start' data-aos="fade-left">{t("index-page:jdf_board.0.name")}<br /> {t("index-page:jdf_board.0.founder")}</p>
                </div>
              </Col>
            </Row>
            <Row className={css.data}>
              <Col lg={3} sm={6}>
                <div className={css.bl} data-aos="fade-down" data-aos-duration="200">
                  <div className={css.pic}><img className='img-fluid' src={b1} width="30" /></div>
                  <div className={css.desc}>22+ <span>{t("index-page:jdf_board.0.b1")}</span></div>
                </div>
              </Col>
              <Col lg={3} sm={6}>
                <div className={css.bl} data-aos="fade-down" data-aos-duration="400">
                  <div className={css.pic}><img className='img-fluid' src={b2} width="30" /></div>
                  <div className={css.desc}>300+ <span>{t("index-page:jdf_board.0.b2")}</span></div>
                </div>
              </Col>
              <Col lg={3} sm={6}>
                <div className={css.bl} data-aos="fade-down" data-aos-duration="600">
                  <div className={css.pic}><img className='img-fluid' src={b3} width="30" /></div>
                  <div className={css.desc}>2000+ <span>{t("index-page:jdf_board.0.b3")}</span></div>
                </div>
              </Col>
              <Col lg={3} sm={6}>
                <div className={css.bl} data-aos="fade-down" data-aos-duration="800">
                  <div className={css.pic}><img className='img-fluid' src={b4} width="30" /></div>
                  <div className={css.desc}>300+ <span>{t("index-page:jdf_board.0.b4")}</span></div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="jdf_detail" className={css.jdf_detail}>
          <Container>
            <Row>
              <Col lg={6} data-aos="fade-right">
                <h2>{t("index-page:jdf_detail.0.h2")}</h2>
                <p>{t("index-page:jdf_detail.0.p1")}</p>
                <p>{t("index-page:jdf_detail.0.p2")}</p>
              </Col>
              <Col lg={6} data-aos="fade-left"><img className='img-fluid' src={img1} alt="jdf_station" /></Col>
            </Row>
          </Container>
        </section>

        <Product_Service_Blog />
        <Brand />
        <Service_standards />
        <Reward />

      </div>
      <Footer />
    </>
  )
}

export default Homepage

const getStaticProps = makeStaticProps(['common', 'header', 'footer', 'index-page', 'Product-Service-Blog', 'Service-standards'])
export { getStaticPaths, getStaticProps }
