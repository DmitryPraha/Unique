import "@/styles/globals.css";
import "@/styles/css/styles.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import {FC, useEffect} from "react";
import {wrapper} from "@/store";

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return <Component {...pageProps} />;
}


