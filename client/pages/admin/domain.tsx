import Head from "next/head";
import React, {FC, useState} from 'react';
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {Router, useRouter} from "next/router";
import {ITrack} from "@/types/track";
import TrackList from "@/components/TrackList";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {Provider} from "react-redux";
import TrackItem from "@/components/TrackItem";
import {NextThunkDispatch, wrapper} from "@/store";
import {fetchTracks} from "@/store/actions-creators/track";
import {BlogPost} from "@/shared/types/blog-post";
import { useFeatures } from '@/hooks/useFeatures'
import { buildServerSideProps } from '@/ssr/buildServerSideProps';
import { fetch } from '../../shared/utils/fetch';
import Link from "next/link";
import axios from "axios";

type THomeProps = {
    blogPosts: BlogPost[];
};


const Index: FC<THomeProps> = ({ blogPosts }) => {

    const [data, setData] = useState({
        domain: "",
    });

    const router = useRouter()

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            domain: data.domain,
        };
        //const jsonData = JSON.stringify(userData);
        axios.post("http://localhost:4000/domain", userData).then(resp => router.push('/admin/domain')).catch(e => console.log(e));

    };

    return (
        <>
            <Head>
                <title>Админ панель</title>
                <script type="text/javascript" src="/styles/choices.min.js"></script>
                <script type="text/javascript" src="/styles/main.js"></script>
                <script type="text/javascript" src="/../public/styles/custom-switcher.min.js"></script>
                <script type="text/javascript" src="/styles/pickr.es5.min.js"></script>
                <script type="text/javascript" src="/styles/simplebar.js"></script>
                <script type="text/javascript" src="/styles/simplebar.min.js"></script>
                <script type="text/javascript" src="/styles/sticky.js"></script>
                <script type="text/javascript" src="/styles/waves.min.js"></script>
                <script type="text/javascript" src="/styles/defaultmenu.min.js"></script>
                <script type="text/javascript" src="/styles/popper.min.js"></script>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div>



                <div className="offcanvas offcanvas-end" tabIndex="-1" id="switcher-canvas"
                     aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header border-bottom">
                        <h5 className="offcanvas-title text-default" id="offcanvasRightLabel">Switcher</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <nav className="border-bottom border-block-end-dashed">
                            <div className="nav nav-tabs nav-justified" id="switcher-main-tab" role="tablist">
                                <button className="nav-link active" id="switcher-home-tab" data-bs-toggle="tab"
                                        data-bs-target="#switcher-home"
                                        type="button" role="tab" aria-controls="switcher-home" aria-selected="true">Theme Styles
                                </button>
                                <button className="nav-link" id="switcher-profile-tab" data-bs-toggle="tab"
                                        data-bs-target="#switcher-profile"
                                        type="button" role="tab" aria-controls="switcher-profile" aria-selected="false">Theme
                                    Colors
                                </button>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active border-0" id="switcher-home" role="tabpanel"
                                 aria-labelledby="switcher-home-tab"
                                 tabIndex="0">
                                <div className="">
                                    <p className="switcher-style-head">Theme Color Mode:</p>
                                    <div className="row switcher-style gx-0">
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-light-theme">
                                                    Light
                                                </label>
                                                <input className="form-check-input" type="radio" name="theme-style"
                                                       id="switcher-light-theme"
                                                       checked/>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-dark-theme">
                                                    Dark
                                                </label>
                                                <input className="form-check-input" type="radio" name="theme-style"
                                                       id="switcher-dark-theme"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <p className="switcher-style-head">Directions:</p>
                                    <div className="row switcher-style gx-0">
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-ltr">
                                                    LTR
                                                </label>
                                                <input className="form-check-input" type="radio" name="direction"
                                                       id="switcher-ltr" checked/>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-rtl">
                                                    RTL
                                                </label>
                                                <input className="form-check-input" type="radio" name="direction"
                                                       id="switcher-rtl"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <p className="switcher-style-head">Navigation Styles:</p>
                                    <div className="row switcher-style gx-0">
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-vertical">
                                                    Vertical
                                                </label>
                                                <input className="form-check-input" type="radio" name="navigation-style"
                                                       id="switcher-vertical"
                                                       checked/>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-horizontal">
                                                    Horizontal
                                                </label>
                                                <input className="form-check-input" type="radio" name="navigation-style"
                                                       id="switcher-horizontal"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="navigation-menu-styles">
                                    <p className="switcher-style-head">Vertical & Horizontal Menu Styles:</p>
                                    <div className="row switcher-style gx-0 pb-2 gy-2">
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-menu-click">
                                                    Menu Click
                                                </label>
                                                <input className="form-check-input" type="radio" name="navigation-menu-styles"
                                                       id="switcher-menu-click"/>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-menu-hover">
                                                    Menu Hover
                                                </label>
                                                <input className="form-check-input" type="radio" name="navigation-menu-styles"
                                                       id="switcher-menu-hover"/>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-icon-click">
                                                    Icon Click
                                                </label>
                                                <input className="form-check-input" type="radio" name="navigation-menu-styles"
                                                       id="switcher-icon-click"/>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-icon-hover">
                                                    Icon Hover
                                                </label>
                                                <input className="form-check-input" type="radio" name="navigation-menu-styles"
                                                       id="switcher-icon-hover"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidemenu-layout-styles">
                                    <p className="switcher-style-head">Sidemenu Layout Styles:</p>
                                    <div className="row switcher-style gx-0 pb-2 gy-2">
                                        <div className="col-sm-6">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-default-menu">
                                                    Default Menu
                                                </label>
                                                <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                                       id="switcher-default-menu" checked/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-closed-menu">
                                                    Closed Menu
                                                </label>
                                                <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                                       id="switcher-closed-menu"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-icontext-menu">
                                                    Icon Text
                                                </label>
                                                <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                                       id="switcher-icontext-menu"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-icon-overlay">
                                                    Icon Overlay
                                                </label>
                                                <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                                       id="switcher-icon-overlay"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-detached">
                                                    Detached
                                                </label>
                                                <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                                       id="switcher-detached"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-double-menu">
                                                    Double Menu
                                                </label>
                                                <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                                       id="switcher-double-menu"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <p className="switcher-style-head">Page Styles:</p>
                                    <div className="row switcher-style gx-0">
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-regular">
                                                    Regular
                                                </label>
                                                <input className="form-check-input" type="radio" name="page-styles"
                                                       id="switcher-regular"
                                                       checked/>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-classic">
                                                    Classic
                                                </label>
                                                <input className="form-check-input" type="radio" name="page-styles"
                                                       id="switcher-classic"/>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-modern">
                                                    Modern
                                                </label>
                                                <input className="form-check-input" type="radio" name="page-styles"
                                                       id="switcher-modern"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <p className="switcher-style-head">Layout Width Styles:</p>
                                    <div className="row switcher-style gx-0">
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-full-width">
                                                    Full Width
                                                </label>
                                                <input className="form-check-input" type="radio" name="layout-width"
                                                       id="switcher-full-width"
                                                       checked/>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-boxed">
                                                    Boxed
                                                </label>
                                                <input className="form-check-input" type="radio" name="layout-width"
                                                       id="switcher-boxed"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <p className="switcher-style-head">Menu Positions:</p>
                                    <div className="row switcher-style gx-0">
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-menu-fixed">
                                                    Fixed
                                                </label>
                                                <input className="form-check-input" type="radio" name="menu-positions"
                                                       id="switcher-menu-fixed"
                                                       checked/>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-menu-scroll">
                                                    Scrollable
                                                </label>
                                                <input className="form-check-input" type="radio" name="menu-positions"
                                                       id="switcher-menu-scroll"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <p className="switcher-style-head">Header Positions:</p>
                                    <div className="row switcher-style gx-0">
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-header-fixed">
                                                    Fixed
                                                </label>
                                                <input className="form-check-input" type="radio" name="header-positions"
                                                       id="switcher-header-fixed" checked/>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-header-scroll">
                                                    Scrollable
                                                </label>
                                                <input className="form-check-input" type="radio" name="header-positions"
                                                       id="switcher-header-scroll"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <p className="switcher-style-head">Loader:</p>
                                    <div className="row switcher-style gx-0">
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-loader-enable">
                                                    Enable
                                                </label>
                                                <input className="form-check-input" type="radio" name="page-loader"
                                                       id="switcher-loader-enable"/>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-loader-disable">
                                                    Disable
                                                </label>
                                                <input className="form-check-input" type="radio" name="page-loader"
                                                       id="switcher-loader-disable" checked/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade border-0" id="switcher-profile" role="tabpanel"
                                 aria-labelledby="switcher-profile-tab" tabIndex="0">
                                <div>
                                    <div className="theme-colors">
                                        <p className="switcher-style-head">Menu Colors:</p>
                                        <div className="d-flex switcher-style pb-2">
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-white"
                                                       data-bs-toggle="tooltip"
                                                       data-bs-placement="top" title="Light Menu" type="radio"
                                                       name="menu-colors"
                                                       id="switcher-menu-light"/>
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-dark"
                                                       data-bs-toggle="tooltip"
                                                       data-bs-placement="top" title="Dark Menu" type="radio" name="menu-colors"
                                                       id="switcher-menu-dark" checked/>
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-primary"
                                                       data-bs-toggle="tooltip"
                                                       data-bs-placement="top" title="Color Menu" type="radio"
                                                       name="menu-colors"
                                                       id="switcher-menu-primary"/>
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-gradient"
                                                       data-bs-toggle="tooltip"
                                                       data-bs-placement="top" title="Gradient Menu" type="radio"
                                                       name="menu-colors"
                                                       id="switcher-menu-gradient"/>
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-transparent"
                                                       data-bs-toggle="tooltip" data-bs-placement="top" title="Transparent Menu"
                                                       type="radio" name="menu-colors" id="switcher-menu-transparent"/>
                                            </div>
                                        </div>
                                        <div className="px-4 pb-3 text-muted fs-11">Note:If you want to change color Menu
                                            dynamically change from below Theme Primary color picker
                                        </div>
                                    </div>
                                    <div className="theme-colors">
                                        <p className="switcher-style-head">Header Colors:</p>
                                        <div className="d-flex switcher-style pb-2">
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-white"
                                                       data-bs-toggle="tooltip"
                                                       data-bs-placement="top" title="Light Header" type="radio"
                                                       name="header-colors"
                                                       id="switcher-header-light" checked/>
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-dark"
                                                       data-bs-toggle="tooltip"
                                                       data-bs-placement="top" title="Dark Header" type="radio"
                                                       name="header-colors"
                                                       id="switcher-header-dark"/>
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-primary"
                                                       data-bs-toggle="tooltip"
                                                       data-bs-placement="top" title="Color Header" type="radio"
                                                       name="header-colors"
                                                       id="switcher-header-primary"/>
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-gradient"
                                                       data-bs-toggle="tooltip"
                                                       data-bs-placement="top" title="Gradient Header" type="radio"
                                                       name="header-colors"
                                                       id="switcher-header-gradient"/>
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-transparent"
                                                       data-bs-toggle="tooltip"
                                                       data-bs-placement="top" title="Transparent Header" type="radio"
                                                       name="header-colors"
                                                       id="switcher-header-transparent"/>
                                            </div>
                                        </div>
                                        <div className="px-4 pb-3 text-muted fs-11">Note:If you want to change color Header
                                            dynamically change from below Theme Primary color picker
                                        </div>
                                    </div>
                                    <div className="theme-colors">
                                        <p className="switcher-style-head">Theme Primary:</p>
                                        <div className="d-flex flex-wrap align-items-center switcher-style">
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-primary-1" type="radio"
                                                       name="theme-primary" id="switcher-primary"/>
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-primary-2" type="radio"
                                                       name="theme-primary" id="switcher-primary1"/>
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-primary-3" type="radio"
                                                       name="theme-primary"
                                                       id="switcher-primary2"/>
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-primary-4" type="radio"
                                                       name="theme-primary"
                                                       id="switcher-primary3"/>
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-primary-5" type="radio"
                                                       name="theme-primary"
                                                       id="switcher-primary4"/>
                                            </div>
                                            <div className="form-check switch-select ps-0 mt-1 color-primary-light">
                                                <div className="theme-container-primary"></div>
                                                <div className="pickr-container-primary"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="theme-colors">
                                        <p className="switcher-style-head">Theme Background:</p>
                                        <div className="d-flex flex-wrap align-items-center switcher-style">
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-bg-1" type="radio"
                                                       name="theme-background" id="switcher-background"/>
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-bg-2" type="radio"
                                                       name="theme-background" id="switcher-background1"/>
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-bg-3" type="radio"
                                                       name="theme-background"
                                                       id="switcher-background2"/>
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-bg-4" type="radio"
                                                       name="theme-background" id="switcher-background3"/>
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-bg-5" type="radio"
                                                       name="theme-background" id="switcher-background4"/>
                                            </div>
                                            <div
                                                className="form-check switch-select ps-0 mt-1 tooltip-static-demo color-bg-transparent">
                                                <div className="theme-container-background"></div>
                                                <div className="pickr-container-background"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-image mb-3">
                                        <p className="switcher-style-head">Menu With Background Image:</p>
                                        <div className="d-flex flex-wrap align-items-center switcher-style">
                                            <div className="form-check switch-select m-2">
                                                <input className="form-check-input bgimage-input bg-img1" type="radio"
                                                       name="theme-bg" id="switcher-bg-img"/>
                                            </div>
                                            <div className="form-check switch-select m-2">
                                                <input className="form-check-input bgimage-input bg-img2" type="radio"
                                                       name="theme-bg" id="switcher-bg-img1"/>
                                            </div>
                                            <div className="form-check switch-select m-2">
                                                <input className="form-check-input bgimage-input bg-img3" type="radio"
                                                       name="theme-bg"
                                                       id="switcher-bg-img2"/>
                                            </div>
                                            <div className="form-check switch-select m-2">
                                                <input className="form-check-input bgimage-input bg-img4" type="radio"
                                                       name="theme-bg" id="switcher-bg-img3"/>
                                            </div>
                                            <div className="form-check switch-select m-2">
                                                <input className="form-check-input bgimage-input bg-img5" type="radio"
                                                       name="theme-bg" id="switcher-bg-img4"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-grid canvas-footer">
                                <a href="javascript:void(0);" id="reset-all" className="btn btn-danger m-1">Reset</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="loader" >
                    <img src="/images/media/loader.svg" alt=""/>
                </div>

                <div className="page">

                    <header className="app-header">

                        <div className="main-header-container container-fluid">


                            <div className="header-content-left">

                                <div className="header-element">
                                    <div className="horizontal-logo">
                                        <a href="" className="header-logo">
                                            <img src="/images/brand-logos/desktop-logo.png" alt="logo"
                                                 className="desktop-logo"/>
                                            <img src="/images/brand-logos/toggle-logo.png" alt="logo"
                                                 className="toggle-logo"/>
                                            <img src="/images/brand-logos/desktop-dark.png" alt="logo"
                                                 className="desktop-dark"/>
                                            <img src="/images/brand-logos/toggle-dark.png" alt="logo"
                                                 className="toggle-dark"/>
                                            <img src="/images/brand-logos/desktop-white.png" alt="logo"
                                                 className="desktop-white"/>
                                            <img src="/images/brand-logos/toggle-white.png"
                                                 alt="logo" className="toggle-white"/>
                                        </a>
                                    </div>
                                </div>

                                <div className="header-element">
                                    <a aria-label="Hide Sidebar"
                                       className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle"
                                       data-bs-toggle="sidebar" href="javascript:void(0);"><span></span></a>
                                </div>


                            </div>

                            <div className="header-content-right">


                                <div className="header-element header-search">

                                    <a href="javascript:void(0);" className="header-link" data-bs-toggle="modal"
                                       data-bs-target="#searchModal">
                                        <i className="bx bx-search-alt-2 header-link-icon"></i>
                                    </a>

                                </div>

                                <div className="header-element country-selector">

                                    <a href="javascript:void(0);" className="header-link dropdown-toggle"
                                       data-bs-auto-close="outside" data-bs-toggle="dropdown">
                                        <img src="/images/flags/russia_flag.jpg" alt="img"
                                             className="rounded-circle header-link-icon"/>
                                    </a>

                                    <ul className="main-header-dropdown dropdown-menu dropdown-menu-end"
                                        data-popper-placement="none">
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                                    <span className="avatar avatar-xs lh-1 me-2">
                                         <img src="/images/flags/us_flag.jpg" alt="img"/>
                                    </span>
                                                English
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                                    <span className="avatar avatar-xs lh-1 me-2">

                                    </span>
                                                Spanish
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                                    <span className="avatar avatar-xs lh-1 me-2">

                                    </span>
                                                French
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                                    <span className="avatar avatar-xs lh-1 me-2">

                                    </span>
                                                German
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                                    <span className="avatar avatar-xs lh-1 me-2">

                                    </span>
                                                Italian
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                                    <span className="avatar avatar-xs lh-1 me-2">

                                    </span>
                                                Russian
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="header-element header-theme-mode">

                                </div>

                                <div className="header-element cart-dropdown">

                                    <div className="main-header-dropdown dropdown-menu dropdown-menu-end"
                                         data-popper-placement="none">

                                        <div>
                                            <hr className="dropdown-divider"/>
                                        </div>
                                        <ul className="list-unstyled mb-0" id="header-cart-items-scroll">
                                            <li className="dropdown-item">
                                                <div className="d-flex align-items-start cart-dropdown-item">

                                                    <div className="flex-grow-1">
                                                        <div
                                                            className="d-flex align-items-start justify-content-between mb-0">
                                                            <div className="mb-0 fs-13 text-dark fw-semibold">
                                                                <a href="">SomeThing Phone</a>
                                                            </div>
                                                            <div>
                                                                <span className="text-black mb-1">$1,299.00</span>
                                                                <a href="javascript:void(0);"
                                                                   className="header-cart-remove float-end dropdown-item-close"><i
                                                                    className="ti ti-trash"></i></a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="min-w-fit-content d-flex align-items-start justify-content-between">
                                                            <ul className="header-product-item d-flex">
                                                                <li>Metallic Blue</li>
                                                                <li>6gb Ram</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="dropdown-item">
                                                <div className="d-flex align-items-start cart-dropdown-item">
                                                    <img src="/images/ecommerce/jpg/3.jpg" alt="img"
                                                         className="avatar avatar-sm avatar-rounded br-5 me-3"/>
                                                    <div className="flex-grow-1">
                                                        <div
                                                            className="d-flex align-items-start justify-content-between mb-0">
                                                            <div className="mb-0 fs-13 text-dark fw-semibold">
                                                                <a href="">Stop Watch</a>
                                                            </div>
                                                            <div>
                                                                <span className="text-black mb-1">$179.29</span>
                                                                <a href="javascript:void(0);"
                                                                   className="header-cart-remove float-end dropdown-item-close"><i
                                                                    className="ti ti-trash"></i></a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="min-w-fit-content d-flex align-items-start justify-content-between">
                                                            <ul className="header-product-item">
                                                                <li>Analog</li>
                                                                <li><span className="badge bg-pink-transparent fs-10">Free shipping</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="dropdown-item">
                                                <div className="d-flex align-items-start cart-dropdown-item">

                                                    <div className="flex-grow-1">
                                                        <div
                                                            className="d-flex align-items-start justify-content-between mb-0">
                                                            <div className="mb-0 fs-13 text-dark fw-semibold">
                                                                <a href="">Photo Frame</a>
                                                            </div>
                                                            <div>
                                                                <span className="text-black mb-1">$29.00</span>
                                                                <a href="javascript:void(0);"
                                                                   className="header-cart-remove float-end dropdown-item-close"><i
                                                                    className="ti ti-trash"></i></a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="min-w-fit-content d-flex align-items-start justify-content-between">
                                                            <ul className="header-product-item d-flex">
                                                                <li>Decorative</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="dropdown-item">
                                                <div className="d-flex align-items-start cart-dropdown-item">

                                                    <div className="flex-grow-1">
                                                        <div
                                                            className="d-flex align-items-start justify-content-between mb-0">
                                                            <div className="mb-0 fs-13 text-dark fw-semibold">
                                                                <a href="">Kikon Camera</a>
                                                            </div>
                                                            <div>
                                                                <span className="text-black mb-1">$4,999.00</span>
                                                                <a href="javascript:void(0);"
                                                                   className="header-cart-remove float-end dropdown-item-close"><i
                                                                    className="ti ti-trash"></i></a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="min-w-fit-content d-flex align-items-start justify-content-between">
                                                            <ul className="header-product-item d-flex">
                                                                <li>Black</li>
                                                                <li>50MM</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="dropdown-item">
                                                <div className="d-flex align-items-start cart-dropdown-item">
                                                    <img src="/images/ecommerce/jpg/6.jpg" alt="img"
                                                         className="avatar avatar-sm avatar-rounded br-5 me-3"/>
                                                    <div className="flex-grow-1">
                                                        <div
                                                            className="d-flex align-items-start justify-content-between mb-0">
                                                            <div className="mb-0 fs-13 text-dark fw-semibold">
                                                                <a href="">Canvas Shoes</a>
                                                            </div>
                                                            <div>
                                                                <span className="text-black mb-1">$129.00</span>
                                                                <a href="javascript:void(0);"
                                                                   className="header-cart-remove float-end dropdown-item-close"><i
                                                                    className="ti ti-trash"></i></a>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <ul className="header-product-item d-flex">
                                                                <li>Gray</li>
                                                                <li>Sports</li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                            </li>
                                        </ul>
                                        <div className="p-3 empty-header-item border-top">
                                            <div className="d-grid">
                                                <a href="" className="btn btn-primary">Proceed to checkout</a>
                                            </div>
                                        </div>
                                        <div className="p-5 empty-item d-none">
                                            <div className="text-center">
                                    <span className="avatar avatar-xl avatar-rounded bg-warning-transparent">
                                        <i className="ri-shopping-cart-2-line fs-2"></i>
                                    </span>
                                                <h6 className="fw-bold mb-1 mt-3">Your Cart is Empty</h6>
                                                <span className="mb-3 fw-normal fs-13 d-block">Add some items to make me happy :)</span>
                                                <a href="" className="btn btn-primary btn-wave btn-sm m-1"
                                                   data-abc="true">continue shopping <i className="bi bi-arrow-right ms-1"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="header-element notifications-dropdown">

                                    <div className="main-header-dropdown dropdown-menu dropdown-menu-end"
                                         data-popper-placement="none">
                                        <div className="p-3">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <p className="mb-0 fs-17 fw-semibold">Notifications</p>
                                                <span className="badge bg-secondary-transparent"
                                                      id="notifiation-data">5 Unread</span>
                                            </div>
                                        </div>
                                        <div className="dropdown-divider"></div>
                                        <ul className="list-unstyled mb-0" id="header-notification-scroll">
                                            <li className="dropdown-item">
                                                <div className="d-flex align-items-start">
                                                    <div className="pe-2">
                                                <span
                                                    className="avatar avatar-md bg-primary-transparent avatar-rounded"><i
                                                    className="ti ti-gift fs-18"></i></span>
                                                    </div>
                                                    <div
                                                        className="flex-grow-1 d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <p className="mb-0 fw-semibold"><a href="">Your
                                                                Order Has Been Shipped</a></p>
                                                            <span
                                                                className="text-muted fw-normal fs-12 header-notification-text">Order No: 123456 Has Shipped To Your Delivery Address</span>
                                                        </div>
                                                        <div>
                                                            <a href="javascript:void(0);"
                                                               className="min-w-fit-content text-muted me-1 dropdown-item-close1"><i
                                                                className="ti ti-x fs-16"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="dropdown-item">
                                                <div className="d-flex align-items-start">
                                                    <div className="pe-2">
                                                <span
                                                    className="avatar avatar-md bg-secondary-transparent avatar-rounded"><i
                                                    className="ti ti-discount-2 fs-18"></i></span>
                                                    </div>
                                                    <div
                                                        className="flex-grow-1 d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <p className="mb-0 fw-semibold"><a href="">Discount
                                                                Available</a></p>
                                                            <span
                                                                className="text-muted fw-normal fs-12 header-notification-text">Discount Available On Selected Products</span>
                                                        </div>
                                                        <div>
                                                            <a href=""
                                                               className="min-w-fit-content text-muted me-1 dropdown-item-close1"><i
                                                                className="ti ti-x fs-16"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="dropdown-item">
                                                <div className="d-flex align-items-start">
                                                    <div className="pe-2">
                                                <span className="avatar avatar-md bg-pink-transparent avatar-rounded"><i
                                                    className="ti ti-user-check fs-18"></i></span>
                                                    </div>
                                                    <div
                                                        className="flex-grow-1 d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <p className="mb-0 fw-semibold"><a href="">Account
                                                                Has Been Verified</a></p>
                                                            <span
                                                                className="text-muted fw-normal fs-12 header-notification-text">Your Account Has Been Verified Sucessfully</span>
                                                        </div>
                                                        <div>
                                                            <a href="javascript:void(0);"
                                                               className="min-w-fit-content text-muted me-1 dropdown-item-close1"><i
                                                                className="ti ti-x fs-16"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="dropdown-item">
                                                <div className="d-flex align-items-start">
                                                    <div className="pe-2">
                                                <span
                                                    className="avatar avatar-md bg-warning-transparent avatar-rounded"><i
                                                    className="ti ti-circle-check fs-18"></i></span>
                                                    </div>
                                                    <div
                                                        className="flex-grow-1 d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <p className="mb-0 fw-semibold"><a href="">Order
                                                                Placed <span className="text-warning">ID: #1116773</span></a>
                                                            </p>
                                                            <span
                                                                className="text-muted fw-normal fs-12 header-notification-text">Order Placed Successfully</span>
                                                        </div>
                                                        <div>
                                                            <a href="javascript:void(0);"
                                                               className="min-w-fit-content text-muted me-1 dropdown-item-close1"><i
                                                                className="ti ti-x fs-16"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="dropdown-item">
                                                <div className="d-flex align-items-start">
                                                    <div className="pe-2">
                                                <span
                                                    className="avatar avatar-md bg-success-transparent avatar-rounded"><i
                                                    className="ti ti-clock fs-18"></i></span>
                                                    </div>
                                                    <div
                                                        className="flex-grow-1 d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <p className="mb-0 fw-semibold"><a href="">Order
                                                                Delayed <span className="text-success">ID: 7731116</span></a>
                                                            </p>
                                                            <span
                                                                className="text-muted fw-normal fs-12 header-notification-text">Order Delayed Unfortunately</span>
                                                        </div>
                                                        <div>
                                                            <a href="javascript:void(0);"
                                                               className="min-w-fit-content text-muted me-1 dropdown-item-close1"><i
                                                                className="ti ti-x fs-16"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="p-3 empty-header-item1 border-top">
                                            <div className="d-grid">
                                                <a href="" className="btn btn-primary">View All</a>
                                            </div>
                                        </div>
                                        <div className="p-5 empty-item1 d-none">
                                            <div className="text-center">
                                    <span className="avatar avatar-xl avatar-rounded bg-secondary-transparent">
                                        <i className="ri-notification-off-line fs-2"></i>
                                    </span>
                                                <h6 className="fw-semibold mt-3">No New Notifications</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="header-element header-shortcuts-dropdown">

                                    <div
                                        className="main-header-dropdown header-shortcuts-dropdown dropdown-menu pb-0 dropdown-menu-end"
                                        aria-labelledby="notificationDropdown">
                                        <div className="p-3">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <p className="mb-0 fs-17 fw-semibold">Related Apps</p>
                                            </div>
                                        </div>
                                        <div className="dropdown-divider mb-0"></div>
                                        <div className="main-header-shortcuts p-2" id="header-shortcut-scroll">
                                            <div className="row g-2">
                                                <div className="col-4">
                                                    <a href="javascript:void(0);">
                                                        <div className="text-center p-3 related-app">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="/images/apps/microsoft-powerpoint.png" alt=""/>
                                                </span>
                                                            <span className="d-block fs-12">Figma</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col-4">
                                                    <a href="javascript:void(0);">
                                                        <div className="text-center p-3 related-app">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="/images/apps/microsoft-word.png" alt=""/>
                                                </span>
                                                            <span className="d-block fs-12">Power Point</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col-4">
                                                    <a href="javascript:void(0);">
                                                        <div className="text-center p-3 related-app">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="/images/apps/calender.png" alt=""/>
                                                </span>
                                                            <span className="d-block fs-12">MS Word</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col-4">
                                                    <a href="javascript:void(0);">
                                                        <div className="text-center p-3 related-app">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="/images/apps/sketch.png" alt=""/>
                                                </span>
                                                            <span className="d-block fs-12">Calendar</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col-4">
                                                    <a href="javascript:void(0);">
                                                        <div className="text-center p-3 related-app">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="/images/apps/google-docs.png" alt=""/>
                                                </span>
                                                            <span className="d-block fs-12">Sketch</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col-4">
                                                    <a href="javascript:void(0);">
                                                        <div className="text-center p-3 related-app">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="/images/apps/google.png" alt=""/>
                                                </span>
                                                            <span className="d-block fs-12">Docs</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col-4">
                                                    <a href="javascript:void(0);">
                                                        <div className="text-center p-3 related-app">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="" alt=""/>
                                                </span>
                                                            <span className="d-block fs-12">Google</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col-4">
                                                    <a href="javascript:void(0);">
                                                        <div className="text-center p-3 related-app">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="/images/apps/translate.png" alt=""/>
                                                </span>
                                                            <span className="d-block fs-12">Translate</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col-4">
                                                    <a href="javascript:void(0);">
                                                        <div className="text-center p-3 related-app">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                   <img src="/images/apps/google-sheets.png" alt=""/>
                                                </span>
                                                            <span className="d-block fs-12">Sheets</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-3 border-top">
                                            <div className="d-grid">
                                                <a href="javascript:void(0);" className="btn btn-primary">View All</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="header-element header-fullscreen">

                                </div>

                                <div className="header-element">

                                    <a href="javascript:void(0);" className="header-link dropdown-toggle" id="mainHeaderProfile"
                                       data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                        <div className="d-flex align-items-center">
                                            <div className="me-sm-2 me-0">
                                                <img src="/images/faces/fac.jpeg" alt="img" width="32" height="32"
                                                     className="rounded-circle"/>
                                            </div>
                                            <div className="d-sm-block d-none">
                                                <p className="fw-semibold mb-0 lh-1">Власов Дмитрий</p>
                                                <span className="op-7 fw-normal d-block fs-11">Тимлид</span>
                                            </div>
                                        </div>
                                    </a>

                                    <ul className="main-header-dropdown dropdown-menu pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end"
                                        aria-labelledby="mainHeaderProfile">
                                        <li><a className="dropdown-item d-flex" href="profile.html"><i
                                            className="ti ti-user-circle fs-18 me-2 op-7"></i>Profile</a></li>
                                        <li><a className="dropdown-item d-flex" href="mail.html"><i
                                            className="ti ti-inbox fs-18 me-2 op-7"></i>Inbox <span
                                            className="badge bg-success-transparent ms-auto">25</span></a></li>
                                        <li><a className="dropdown-item d-flex border-block-end" href="to-do-list.html"><i
                                            className="ti ti-clipboard-check fs-18 me-2 op-7"></i>Task Manager</a></li>
                                        <li><a className="dropdown-item d-flex" href="mail-settings.html"><i
                                            className="ti ti-adjustments-horizontal fs-18 me-2 op-7"></i>Settings</a></li>
                                        <li><a className="dropdown-item d-flex border-block-end" href="javascript:void(0);"><i
                                            className="ti ti-wallet fs-18 me-2 op-7"></i>Bal: $7,12,950</a></li>
                                        <li><a className="dropdown-item d-flex" href="chat.html"><i
                                            className="ti ti-headset fs-18 me-2 op-7"></i>Support</a></li>
                                        <li><a className="dropdown-item d-flex" href="sign-in-cover.html"><i
                                            className="ti ti-logout fs-18 me-2 op-7"></i>Log Out</a></li>
                                    </ul>
                                </div>

                                <div className="header-element">

                                </div>


                            </div>


                        </div>

                    </header>

                    <aside className="app-sidebar sticky" id="sidebar">

                        <div className="main-sidebar-header">
                            <a href="index.html" className="header-logo">
                                <img src="/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo"/>
                                <img src="/images/brand-logos/toggle-logo.png" alt="logo" className="toggle-logo"/>
                                <img src="/images/brand-logos/desktop-dark.png" alt="logo"
                                     className="desktop-dark"/>
                                <img src="/images/brand-logos/toggle-dark.png" alt="logo"
                                     className="toggle-dark"/>
                                <img src="/images/brand-logos/desktop-white.png" alt="logo"
                                     className="desktop-white"/>
                                <img src="/images/brand-logos/toggle-white.png" alt="logo"
                                     className="toggle-white"/>
                            </a>
                        </div>
                        <div className="main-sidebar" id="sidebar-scroll">
                            <nav className="main-menu-container nav nav-pills flex-column sub-open">
                                <div className="slide-left" id="slide-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24"
                                         viewBox="0 0 24 24">
                                        <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                                    </svg>
                                </div>
                                <ul className="main-menu">

                                    <li className="slide__category"><span className="category-name">Разделы</span></li>

                                    <li className="slide">
                                        <a href="/" className="side-menu__item">
                                            <i className="bx bx-home side-menu__icon"></i>
                                            <span className="side-menu__label">Главная</span>
                                        </a>
                                    </li>
                                    <li className="slide">
                                        <a href="/admin/domain" className="side-menu__item">
                                            <i className="bx bx-store-alt side-menu__icon"></i>
                                            <span className="side-menu__label">Домены</span>
                                        </a>
                                    </li>
                                    <li className="slide">
                                        <a href="/admin/downloadFile" className="side-menu__item">
                                            <i className="bx bx-file-blank side-menu__icon"></i>
                                            <span className="side-menu__label">Утечки</span>
                                        </a>
                                    </li>
                                    <li className="slide">
                                        <a href="/admin/result" className="side-menu__item">
                                            <i className="bx bx-task side-menu__icon"></i>
                                            <span className="side-menu__label">Результат</span>
                                        </a>
                                    </li>

                                </ul>
                                <div className="slide-right" id="slide-right">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24"
                                         viewBox="0 0 24 24">
                                        <path
                                            d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                                    </svg>
                                </div>
                            </nav>
                        </div>
                    </aside>
                    <div className="main-content app-content">
                        <div className="container-fluid">
                            <div
                                className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
                                <h1 className="page-title fw-semibold fs-18 mb-0">В работе</h1>
                                <div className="ms-md-1 ms-0">
                                    <nav>
                                        <ol className="breadcrumb mb-0">
                                            <li className="breadcrumb-item"><a href="javascript:void(0);">В работе</a></li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-xl-12">
                                    <form onSubmit={handleSubmit}>
                                        <div className="card custom-card">
                                            <div className="card-body add-products p-0">
                                                <div className="p-4">
                                                    <div className="row gx-5">
                                                        <div className="col-xxl-6 col-xl-12 col-lg-12 col-md-6">
                                                            <div className="card custom-card shadow-none mb-0 border-0">
                                                                <div className="card-body p-0">
                                                                    <div className="row gy-3">
                                                                        <div className="col-xl-12">
                                                                            <label htmlFor="product-name-add"
                                                                                   className="form-label">Домен</label>
                                                                            <input type="text" className="form-control"
                                                                                   id="product-name-add" placeholder=""
                                                                                   name="domain"
                                                                                   value={data.domain}
                                                                                   onChange={handleChange}
                                                                            />
                                                                            <label htmlFor="product-name-add"
                                                                                   className="form-label mt-1 fs-12 op-5 text-muted mb-0"></label>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div
                                                    className="px-4 py-3 border-top border-block-start-dashed d-sm-flex justify-content-end">
                                                    <button className="btn btn-success-light m-1" type="submit">Сохранить<i
                                                        className="bi bi-download ms-2"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>




                                </div>

                                <div className="table-responsive">
                                    <table className="table text-nowrap table-bordered">
                                        <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Домен</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {blogPosts.map(({ domain, id,login,password,isActive }) => (
                                            <tr>
                                                <th scope="row">
                                                    <div className="d-flex align-items-center">
                                                        {id}
                                                    </div>
                                                </th>
                                                <td>{domain}</td>
                                                <td>
                                                    <div className="hstack gap-2 flex-wrap">

                                                        <Link href={`/admin/${id}`}><i
                                                            className="ri-edit-line"></i></Link>
                                                        <a href="" className="text-danger fs-14 lh-1"><i
                                                            className="ri-delete-bin-5-line"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="searchModal" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="input-group">
                                        <a href="javascript:void(0);" className="input-group-text" id="Search-Grid"><i
                                            className="fe fe-search header-link-icon fs-18"></i></a>
                                        <input type="search" className="form-control border-0 px-2" placeholder="Search"
                                               aria-label="Username"/>
                                        <a href="javascript:void(0);" className="input-group-text" id="voice-search"><i
                                            className="fe fe-mic header-link-icon"></i></a>
                                        <a href="javascript:void(0);" className="btn btn-light btn-icon"
                                           data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fe fe-more-vertical"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="javascript:void(0);">Action</a></li>
                                            <li><a className="dropdown-item" href="javascript:void(0);">Another action</a>
                                            </li>
                                            <li><a className="dropdown-item" href="javascript:void(0);">Something else
                                                here</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="javascript:void(0);">Separated link</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-4">
                                        <p className="font-weight-semibold text-muted mb-2">Are You Looking For...</p>
                                        <span className="search-tags alert"><i className="fe fe-user me-2"></i>People<a
                                            href="javascript:void(0)" className="tag-addon" data-bs-dismiss="alert"><i
                                            className="fe fe-x"></i></a></span>
                                        <span className="search-tags alert"><i className="fe fe-file-text me-2"></i>Pages<a
                                            href="javascript:void(0)" className="tag-addon" data-bs-dismiss="alert"><i
                                            className="fe fe-x"></i></a></span>
                                        <span className="search-tags alert"><i className="fe fe-align-left me-2"></i>Articles<a
                                            href="javascript:void(0)" className="tag-addon" data-bs-dismiss="alert"><i
                                            className="fe fe-x"></i></a></span>
                                        <span className="search-tags alert"><i className="fe fe-server me-2"></i>Tags<a
                                            href="javascript:void(0)" className="tag-addon" data-bs-dismiss="alert"><i
                                            className="fe fe-x"></i></a></span>
                                    </div>
                                    <div className="my-4">
                                        <p className="font-weight-semibold text-muted mb-2">Recent Search :</p>
                                        <div className="p-2 border br-5 d-flex align-items-center text-muted mb-2 alert">
                                            <a href="notifications.html"><span>Notifications</span></a>
                                            <a className="ms-auto lh-1" href="javascript:void(0);" data-bs-dismiss="alert"
                                               aria-label="Close"><i className="fe fe-x text-muted"></i></a>
                                        </div>
                                        <div className="p-2 border br-5 d-flex align-items-center text-muted mb-2 alert">
                                            <a href="alerts.html"><span>Alerts</span></a>
                                            <a className="ms-auto lh-1" href="javascript:void(0);" data-bs-dismiss="alert"
                                               aria-label="Close"><i className="fe fe-x text-muted"></i></a>
                                        </div>
                                        <div className="p-2 border br-5 d-flex align-items-center text-muted mb-0 alert">
                                            <a href="mail.html"><span>Mail</span></a>
                                            <a className="ms-auto lh-1" href="javascript:void(0);" data-bs-dismiss="alert"
                                               aria-label="Close"><i className="fe fe-x text-muted"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <div className="btn-group ms-auto">
                                        <button type="button" className="btn btn-sm btn-primary-light">Search</button>
                                        <button type="button" className="btn btn-sm btn-primary">Clear Recents</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="footer mt-auto py-3 bg-white text-center">
                        <div className="container">
                <span className="text-muted"> Copyright © <span id="year"></span> <a
                    href="javascript:void(0);" className="text-dark fw-semibold">UniqueDev</a>.
                  <span className="bi bi-heart-fill text-danger"></span>  <a href="javascript:void(0);">
                        <span className="fw-semibold text-primary text-decoration-underline"></span>
                    </a>
                </span>
                        </div>
                    </footer>
                </div>



                <div className="scrollToTop">
                    <span className="arrow"><i className="ri-arrow-up-s-fill fs-20"></i></span>
                </div>
                <div id="responsive-overlay"></div>
            </div>
        </>
    );
};

export default Index;


export const getServerSideProps = buildServerSideProps<THomeProps>(async () => {
    const blogPosts = await fetch('/domain/');
    return { blogPosts};
});
