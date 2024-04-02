
import Head from "next/head";
//import Image from "next/image";
//import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
       <>
           <Head>
               <title>Админ панель</title>
               <script type="text/javascript" src="/styles/choices.min.js"></script>
               <script type="text/javascript" src="/styles/main.js"></script>
               <script type="text/javascript" src="/../public/styles/custom-switcher.min.js"></script>
               <script type="text/javascript" src="/styles/pickr.es5.min.js"></script>
               <script type="text/javascript" src="/styles/waves.min.js"></script>
               <script type="text/javascript" src="/styles/defaultmenu.min.js"></script>
               <script type="text/javascript" src="/styles/popper.min.js"></script>
               <meta name="viewport" content="width=device-width, initial-scale=1" />
           </Head>

           <div className="landing-body">
           <div className="landing-page-wrapper">
               <div className="app-header">
                   <div className="main-header-container container-fluid">
                       <div className="header-content-left">
                           <div className="header-element">
                               <div className="horizontal-logo">
                                   <a href="/" className="header-logo">

                                   </a>
                               </div>
                           </div>
                           <div className="header-element">
                               <a href="javascript:void(0);" className="sidemenu-toggle header-link"
                                  data-bs-toggle="sidebar">
                            <span className="open-toggle">
                                <i className="ri-menu-3-line fs-20"></i>
                            </span>
                               </a>
                           </div>
                       </div>
                       <div className="header-content-right">
                           <div className="header-element align-items-center">
                               <div className="btn-list d-lg-none d-block">
                                   <a href="/auth/sign-up" className="btn btn-primary-light">
                                       Войти
                                   </a>
                                   <button className="btn btn-icon btn-success switcher-icon" data-bs-toggle="offcanvas"
                                           data-bs-target="#switcher-canvas">
                                       <i className="ri-settings-3-line"></i>
                                   </button>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>

               <div className="app-sidebar sticky"  id="sidebar">
                   <div className="container-xl">
                       <div className="main-sidebar">
                           <div className="main-menu-container nav nav-pills sub-open">
                               <div className="landing-logo-container">
                                   <div className="horizontal-logo">
                                       <a href="/" className="header-logo">

                                       </a>
                                   </div>
                               </div>
                               <div className="slide-left" id="slide-left">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24"
                                        viewBox="0 0 24 24">
                                       <path
                                           d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                                   </svg>
                               </div>
                               <ul className="main-menu">

                                   <li className="slide">
                                       <a className="side-menu__item" href="#home">
                                           <span className="side-menu__label">Главная</span>
                                       </a>
                                   </li>

                                   <li className="slide">
                                       <a href="#about" className="side-menu__item">
                                           <span className="side-menu__label">О проекте</span>
                                       </a>
                                   </li>

                                   <li className="slide has-sub">
                                       <a href="javascript:void(0);" className="side-menu__item">
                                           <span className="side-menu__label me-2">Разделы</span>
                                           <i className="fe fe-chevron-right side-menu__angle op-8"></i>
                                       </a>
                                       <ul className="slide-menu child1">
                                           <li className="slide">
                                               <a href="#statistics" className="side-menu__item">В разработе</a>
                                           </li>


                                       </ul>
                                   </li>

                                   <li className="slide">
                                       <a href="#team" className="side-menu__item">
                                           <span className="side-menu__label">Команда</span>
                                       </a>
                                   </li>

                                   <li className="slide">
                                       <a href="#faq" className="side-menu__item">
                                           <span className="side-menu__label">Faq's</span>
                                       </a>
                                   </li>

                                   <li className="slide">
                                       <a href="#contact" className="side-menu__item">
                                           <span className="side-menu__label">Контакты</span>
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
                               <div className="d-lg-flex d-none">
                                   <div className="btn-list d-lg-flex d-none mt-lg-2 mt-xl-0 mt-0">
                                       <a href="/auth/sign-up" className="btn btn-wave btn-primary">
                                           Войти
                                       </a>
                                       <button className="btn btn-wave btn-icon btn-light switcher-icon"
                                               data-bs-toggle="offcanvas" data-bs-target="#switcher-canvas">
                                           <i className="ri-settings-3-line"></i>
                                       </button>
                                   </div>
                               </div>
                           </div>

                       </div>

                   </div>

               </div>








               <div className="main-content landing-main px-0">

                   <div className="landing-banner" id="home">
                       <section className="section">
                           <div className="container main-banner-container pb-lg-0">
                               <div className="row">
                                   <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-8">
                                       <div className="py-lg-5">
                                           <div className="mb-3">
                                               <h5 className="fw-semibold text-fixed-white op-9"></h5>
                                           </div>
                                           <p className="landing-banner-heading mb-3">Блок утечки данных <span
                                               className="text-secondary">Findler</span></p>
                                           <div className="fs-16 mb-5 text-fixed-white op-7">Находится в разработке
                                           </div>

                                       </div>
                                   </div>
                                   <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-4">
                                       <div className="text-end landing-main-image landing-heading-img">
                                           <img src="img/blank2.gif" alt="" className="img-fluid"/>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </section>
                   </div>

                   <section className="section section-bg " id="statistics">
                       <div className="container text-center position-relative">
                           <p className="fs-12 fw-semibold text-success mb-1"><span
                               className="landing-section-heading">Статистика</span></p>
                           <h3 className="fw-semibold mb-2">Находится в разработке.</h3>
                           <div className="row justify-content-center">
                               <div className="col-xl-7">
                                   <p className="text-muted fs-15 mb-5 fw-normal">Находится в разработке.</p>
                               </div>
                           </div>
                           <div className="row  g-2 justify-content-center">
                               <div className="col-xl-12">
                                   <div className="row justify-content-evenly">
                                       <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                                           <div className="p-3 text-center rounded-2 bg-white border">
                                        <span className="mb-3 avatar avatar-lg avatar-rounded bg-primary-transparent">
                                            <i className='fs-24 bx bx-spreadsheet'></i>
                                          </span>
                                               <h3 className="fw-semibold mb-0 text-dark">120+</h3>
                                               <p className="mb-1 fs-14 op-7 text-muted ">
                                                   Проектов
                                               </p>
                                           </div>
                                       </div>
                                       <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                                           <div className="p-3 text-center rounded-2 bg-white border">
                                        <span className="mb-3 avatar avatar-lg avatar-rounded bg-primary-transparent">
                                            <i className='fs-24 bx bx-user-plus'></i>
                                          </span>
                                               <h3 className="fw-semibold mb-0 text-dark">20 тыс+</h3>
                                               <p className="mb-1 fs-14 op-7 text-muted ">
                                                   Клиентов
                                               </p>
                                           </div>
                                       </div>

                                       <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                                           <div className="p-3 text-center rounded-2 bg-white border">
                                        <span className="mb-3 avatar avatar-lg avatar-rounded bg-primary-transparent">
                                            <i className='fs-24 bx bx-user-circle'></i>
                                          </span>
                                               <h3 className="fw-semibold mb-0 text-dark">4</h3>
                                               <p className="mb-1 fs-14 op-7 text-muted ">
                                                   Разработчика
                                               </p>
                                           </div>
                                       </div>

                                   </div>

                               </div>
                           </div>
                       </div>
                   </section>

                   <section className="section " id="about">
                       <div className="container text-center">
                           <p className="fs-12 fw-semibold text-success mb-1"><span className="landing-section-heading">О проекте</span>
                           </p>
                           <h3 className="fw-semibold mb-2">Находится в разработке</h3>
                           <div className="row justify-content-center">
                               <div className="col-xl-7">
                                   <p className="text-muted fs-15 mb-3 fw-normal">Находится в разработке.</p>
                               </div>
                           </div>
                           <div className="row justify-content-between align-items-center mx-0">
                               <div className="col-xxl-5 col-xl-5 col-lg-5 customize-image text-center">
                                   <div className="text-lg-end">
                                       <img src="img/blank2.gif" alt="" className="img-fluid"/>
                                   </div>
                               </div>
                               <div className="col-xxl-6 col-xl-6 col-lg-6 pt-5 pb-0 px-lg-2 px-5 text-start">
                                   <h5 className="text-lg-start fw-semibold mb-0">Находится в разработке</h5>
                                   <p className=" text-muted">Находится в разработке</p>
                                   <div className="row">
                                       <div className="col-12 col-md-12">
                                           <div className="d-flex">
                                    <span>
                                        <i className='bx bxs-badge-check text-primary fs-18'></i>
                                    </span>
                                               <div className="ms-2">
                                                   <h6 className="fw-semibold mb-0">Находится в разработке</h6>
                                                   <p className=" text-muted">Находится в разработке </p>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-12">
                                           <div className="d-flex">
                                    <span>
                                        <i className='bx bxs-badge-check text-primary fs-18'></i>
                                    </span>
                                               <div className="ms-2">
                                                   <h6 className="fw-semibold mb-0">Находится в разработке</h6>
                                                   <p className=" text-muted">Находится в разработке </p>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-12">
                                           <div className="d-flex">
                                    <span>
                                        <i className='bx bxs-badge-check text-primary fs-18'></i>
                                    </span>
                                               <div className="ms-2">
                                                   <h6 className="fw-semibold mb-0">Находится в разработке</h6>
                                                   <p className=" text-muted">Находится в разработке </p>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </section>

                   <section className="section section-bg " id="our-mission">
                       <div className="container text-center">
                           <p className="fs-12 fw-semibold text-success mb-1"><span className="landing-section-heading">Ключевые особенности</span>
                           </p>
                           <h2 className="fw-semibold mb-2">Находится в разработке</h2>
                           <div className="row justify-content-center mb-5">
                               <div className="col-xl-7">
                                   <p className="text-muted fs-15mb-0 fw-normal">Находится в разработке.</p>
                               </div>
                           </div>
                           <div className="row">
                               <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                   <div className="card custom-card text-start landing-missions">
                                       <div className="card-body">
                                           <div className="align-items-top">
                                               <div className="mb-2">
                                            <span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
                                                <i className='bx bx-badge-check fs-25'></i>
                                             </span>
                                               </div>
                                               <div>
                                                   <h6 className="fw-semibold mb-1">
                                                       Дизайн
                                                   </h6>
                                                   <p className="mb-0 text-muted"></p>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                   <div className="card custom-card text-start landing-missions">
                                       <div className="card-body">
                                           <div className="align-items-top">
                                               <div className="mb-2">
                                            <span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
                                                <i className='bx bx-file fs-25'></i>
                                            </span>
                                               </div>
                                               <div>
                                                   <h6 className="fw-semibold mb-1">
                                                       Документация
                                                   </h6>
                                                   <p className="mb-0 text-muted"></p>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                   <div className="card custom-card text-start landing-missions">
                                       <div className="card-body">
                                           <div className="align-items-top">
                                               <div className="mb-2">
                                            <span className="avatar avatar-lg avatar-rounded  bg-primary-transparent">
                                                <i className='bx bx-cog fs-25'></i>
                                            </span>
                                               </div>
                                               <div>
                                                   <h6 className="fw-semibold mb-1">
                                                       Кастомизация
                                                   </h6>
                                                   <p className="mb-0 text-muted"></p>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                   <div className="card custom-card text-start landing-missions">
                                       <div className="card-body">
                                           <div className="align-items-top">
                                               <div className="mb-2">
                                            <span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
                                                <i className='bx bx-cloud-upload fs-25'></i>
                                            </span>
                                               </div>
                                               <div>
                                                   <h6 className="fw-semibold mb-1">
                                                       Регулярные обновления
                                                   </h6>
                                                   <p className="mb-0 text-muted"></p>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                   <div className="card custom-card text-start landing-missions">
                                       <div className="card-body">
                                           <div className="align-items-top">
                                               <div className="mb-2">
                                            <span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
                                                <i className='bx bx-support fs-25'></i>
                                            </span>
                                               </div>
                                               <div>
                                                   <h6 className="fw-semibold mb-1">
                                                       24/7 работа
                                                   </h6>
                                                   <p className="mb-0 text-muted"></p>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                   <div className="card custom-card text-start landing-missions">
                                       <div className="card-body">
                                           <div className="align-items-top">
                                               <div className="mb-2">
                                            <span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
                                                <i className='bx bx-image fs-25'></i>
                                            </span>
                                               </div>
                                               <div>
                                                   <h6 className="fw-semibold mb-1">
                                                       Быстрота

                                                   </h6>
                                                   <p className="mb-0 text-muted"></p>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                   <div className="card custom-card text-start landing-missions">
                                       <div className="card-body">
                                           <div className="align-items-top">
                                               <div className="mb-2">
                                            <span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
                                                <i className='bx bx-compass fs-25'></i>
                                            </span>
                                               </div>
                                               <div>
                                                   <h6 className="fw-semibold mb-1">
                                                       Простая навигация

                                                   </h6>
                                                   <p className="mb-0 text-muted"></p>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                   <div className="card custom-card text-start landing-missions">
                                       <div className="card-body">
                                           <div className="align-items-top">
                                               <div className="mb-2">
                                            <span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
                                                <i className='bx bx-desktop fs-25'></i>
                                            </span>
                                               </div>
                                               <div>
                                                   <h6 className="fw-semibold mb-1">
                                                       Полная адаптация
                                                   </h6>
                                                   <p className="mb-0 text-muted"></p>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </section>

                   <section className="section landing-Features" id="features">
                       <div className="container text-center">
                           <p className="fs-12 fw-semibold text-success mb-1"><span
                               className="landing-section-heading">Технологии</span></p>
                           <h2 className="fw-semibold mb-2 text-fixed-white ">Технологии используемые в Findler</h2>
                           <div className="row justify-content-center">
                               <div className="col-xl-7">
                                   <p className="text-fixed-white op-8 fs-15 mb-3 fw-normal"></p>
                               </div>
                           </div>
                           <div className="text-start">
                               <div className="justify-content-center">
                                   <div className="">
                                       <div className="feature-logos mt-sm-5 flex-wrap">
                                           <div className="ms-sm-5 ms-2 text-center">
                                               <img src="/images/media/landing/web/1.png" alt="image"
                                                    className="featur-icon"/>
                                                   <h5 className="mt-3 text-fixed-white ">CSS</h5>
                                           </div>
                                           <div className="ms-sm-5 ms-2 text-center">
                                               <img src="/images/media/landing/web/2.png" alt="image"
                                                    className="featur-icon"/>
                                                   <h5 className="mt-3 text-fixed-white ">HTML5</h5>
                                           </div>
                                           <div className="ms-sm-5 ms-2 text-center">
                                               <img src="/images/media/landing/web/4.png" alt="image"
                                                    className="featur-icon"/>
                                                   <h5 className="mt-3 text-fixed-white ">JS</h5>
                                           </div>
                                           <div className="ms-sm-5 ms-2 text-center">
                                               <img src="/images/media/landing/web/5.png" alt="image"
                                                    className="featur-icon"/>
                                                   <h5 className="mt-3 text-fixed-white ">Node.js</h5>
                                           </div>
                                           <div className="ms-sm-5 ms-2 text-center">
                                               <img src="/images/media/landing/web/6.png" alt="image"
                                                    className="featur-icon"/>
                                                   <h5 className="mt-3 text-fixed-white ">Nest.js</h5>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="swiper-pagination mt-4"></div>
                           </div>
                       </div>
                   </section>

                   <section className="section landing-testimonials section-bg" id="testimonials">
                       <div className="container text-center">
                           <p className="fs-12 fw-semibold text-success mb-1"><span
                               className="landing-section-heading">TESTIMONIALS</span></p>
                           <h3 className="fw-semibold mb-2">We never failed to reach expectations</h3>
                           <div className="row justify-content-center">
                               <div className="col-xl-7">
                                   <p className="text-muted fs-15 mb-5 fw-normal">Some of the reviews our clients gave
                                       which brings motivation to work for future projects.</p>
                               </div>
                           </div>
                           <div className="swiper pagination-dynamic text-start">
                               <div className="swiper-wrapper">
                                   <div className="swiper-slide">
                                       <div className="card custom-card testimonial-card">
                                           <div className="card-body">
                                               <div className="d-flex align-items-center mb-3">
                                            <span className="avatar avatar-md avatar-rounded me-3">
                                                <img src="../assets/images/faces/15.jpg" alt=""/>
                                            </span>
                                                   <div>
                                                       <p className="mb-0 fw-semibold fs-14">Json Taylor</p>
                                                       <p className="mb-0 fs-10 fw-semibold text-muted">CEO OF NORJA</p>
                                                   </div>
                                               </div>
                                               <div className="mb-3">
                                                   <span className="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --</span>
                                               </div>
                                               <div className="d-flex align-items-center justify-content-between">
                                                   <div className="d-flex align-items-center">
                                                       <span className="text-muted">Rating : </span>
                                                       <span className="text-warning d-block ms-1">
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-half-fill"></i>
                                                </span>
                                                   </div>
                                                   <div className="float-end fs-12 fw-semibold text-muted text-end">
                                                       <span>12 days ago</span>
                                                       <span className="d-block fw-normal fs-12 text-success"><i>Json Taylor</i></span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="swiper-slide">
                                       <div className="card custom-card testimonial-card">
                                           <div className="card-body">
                                               <div className="d-flex align-items-center mb-3">
                                            <span className="avatar avatar-md avatar-rounded me-3">
                                                <img src="../assets/images/faces/4.jpg" alt=""/>
                                            </span>
                                                   <div>
                                                       <p className="mb-0 fw-semibold fs-14">Melissa Blue</p>
                                                       <p className="mb-0 fs-10 fw-semibold text-muted">MANAGER CHO</p>
                                                   </div>
                                               </div>
                                               <div className="mb-3">
                                                   <span className="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --</span>
                                               </div>
                                               <div className="d-flex align-items-center justify-content-between">
                                                   <div className="d-flex align-items-center">
                                                       <span className="text-muted">Rating : </span>
                                                       <span className="text-warning d-block ms-1">
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-half-fill"></i>
                                                </span>
                                                   </div>
                                                   <div className="float-end fs-12 fw-semibold text-muted text-end">
                                                       <span>7 days ago</span>
                                                       <span className="d-block fw-normal fs-12 text-success"><i>Melissa Blue</i></span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="swiper-slide">
                                       <div className="card custom-card testimonial-card">
                                           <div className="card-body">
                                               <div className="d-flex align-items-center mb-3">
                                            <span className="avatar avatar-md avatar-rounded me-3">
                                                <img src="../assets/images/faces/2.jpg" alt=""/>
                                            </span>
                                                   <div>
                                                       <p className="mb-0 fw-semibold fs-14">Kiara Advain</p>
                                                       <p className="mb-0 fs-10 fw-semibold text-muted">CEO OF
                                                           EMPIRO</p>
                                                   </div>
                                               </div>
                                               <div className="mb-3">
                                                   <span className="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --</span>
                                               </div>
                                               <div className="d-flex align-items-center justify-content-between">
                                                   <div className="d-flex align-items-center">
                                                       <span className="text-muted">Rating : </span>
                                                       <span className="text-warning d-block ms-1">
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-line"></i>
                                                </span>
                                                   </div>
                                                   <div className="float-end fs-12 fw-semibold text-muted text-end">
                                                       <span>2 days ago</span>
                                                       <span className="d-block fw-normal fs-12 text-success"><i>Kiara Advain</i></span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="swiper-slide">
                                       <div className="card custom-card testimonial-card">
                                           <div className="card-body">
                                               <div className="d-flex align-items-center mb-3">
                                            <span className="avatar avatar-md avatar-rounded me-3">
                                                <img src="../assets/images/faces/10.jpg" alt=""/>
                                            </span>
                                                   <div>
                                                       <p className="mb-0 fw-semibold fs-14">Jhonson Smith</p>
                                                       <p className="mb-0 fs-10 fw-semibold text-muted">CHIEF SECRETARY
                                                           MBIO</p>
                                                   </div>
                                               </div>
                                               <div className="mb-3">
                                                   <span className="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --</span>
                                               </div>
                                               <div className="d-flex align-items-center justify-content-between">
                                                   <div className="d-flex align-items-center">
                                                       <span className="text-muted">Rating : </span>
                                                       <span className="text-warning d-block ms-1">
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-half-fill"></i>
                                                </span>
                                                   </div>
                                                   <div className="float-end fs-12 fw-semibold text-muted text-end">
                                                       <span>16 hrs ago</span>
                                                       <span className="d-block fw-normal fs-12 text-success"><i>Jhonson Smith</i></span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="swiper-slide">
                                       <div className="card custom-card testimonial-card">
                                           <div className="card-body">
                                               <div className="d-flex align-items-center mb-3">
                                            <span className="avatar avatar-md avatar-rounded me-3">
                                                <img src="../assets/images/faces/12.jpg" alt=""/>
                                            </span>
                                                   <div>
                                                       <p className="mb-0 fw-semibold fs-14">Dwayne Stort</p>
                                                       <p className="mb-0 fs-10 fw-semibold text-muted">CEO
                                                           ARMEDILLO</p>
                                                   </div>
                                               </div>
                                               <div className="mb-3">
                                                   <span className="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --</span>
                                               </div>
                                               <div className="d-flex align-items-center justify-content-between">
                                                   <div className="d-flex align-items-center">
                                                       <span className="text-muted">Rating : </span>
                                                       <span className="text-warning d-block ms-1">
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-line"></i>
                                                </span>
                                                   </div>
                                                   <div className="float-end fs-12 fw-semibold text-muted text-end">
                                                       <span>22 days ago</span>
                                                       <span className="d-block fw-normal fs-12 text-success"><i>Dwayne Stort</i></span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="swiper-slide">
                                       <div className="card custom-card testimonial-card">
                                           <div className="card-body">
                                               <div className="d-flex align-items-center mb-3">
                                            <span className="avatar avatar-md avatar-rounded me-3">
                                                <img src="../assets/images/faces/3.jpg" alt=""/>
                                            </span>
                                                   <div>
                                                       <p className="mb-0 fw-semibold fs-14">Jasmine Kova</p>
                                                       <p className="mb-0 fs-10 fw-semibold text-muted">AGGENT AMIO</p>
                                                   </div>
                                               </div>
                                               <div className="mb-3">
                                                   <span className="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --</span>
                                               </div>
                                               <div className="d-flex align-items-center justify-content-between">
                                                   <div className="d-flex align-items-center">
                                                       <span className="text-muted">Rating : </span>
                                                       <span className="text-warning d-block ms-1">
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-half-fill"></i>
                                                </span>
                                                   </div>
                                                   <div className="float-end fs-12 fw-semibold text-muted text-end">
                                                       <span>26 days ago</span>
                                                       <span className="d-block fw-normal fs-12 text-success"><i>Jasmine Kova</i></span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="swiper-slide">
                                       <div className="card custom-card testimonial-card">
                                           <div className="card-body">
                                               <div className="d-flex align-items-center mb-3">
                                            <span className="avatar avatar-md avatar-rounded me-3">
                                                <img src="../assets/images/faces/16.jpg" alt=""/>
                                            </span>
                                                   <div>
                                                       <p className="mb-0 fw-semibold fs-14">Dolph MR</p>
                                                       <p className="mb-0 fs-10 fw-semibold text-muted">CEO MR BRAND</p>
                                                   </div>
                                               </div>
                                               <div className="mb-3">
                                                   <span className="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --</span>
                                               </div>
                                               <div className="d-flex align-items-center justify-content-between">
                                                   <div className="d-flex align-items-center">
                                                       <span className="text-muted">Rating : </span>
                                                       <span className="text-warning d-block ms-1">
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                </span>
                                                   </div>
                                                   <div className="float-end fs-12 fw-semibold text-muted text-end">
                                                       <span>1 month ago</span>
                                                       <span className="d-block fw-normal fs-12 text-success"><i>Dolph MR</i></span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="swiper-slide">
                                       <div className="card custom-card testimonial-card">
                                           <div className="card-body">
                                               <div className="d-flex align-items-center mb-3">
                                            <span className="avatar avatar-md avatar-rounded me-3">
                                                <img src="/images/faces/5.jpg" alt=""/>
                                            </span>
                                                   <div>
                                                       <p className="mb-0 fw-semibold fs-14">Brenda Simpson</p>
                                                       <p className="mb-0 fs-10 fw-semibold text-muted">CEO AIBMO</p>
                                                   </div>
                                               </div>
                                               <div className="mb-3">
                                                   <span className="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --</span>
                                               </div>
                                               <div className="d-flex align-items-center justify-content-between">
                                                   <div className="d-flex align-items-center">
                                                       <span className="text-muted">Rating : </span>
                                                       <span className="text-warning d-block ms-1">
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-half-fill"></i>
                                                </span>
                                                   </div>
                                                   <div className="float-end fs-12 fw-semibold text-muted text-end">
                                                       <span>1 month ago</span>
                                                       <span className="d-block fw-normal fs-12 text-success"><i>Brenda Simpson</i></span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="swiper-slide">
                                       <div className="card custom-card testimonial-card">
                                           <div className="card-body">
                                               <div className="d-flex align-items-center mb-3">
                                            <span className="avatar avatar-md avatar-rounded me-3">
                                                <img src="/images/faces/7.jpg" alt=""/>
                                            </span>
                                                   <div>
                                                       <p className="mb-0 fw-semibold fs-14">Julia Sams</p>
                                                       <p className="mb-0 fs-10 fw-semibold text-muted">CHIEF SECRETARY
                                                           BHOL</p>
                                                   </div>
                                               </div>
                                               <div className="mb-3">
                                                   <span className="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --</span>
                                               </div>
                                               <div className="d-flex align-items-center justify-content-between">
                                                   <div className="d-flex align-items-center">
                                                       <span className="text-muted">Rating : </span>
                                                       <span className="text-warning d-block ms-1">
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                </span>
                                                   </div>
                                                   <div className="float-end fs-12 fw-semibold text-muted text-end">
                                                       <span>2 month ago</span>
                                                       <span className="d-block fw-normal fs-12 text-success"><i>Julia Sams</i></span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="swiper-pagination mt-4"></div>
                           </div>
                       </div>
                   </section>

                   <section className="section  section-bg" id="team">
                       <div className="container text-center">
                           <p className="fs-12 fw-semibold text-success mb-1"><span className="landing-section-heading">Наша команда</span>
                           </p>
                           <h3 className="fw-semibold mb-2">Лучшие разработчики трудятся над этим проектом</h3>
                           <div className="row justify-content-center">
                               <div className="col-xl-7">
                                   <p className="text-muted fs-15 mb-5 fw-normal"></p>
                               </div>
                           </div>
                           <div className="row">
                               <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                   <div className="card custom-card text-center team-card ">
                                       <div className="card-body p-5">
                                    <span className="avatar avatar-xxl avatar-rounded mb-3 team-avatar">
                                        <img src="/images/faces/15.jpg" alt=""/>
                                    </span>
                                           <p className="fw-semibold fs-17 mb-0 text-default">Дмитрий Власов</p>
                                           <span className="text-muted fs-14 text-primary fw-semibold">Тимлид</span>
                                           <p className="text-muted mt-2 fs-13">Хороший человек</p>
                                           <div className="mt-2">
                                               <a href="profile.html" className="btn btn-light" target="_blank">Посмотреть
                                                   профиль</a>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                   <div className="card custom-card text-center team-card ">
                                       <div className="card-body p-5">
                                    <span className="avatar avatar-xxl avatar-rounded mb-3 team-avatar">
                                        <img src="/images/faces/12.jpg" alt=""/>
                                    </span>
                                           <p className="fw-semibold fs-17 mb-0 text-default">Роман Команич</p>
                                           <span className="text-muted fs-14 text-primary fw-semibold">Frontend разработчик</span>
                                           <p className="text-muted mt-2 fs-13">Гений frontend разработки</p>
                                           <div className="mt-2">
                                               <a href="profile.html" className="btn btn-light" target="_blank">Посмотреть
                                                   профиль</a>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                   <div className="card custom-card text-center team-card ">
                                       <div className="card-body p-5">
                                    <span className="avatar avatar-xxl avatar-rounded mb-3 team-avatar">
                                        <img src="/images/faces/5.jpg" alt=""/>
                                    </span>
                                           <p className="fw-semibold fs-17 mb-0 text-default">Кирилл Медведев</p>
                                           <span className="text-muted fs-14 text-primary fw-semibold">Backend разработчик</span>
                                           <p className="text-muted mt-2 fs-13">Гений backend разработки.</p>
                                           <div className="mt-2">
                                               <a href="profile.html" className="btn btn-light" target="_blank">Посмотреть
                                                   профиль</a>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                   <div className="card custom-card text-center team-card ">
                                       <div className="card-body p-5">
                                    <span className="avatar avatar-xxl avatar-rounded mb-3 team-avatar">
                                        <img src="/images/faces/1.jpg" alt=""/>
                                    </span>
                                           <p className="fw-semibold fs-17 mb-0 text-default">Михаил Китаев</p>
                                           <span className="text-muted fs-14 text-primary fw-semibold">Frontend разработчик</span>
                                           <p className="text-muted mt-2 fs-13"> Гений frontend разработки.</p>
                                           <div className="mt-2">
                                               <a href="profile.html" className="btn btn-light" target="_blank">Посмотреть
                                                   профиль</a>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>

                       </div>
                   </section>

                   <section className="section section-bg" id="faq">
                       <div className="container text-center">
                           <p className="fs-12 fw-semibold text-success mb-1"><span
                               className="landing-section-heading">F.A.Q</span></p>
                           <h3 className="fw-semibold mb-2">Часто задаваемые вопросы ?</h3>
                           <div className="row justify-content-center">
                               <div className="col-xl-7">
                                   <p className="text-muted fs-15 mb-5 fw-normal"></p>
                               </div>
                           </div>
                           <div className="row text-start">
                               <div className="col-xl-12">
                                   <div className="row gy-2">
                                       <div className="col-xl-6">
                                           <div
                                               className="accordion accordion-customicon1 accordion-primary accordions-items-seperate"
                                               id="accordionFAQ1">
                                               <div className="accordion-item">
                                                   <h2 className="accordion-header" id="headingcustomicon1One">
                                                       <button className="accordion-button" type="button"
                                                               data-bs-toggle="collapse"
                                                               data-bs-target="#collapsecustomicon1One"
                                                               aria-expanded="true"
                                                               aria-controls="collapsecustomicon1One">
                                                           Находится в разработке?
                                                       </button>
                                                   </h2>
                                                   <div id="collapsecustomicon1One"
                                                        className="accordion-collapse collapse show"
                                                        aria-labelledby="headingcustomicon1One"
                                                        data-bs-parent="#accordionFAQ1">
                                                       <div className="accordion-body">

                                                           <code>Тест</code>
                                                       </div>
                                                   </div>
                                               </div>

                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </section>

                   <section className="section" id="contact">
                       <div className="container text-center">
                           <p className="fs-12 fw-semibold text-success mb-1"><span
                               className="landing-section-heading">Контакты</span></p>
                           <h3 className="fw-semibold mb-2">Остались вопросы? С радостью на них ответим.</h3>
                           <div className="row justify-content-center">
                               <div className="col-xl-9">
                                   <p className="text-muted fs-15 mb-5 fw-normal"></p>
                               </div>
                           </div>
                           <div className="row text-start">
                               <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                   <div className="card custom-card border shadow-none">

                                   </div>
                               </div>
                               <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                   <div
                                       className="card custom-card  overflow-hidden section-bg border overflow-hidden shadow-none">
                                       <div className="card-body">
                                           <div className="row gy-3 mt-2 px-3">
                                               <div className="col-xl-6">
                                                   <div className="row gy-3">
                                                       <div className="col-xl-12">
                                                           <label htmlFor="contact-address-name"
                                                                  className="form-label ">Ваше имя :</label>
                                                           <input type="text" className="form-control "
                                                                  id="contact-address-name" placeholder="Enter Name"/>
                                                       </div>
                                                       <div className="col-xl-12">
                                                           <label htmlFor="contact-address-phone"
                                                                  className="form-label ">Телефон :</label>
                                                           <input type="text" className="form-control "
                                                                  id="contact-address-phone"
                                                                  placeholder="Enter Phone No"/>
                                                       </div>
                                                       <div className="col-xl-12">
                                                           <label htmlFor="contact-address-address"
                                                                  className="form-label ">Адрес :</label>
                                                           <textarea className="form-control "
                                                                     id="contact-address-address" rows="1"></textarea>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-xl-6">
                                                   <label htmlFor="contact-address-message" className="form-label ">Сообщение
                                                       :</label>
                                                   <textarea className="form-control " id="contact-address-message"
                                                             rows="8"></textarea>
                                               </div>
                                               <div className="col-xl-12">
                                                   <div className="d-flex  mt-4 ">
                                                       <div className="">

                                                       </div>
                                                       <div className="ms-auto">
                                                           <button className="btn btn-primary  btn-wave">Отправить
                                                           </button>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </section>

                   <section className="section landing-footer text-fixed-white">
                       <div className="container">
                           <div className="row">
                               <div className="col-md-4 col-sm-6 col-12 mb-md-0 mb-3">
                                   <div className="px-4">
                                       <p className="fw-semibold mb-3"><a href=""><img src="" alt=""/></a></p>
                                       <p className="mb-2 op-6 fw-normal">

                                       </p>
                                       <p className="mb-0 op-6 fw-normal">Lorem ipsum dolor sit amet consectetur,
                                           adipisicing elit. Autem ea esse ad</p>
                                   </div>
                               </div>
                               <div className="col-md-2 col-sm-6 col-12">
                                   <div className="px-4">
                                       <h6 className="fw-semibold mb-3 text-fixed-white">Разделы</h6>
                                       <ul className="list-unstyled op-6 fw-normal landing-footer-list">
                                           <li>
                                               <a href="javascript:void(0);" className="text-fixed-white">О нас</a>
                                           </li>

                                       </ul>
                                   </div>
                               </div>
                               <div className="col-md-2 col-sm-6 col-12">
                                   <div className="px-4">
                                       <h6 className="fw-semibold text-fixed-white">Инфо</h6>
                                       <ul className="list-unstyled op-6 fw-normal landing-footer-list">
                                           <li>
                                               <a href="javascript:void(0);" className="text-fixed-white">Команда</a>
                                           </li>

                                       </ul>
                                   </div>
                               </div>
                               <div className="col-md-4 col-sm-6 col-12">
                                   <div className="px-4">
                                       <h6 className="fw-semibold text-fixed-white">CONTACT</h6>
                                       <ul className="list-unstyled fw-normal landing-footer-list">
                                           <li>
                                               <a href="javascript:void(0);" className="text-fixed-white op-6"><i
                                                   className="ri-home-4-line me-1 align-middle"></i>Тюмень</a>
                                           </li>
                                           <li>
                                               <a href="javascript:void(0);" className="text-fixed-white op-6"><i
                                                   className="ri-mail-line me-1 align-middle"></i> info@fmail.com</a>
                                           </li>
                                           <li>
                                               <a href="javascript:void(0);" className="text-fixed-white op-6"><i
                                                   className="ri-phone-line me-1 align-middle"></i> +79000000000</a>
                                           </li>

                                           <li className="mt-3">
                                               <p className="mb-2 fw-semibold op-8">Следите за нами на :</p>
                                               <div className="mb-0">
                                                   <div className="btn-list">

                                                   </div>
                                               </div>
                                           </li>
                                       </ul>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </section>


                   <div className="text-center landing-main-footer py-3">
                <span className="text-muted fs-15"> Copyright © <span id="year"></span> <a
                    href="javascript:void(0);" className="text-primary fw-semibold"><u>Findler</u></a>.
                Разработано <span className="fa fa-heart text-danger"></span> <a href="javascript:void(0);"
                                                                                 className="text-primary fw-semibold"><u>
                Uniquedev</u>
                </a>
                </span>
                   </div>

               </div>


           </div>

           <div className="scrollToTop">
               <span className="arrow"><i className="ri-arrow-up-s-fill fs-20"></i></span>
           </div>
           <div id="responsive-overlay"></div>

           </div>

       </>
        );
}
