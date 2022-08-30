import { useTranslation } from 'next-i18next'

import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import css from "../styles/RandD.module.scss"

export const RAndD = () => {
    const { t } = useTranslation('RAndD')  
    const randd_steps = t('RAndD:steps', { returnObjects: true });
    const certs = t('RAndD:certificate_box_detail', { returnObjects: true });
    const certificates = [
        ["BRCFD%20731315-1.png", "Ecertificate%20-%20GMP+HACCP%20731316-1.png"],
        ["Cert.เจดีฟู้ด(คำขอG-300)%20GMP+ACFS%20เปลี่ยนชื่อ+ที่อยู่-1.png", "Cert.เจดีฟู้ด(คำขอG-300)%20GMP+ACFS%20เปลี่ยนชื่อ+ที่อยู่-2.png"],
        ["GMP- B.-SSN-1.png", "GMP- B.-SSN-2.png"],
        ["HACCP- B.-SSN-1.png", "HACCP- B.-SSN-2.png"],
        ["HAL-ENG-1.png", "HAL-TH-1.png"],
        ["FSMA 731317-1.png"]
    ]
    const imgPath = '../../images/R&D/'
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoPlay: true
    };
    return (
        <>
            <section className={css.section}>
                <Container>
                    <Row>
                        <h2 className='text-center'>{t("RAndD:title")}</h2>
                        <p dangerouslySetInnerHTML={{ __html: t("RAndD:detail") }}></p>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <h2 className='text-center'>{t("RAndD:r_and_d_title")}</h2>
                        <div className={css.randd_steps_img}><img className='img-fluid' src={imgPath+t("RAndD:r_and_d_img")} /></div>
                    </Row>
                    <Row>
                        {randd_steps.map((step, index) => (
                            <Col lg={12} key={index} data-aos="fade-up">
                                <Row className={css.randd_step_list}>
                                    <Col lg={4} xs={12} className={css.img}>
                                        <img className='img-fluid' src={imgPath+step.img} />
                                    </Col>
                                    <Col lg={8} xs={12} className={css.desc}>
                                        <h3>{step.title}</h3>
                                        <p dangerouslySetInnerHTML={{ __html: step.detail }}></p>
                                    </Col>
                                </Row>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <section className={css.section}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h2 className='text-center'>{t("RAndD:management_box_title")}</h2>
                            <p dangerouslySetInnerHTML={{ __html: t("RAndD:management_box_detail") }}></p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={css.section}>
                <Container fluid className={css.randd_certificate_box}>
                    <Row>
                        <Col lg={12}>
                            <Container className={css.content}>
                                <h2 className='text-center'>{t("RAndD:certificate_box_title")}</h2>
                                <ul className={css.list}>
                                    {certs.map((cert, index) => (
                                        <li key={index}>{cert}</li>
                                    ))}
                                </ul>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Slider {...settings}>
                                <div className={css.certificate_card}>
                                    <div>
                                        <img className='img-fluid' src={imgPath+'certificates/BRCFD%20731315-1.png'} />
                                        <img className='img-fluid' src={imgPath+'certificates/Ecertificate%20-%20GMP+HACCP%20731316-1.png'} />
                                    </div>
                                </div>
                                <div className={css.certificate_card}>
                                    <div>
                                        <img className='img-fluid' src={imgPath+'certificates/Cert.เจดีฟู้ด(คำขอG-300)%20GMP+ACFS%20เปลี่ยนชื่อ+ที่อยู่-1.png'} />
                                        <img className='img-fluid' src={imgPath+'certificates/Cert.เจดีฟู้ด(คำขอG-300)%20GMP+ACFS%20เปลี่ยนชื่อ+ที่อยู่-2.png'} />
                                    </div>
                                </div>
                                <div className={css.certificate_card}>
                                    <div>
                                        <img className='img-fluid' src={imgPath+'certificates/GMP- B.-SSN-1.png'} />
                                        <img className='img-fluid' src={imgPath+'certificates/GMP- B.-SSN-2.png'} />
                                    </div>
                                </div>
                                <div className={css.certificate_card}>
                                    <div>
                                        <img className='img-fluid' src={imgPath+'certificates/HACCP- B.-SSN-1.png'} />
                                        <img className='img-fluid' src={imgPath+'certificates/HACCP- B.-SSN-2.png'} />
                                    </div>
                                </div>
                                <div className={css.certificate_card}>
                                    <div>
                                        <img className='img-fluid' src={imgPath+'certificates/HAL-ENG-1.png'} />
                                        <img className='img-fluid' src={imgPath+'certificates/HAL-TH-1.png'} />
                                    </div>
                                </div>
                                <div className={css.certificate_card}>
                                    <div>                                  
                                        <img className='img-fluid' src={imgPath+'certificates/FSMA 731317-1.png'} />
                                    </div>
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}