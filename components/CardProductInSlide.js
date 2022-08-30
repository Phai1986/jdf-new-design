import React from "react";
import Card from 'react-bootstrap/Card';
import styled from "../styles/ProductSlide.module.scss";

export default function CardProductInSlide(props) {
  const {item} = props;

  return (
    <div>
      <Card className={styled.product_card}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body className={styled.card_body_p}>
          <Card.Text className={[styled.c_blue]}>
            {item.h1}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}