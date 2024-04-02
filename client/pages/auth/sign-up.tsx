import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

export default function Admin() {
    let none;
    return (
        <>
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
                                    type="button" role="tab" aria-controls="switcher-home" aria-selected="true">Theme
                                Styles
                            </button>
                            <button className="nav-link" id="switcher-profile-tab" data-bs-toggle="tab"
                                    data-bs-target="#switcher-profile"
                                    type="button" role="tab" aria-controls="switcher-profile"
                                    aria-selected="false">Theme Colors
                            </button>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active border-0" id="switcher-home" role="tabpanel"
                             aria-labelledby="switcher-home-tab"
                             tabIndex="0">
                            <div className="">
                                <p className="switcher-style-head">Theme Color Mode:</p>
                                <div className="row switcher-style">
                                    <div className="col-sm-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-light-theme">
                                                Light
                                            </label>
                                            <input className="form-check-input" type="radio" name="theme-style"
                                                   id="switcher-light-theme"
                                                   checked/>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
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
                                <div className="row switcher-style">
                                    <div className="col-sm-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-ltr">
                                                LTR
                                            </label>
                                            <input className="form-check-input" type="radio" name="direction"
                                                   id="switcher-ltr" checked/>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
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
                                <div className="row switcher-style">
                                    <div className="col-sm-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-vertical">
                                                Vertical
                                            </label>
                                            <input className="form-check-input" type="radio" name="navigation-style"
                                                   id="switcher-vertical"
                                                   checked/>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
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
                                <p className="switcher-style-head">Navigation Menu Style:</p>
                                <div className="row switcher-style pb-2">
                                    <div className="col-sm-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-menu-click">
                                                Menu Click
                                            </label>
                                            <input className="form-check-input" type="radio"
                                                   name="navigation-menu-styles"
                                                   id="switcher-menu-click"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-menu-hover">
                                                Menu Hover
                                            </label>
                                            <input className="form-check-input" type="radio"
                                                   name="navigation-menu-styles"
                                                   id="switcher-menu-hover"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-icon-click">
                                                Icon Click
                                            </label>
                                            <input className="form-check-input" type="radio"
                                                   name="navigation-menu-styles"
                                                   id="switcher-icon-click"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-icon-hover">
                                                Icon Hover
                                            </label>
                                            <input className="form-check-input" type="radio"
                                                   name="navigation-menu-styles"
                                                   id="switcher-icon-hover"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 pb-3 text-secondary fs-11"><span
                                    className="fw-semibold fs-12 text-dark me-2 d-inline-block">Note:</span>Works same
                                    for both Vertical and Horizontal
                                </div>
                            </div>
                            <div className="">
                                <p className="switcher-style-head">Page Styles:</p>
                                <div className="row switcher-style">
                                    <div className="col-sm-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-regular">
                                                Regular
                                            </label>
                                            <input className="form-check-input" type="radio" name="page-styles"
                                                   id="switcher-regular"
                                                   checked/>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
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
                                <div className="row switcher-style">
                                    <div className="col-sm-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-full-width">
                                                Full Width
                                            </label>
                                            <input className="form-check-input" type="radio" name="layout-width"
                                                   id="switcher-full-width"
                                                   checked/>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
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
                                <div className="row switcher-style">
                                    <div className="col-sm-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-menu-fixed">
                                                Fixed
                                            </label>
                                            <input className="form-check-input" type="radio" name="menu-positions"
                                                   id="switcher-menu-fixed"
                                                   checked/>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
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
                                <div className="row switcher-style">
                                    <div className="col-sm-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-header-fixed">
                                                Fixed
                                            </label>
                                            <input className="form-check-input" type="radio" name="header-positions"
                                                   id="switcher-header-fixed" checked/>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
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
                            <div className="sidemenu-layout-styles">
                                <p className="switcher-style-head">Sidemenu Layout Syles:</p>
                                <div className="row switcher-style pb-2">
                                    <div className="col-sm-6">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-default-menu">
                                                Default Menu
                                            </label>
                                            <input className="form-check-input" type="radio"
                                                   name="sidemenu-layout-styles"
                                                   id="switcher-default-menu" checked/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-closed-menu">
                                                Closed Menu
                                            </label>
                                            <input className="form-check-input" type="radio"
                                                   name="sidemenu-layout-styles"
                                                   id="switcher-closed-menu"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-icontext-menu">
                                                Icon Text
                                            </label>
                                            <input className="form-check-input" type="radio"
                                                   name="sidemenu-layout-styles"
                                                   id="switcher-icontext-menu"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-icon-overlay">
                                                Icon Overlay
                                            </label>
                                            <input className="form-check-input" type="radio"
                                                   name="sidemenu-layout-styles"
                                                   id="switcher-icon-overlay"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-detached">
                                                Detached
                                            </label>
                                            <input className="form-check-input" type="radio"
                                                   name="sidemenu-layout-styles"
                                                   id="switcher-detached"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-double-menu">
                                                Double Menu
                                            </label>
                                            <input className="form-check-input" type="radio"
                                                   name="sidemenu-layout-styles"
                                                   id="switcher-double-menu"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 pb-3 text-secondary fs-11"><span
                                    className="fw-semibold fs-12 text-dark me-2 d-inline-block">Note:</span>Navigation
                                    menu styles won't work here.
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
                                                   id="switcher-menu-light" checked/>
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-dark"
                                                   data-bs-toggle="tooltip"
                                                   data-bs-placement="top" title="Dark Menu" type="radio"
                                                   name="menu-colors"
                                                   id="switcher-menu-dark"/>
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
                                                   data-bs-toggle="tooltip" data-bs-placement="top"
                                                   title="Transparent Menu"
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
                                                   name="theme-background" id="switcher-background" checked/>
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
                                                   name="theme-background" id="switcher-bg-img" checked/>
                                        </div>
                                        <div className="form-check switch-select m-2">
                                            <input className="form-check-input bgimage-input bg-img2" type="radio"
                                                   name="theme-background" id="switcher-bg-img1"/>
                                        </div>
                                        <div className="form-check switch-select m-2">
                                            <input className="form-check-input bgimage-input bg-img3" type="radio"
                                                   name="theme-background"
                                                   id="switcher-bg-img2"/>
                                        </div>
                                        <div className="form-check switch-select m-2">
                                            <input className="form-check-input bgimage-input bg-img4" type="radio"
                                                   name="theme-background" id="switcher-bg-img3"/>
                                        </div>
                                        <div className="form-check switch-select m-2">
                                            <input className="form-check-input bgimage-input bg-img5" type="radio"
                                                   name="theme-background" id="switcher-bg-img4"/>
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

            <div className="container">
                <div
                    className="row justify-content-center align-items-center authentication authentication-basic h-100">
                    <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-6 col-sm-8 col-12">
                        <div className="my-5 d-flex justify-content-center">
                            <a href="index.html">
                                <img src="/images/brand-logos/desktop-logo.png" alt="logo"
                                     className="desktop-logo"/>
                                    <img src="/images/brand-logos/desktop-dark.png" alt="logo"
                                         className="desktop-dark"/>
                            </a>
                        </div>
                        <div className="card custom-card">
                            <div className="card-body p-5">
                                <p className="h5 fw-semibold mb-2 text-center">Войти</p>
                                <p className="mb-4 text-muted op-7 fw-normal text-center"></p>
                                <div className="row gy-3">
                                    <div className="col-xl-12">
                                        <label htmlFor="signin-username" className="form-label text-default">Ваше
                                            имя</label>
                                        <input type="text" className="form-control form-control-lg" id="signin-username"
                                               placeholder="Ваше имя"/>
                                    </div>
                                    <div className="col-xl-12 mb-2">
                                        <label htmlFor="signin-password" className="form-label text-default d-block">Пароль<a
                                            href="reset-password-basic.html" className="float-end text-danger">Забыли
                                            пароль?</a></label>
                                        <div className="input-group">
                                            <input type="password" className="form-control form-control-lg"
                                                   id="signin-password" placeholder="password"/>
                                                <button className="btn btn-light" type="button"
                                                        onClick="createpassword('signin-password',this)"
                                                        id="button-addon2"><i
                                                    className="ri-eye-off-line align-middle"></i></button>
                                        </div>
                                        <div className="mt-2">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value=""
                                                       id="defaultCheck1"/>
                                                    <label className="form-check-label text-muted fw-normal"
                                                           htmlFor="defaultCheck1">
                                                        Запомнить пароль ?
                                                    </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 d-grid mt-2">
                                        <a href="/admin/" className="btn btn-lg btn-primary">Войти</a>
                                    </div>
                                </div>
                                <div className="text-center">

                                </div>
                                <div className="text-center my-3 authentication-barrier">

                                </div>
                                <div className="btn-list text-center">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            </div>

        </>
    );
}