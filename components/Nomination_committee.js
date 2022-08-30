import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import LanguageSwitchLink from './LanguageSwitchLink'
import pkg from 'next-i18next/package.json'
import pkgLD from 'next-language-detector/package.json'
import i18nextConfig from '../next-i18next.config';

import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import css from "../styles/Structure.module.scss"


export const Nomination_committee = () => {
    const router = useRouter()
    const { t } = useTranslation('StructureBoard')
    const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;

    const block = t('nomination_committee.0.board', { returnObjects: true });

    return (
        <>
            <section className={css.structure_sub}>
                <Container>
                    <h2 className='text-center'>{t("StructureBoard:nomination_committee.0.title")}</h2>
                </Container>
                <Row className={css.product}>
                    <ul className={css.board}>
                        {block.map((board, index) => (
                            <li key={index} className={css.block} data-aos="fade-up">
                                <div className={css.img}><img className='img-fluid' src={board.img} /></div>
                                <div className={css.desc}>
                                    <p className={css.name}>{board.name}</p>
                                    <p className={css.position}>{board.position}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Row>

            </section>
        </>
    )
}

