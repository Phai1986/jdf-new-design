import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import css from "../../styles/Policy.module.scss"

const banner_bg = "../../images/banner_policy.jpg"

const Reported = () => {

    const { t } = useTranslation(['Reported', 'common', 'footer', 'header'])

    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    const [num, setNum] = useState('');
    const handleNumChange = event => {
        const limit = 10;
        setNum(event.target.value.slice(0, limit));
    };


    return (
        <>
            <Header heading={t('h1')} title={t("Reported:title")} />
            <section className={css.policy}>
                <div className={css.banner} style={{ backgroundImage: `url(` + banner_bg + `)` }}>
                    <Container className={css.text_center}>
                        <h1>{t("Reported:title")}</h1>
                    </Container>
                </div>
                <Container>
                    <Row>
                        <Col lg={12} xs={12} className={css.reported}>
                            <p>xxxxxxxxxx</p>
                            <h2 className='text-center'>{t("Reported:title2")}</h2>
                            <div className={css.desc} dangerouslySetInnerHTML={{ __html: t("Reported:p") }}></div>
                            <Form className={css.form} noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className={css.row}>
                                    <Form.Group as={Col} controlId="validationCustom01">
                                        <Form.Label>{t("Reported:name")}</Form.Label>
                                        <Form.Control type="text" placeholder={t("Reported:name")} required maxLength={40} />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className={css.row}>
                                    <Form.Group as={Col} controlId="validationCustom02">
                                        <Form.Label>{t("Reported:phone")}</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder={t("Reported:phone")}
                                            required
                                            value={num}
                                            onChange={handleNumChange}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="validationCustom03">
                                        <Form.Label>{t("Reported:email")}</Form.Label>
                                        <Form.Control type="email" placeholder={t("Reported:email")} required maxLength={40} />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className={css.row}>
                                    <Form.Group as={Col} controlId="message">
                                        <Form.Label>{t("Reported:message")}</Form.Label>
                                        <Form.Control type="text" placeholder={t("Reported:message")} />
                                    </Form.Group>
                                </Row>
                                <Row className={css.row}>
                                    <Form.Group as={Col} controlId="validationCustom04">
                                        <Form.Label>{t("Reported:subject")}</Form.Label>
                                        <Form.Select aria-label="กรุณาเลือกหัวข้อการร้องเรียน" required as="select">
                                            <option value="">กรุณาเลือกหัวข้อการร้องเรียน</option>
                                            <option value="พบการทุจริต และ/หรือ ข้อสงสัย ภายในหน่วยงานของบริษัท">พบการทุจริต และ/หรือ ข้อสงสัย ภายในหน่วยงานของบริษัท</option>
                                            <option value="พบการบกพร่องจของเจ้าหน้าที่ และ/หรือ พนักงานงานบริษัท">พบการบกพร่องจของเจ้าหน้าที่ และ/หรือ พนักงานงานบริษัท</option>
                                            <option value="พบการดำเนินงาน/กิจกรรม ที่ไม่โปร่งใสต่อผู้ถือหุ้น">พบการดำเนินงาน/กิจกรรม ที่ไม่โปร่งใสต่อผู้ถือหุ้น</option>
                                            <option value="แจ้งข้อร้องเรียนอื่นๆ">แจ้งข้อร้องเรียนอื่นๆ</option>
                                        </Form.Select>
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className={css.row}>
                                    <Form.Group as={Col} controlId="validationCustom05">
                                        <Form.Label>{t("Reported:detail")}</Form.Label>
                                        <Form.Control type="text" placeholder={t("Reported:detail")} required />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className={css.row}>
                                    <Button style={{ width: 180, margin: "40px auto 0" }} type="submit">{t("Reported:button")}</Button>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Reported

const getStaticProps = makeStaticProps(['Reported', 'common', 'footer', 'header'])
export { getStaticPaths, getStaticProps }