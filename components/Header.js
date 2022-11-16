import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import LanguageSwitchLink from "./LanguageSwitchLink";
import i18nextConfig from "../next-i18next.config";
import Link from "../components/Link";

import Head from "next/head";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import css from "../styles/Header.module.scss";

const facebook = "../images/ic-facebook.png";
const youtube = "../images/ic-youtube.png";

export const Header = ({ heading, title }) => {
  const router = useRouter();
  const { t } = useTranslation("header");
  const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;

  const { query } = useRouter();
  let linkout = "https://www.jdfthailand.com/" + query.locale + "/investor.php";

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <header className={css.header}>
        <Navbar collapseOnSelect expand="lg" fixed="top">
          <Container>
            <Navbar.Brand>
              <Link href="/">
                <span className={css.logo}></span>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav>
                  <Link href="/">{t("menu1")}</Link>
                </Nav>
                <Nav>
                  <Link href="/About-us">{t("menu2")}</Link>
                </Nav>
                <Nav>
                  <Link href="/product">{t("menu3")}</Link>
                </Nav>
                <Nav>
                  <Link href={linkout} target="_blank">
                    {t("menu4")}
                  </Link>
                </Nav>
                <Nav className={css.social}>
                  <Link href="https://www.facebook.com/JDFoodThailand">
                    <img src={facebook} className="img-fluid" />
                  </Link>
                  <Link href="https://www.youtube.com/channel/UCgnroQ_uy4lKwcOdcN3Alag">
                    <img src={youtube} className="img-fluid" />
                  </Link>
                </Nav>
                <Nav className={css.lang}>
                  {i18nextConfig.i18n.locales.map((locale) => {
                    if (locale === currentLocale) return null;
                    return <LanguageSwitchLink locale={locale} key={locale} />;
                  })}
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};
