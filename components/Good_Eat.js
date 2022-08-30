import React from "react";

import { GoodEatBox } from './GoodEatComponents/GoodEatBox';
import { KindeeBox } from './GoodEatComponents/KindeeBox';
import { CrispconutBox } from './GoodEatComponents/CrispconutBox';
import { OKBox } from './GoodEatComponents/OKBox';

export const GoodEat = () => {

    return (
        <>
            <section>
                <GoodEatBox />
                <KindeeBox />
                <CrispconutBox />
                <OKBox />
            </section>
        </>
    )
}