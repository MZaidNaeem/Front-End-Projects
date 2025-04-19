import { Fragment } from "react";
import { Hero } from "./Hero";
import { About } from "./about";
import { Contact } from "./Contact";
import { Features } from "./Features";
import { Offer } from "./Offer";

export const Home = () => {
    return (
        <Fragment>
            <Hero></Hero>
            <Features></Features>
            <Offer></Offer>
            <About></About>
            {/* <Contact></Contact> */}
        </Fragment>

    );
}