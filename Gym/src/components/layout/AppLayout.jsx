import { Fragment, useEffect, useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./header";
import { Outlet, useNavigation } from "react-router-dom";
import { Loading } from "./Loading";

export const AppLayout = () => {
    const [isLoading, setLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            setLoading(!Loading);
        }, 3000)
    }, []);

    if (navigation.state === "loading" || isLoading) {
        return <Loading></Loading>
    }

    return (
        <Fragment>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </Fragment>
    );
}