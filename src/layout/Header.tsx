import React from "react";
import styles from "@/styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className={`${styles.homeHeader}`}>
      <div className="container mx-auto">
        <div className={`${styles.headerWrapper}`}>
          <div className="flex grid-row-3 items-center justify-evenly">
            <div className="col-span-3">
              <div className="site-logo">
                <Link href="">
                  <Image
                    src="/site-logo/logo.png"
                    alt="Sodia Logo"
                    width={150}
                    height={150}
                  />
                </Link>
              </div>
            </div>
            <div className="col-span-6 block lg:hidden static">
              <div className="show-mobile-menu" />
            </div>
            <div className="col-span-8 hidden lg:block static">
              <nav>
                <ul className={`${styles.mainMenu} text-center`}>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#">Page</a>
                    <ul className={styles.submenu}>
                      <li className={styles.menuChildren}>
                        <a href="about.html">About</a>
                        <ul className={styles.submenu}>
                          <li>
                            <a href="about.html">About Us 01</a>
                          </li>
                          <li>
                            <a href="about-2.html">About Us 02</a>
                          </li>
                        </ul>
                      </li>
                      <li className={styles.menuChildren}>
                        <a href="services.html">services</a>
                        <ul className={styles.submenu}>
                          <li>
                            <a href="services.html">services 01</a>
                          </li>
                          <li>
                            <a href="services-2.html">services 02</a>
                          </li>
                          <li>
                            <a href="services-details.html">services details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="price.html">Pricing</a>
                      </li>
                      <li>
                        <a href="faq.html">faq</a>
                      </li>
                      <li className={styles.menuChildren}>
                        <a href="contact.html">Contact Us</a>
                        <ul className={styles.submenu}>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                          <li>
                            <a href="contact-standart.html">contact standart</a>
                          </li>
                          <li>
                            <a href="contact-minimal.html">contact minimal</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="process.html">Process</a>
                      </li>
                      <li className={styles.menuChildren}>
                        <a href="team.html">team</a>
                        <ul className={styles.submenu}>
                          <li>
                            <a href="team.html">team 01</a>
                          </li>
                          <li>
                            <a href="team-2.html">team 02</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="login.html">Login</a>
                      </li>
                      <li>
                        <a href="register.html">Register</a>
                      </li>
                      <li>
                        <a href="coming-soon.html">Coming Soon</a>
                      </li>
                      <li>
                        <a href="404.html">404 Error</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="portfolio.html">Portfolio</a>
                    <ul className={styles.submenu}>
                      <li>
                        <a href="portfolio.html">Portfolio Grid 01</a>
                      </li>
                      <li>
                        <a href="portfolio-2.html">Portfolio Grid 02</a>
                      </li>
                      <li>
                        <a href="portfolio-3.html">Portfolio Grid 03</a>
                      </li>
                      <li>
                        <a href="portfolio-full.html">Portfolio Grid full</a>
                      </li>
                      <li>
                        <a href="portfolio-m.html">Portfolio Masonary</a>
                      </li>
                      <li>
                        <a href="portfolio-m-2.html">Portfolio Masonary 02</a>
                      </li>
                      <li>
                        <a href="portfolio-slider-full.html">
                          Portfolio Slider Full
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-slider-box.html">
                          Portfolio Slider Box
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-single-1.html">
                          Portfolio Single 01
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-single-2.html">
                          Portfolio Single 02
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-single-3.html">
                          Portfolio Single 03
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-single-4.html">
                          Portfolio Single 04
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="static">
                    <a href="#">Elements</a>
                    <ul
                      className={`flex flex-wrap min-w-fit ${styles.megaMenu}`}
                    >
                      <div className="col-span-3">
                        <li className={styles.megaMenuTitle}>
                          <a href="">Element 01</a>
                          <ul className="mega-menu-inner">
                            <li>
                              <a href="elements-accordion.html">accordion</a>
                            </li>
                            <li>
                              <a href="elements-alerts.html">alerts</a>
                            </li>
                            <li>
                              <a href="elements-badges.html">badges</a>
                            </li>
                            <li>
                              <a href="elements-brand.html">brand logo</a>
                            </li>
                            <li>
                              <a href="elements-breadcrumbs.html">
                                breadcrumbs
                              </a>
                            </li>
                            <li>
                              <a href="elements-buttons.html">buttons</a>
                            </li>
                          </ul>
                        </li>
                      </div>
                      <div className="col-span-3 w-100">
                        <li className={styles.megaMenuTitle}>
                          <a>Elements 02</a>
                          <ul>
                            <li>
                              <a href="elements-columns.html">columns</a>
                            </li>
                            <li>
                              <a href="elements-counter.html">counter</a>
                            </li>
                            <li>
                              <a href="elements-contact-form.html">
                                contact form
                              </a>
                            </li>
                            <li>
                              <a href="elements-cta.html">call to action</a>
                            </li>
                            <li>
                              <a href="elements-dropdowns.html">dropdowns</a>
                            </li>
                            <li>
                              <a href="elements-fancy-text.html">fancy text</a>
                            </li>
                          </ul>
                        </li>
                      </div>
                      <div className="col-span-3">
                        <li className={styles.megaMenuTitle}>
                          <a href="javascript:void(0)">Elements 03</a>
                          <ul className="mega-menu-inner">
                            <li>
                              <a href="elements-footer.html">footer</a>
                            </li>
                            <li>
                              <a href="elements-gallery.html">gallery</a>
                            </li>
                            <li>
                              <a href="elements-lightbox.html">lightbox</a>
                            </li>
                            <li>
                              <a href="elements-page-titles.html">
                                page titles
                              </a>
                            </li>
                            <li>
                              <a href="elements-post.html">latest post</a>
                            </li>
                            <li>
                              <a href="elements-progressbar.html">
                                progressbar
                              </a>
                            </li>
                          </ul>
                        </li>
                      </div>
                      <div className="col-span-3">
                        <li className={styles.megaMenuTitle}>
                          <a href="javascript:void(0)">Elements 04</a>
                          <ul className="mega-menu-inner">
                            <li>
                              <a href="elements-subscribe.html">subscribe</a>
                            </li>
                            <li>
                              <a href="elements-tabs.html">tabs</a>
                            </li>
                            <li>
                              <a href="elements-team.html">team</a>
                            </li>
                            <li>
                              <a href="elements-testimonials.html">
                                Testimonials
                              </a>
                            </li>
                            <li>
                              <a href="elements-tooltips.html">Tooltips</a>
                            </li>
                            <li>
                              <a href="elements-typography.html">typography</a>
                            </li>
                          </ul>
                        </li>
                      </div>
                    </ul>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                    <ul className={styles.submenu}>
                      <li>
                        <a href="blog.html">Blog right sidebar</a>
                      </li>
                      <li>
                        <a href="blog-left-sidebar.html">Blog left sidebar</a>
                      </li>
                      <li>
                        <a href="blog-no-sidebar.html">Blog no sidebar</a>
                      </li>
                      <li>
                        <a href="blog-2-column.html">Blog tow column 01</a>
                      </li>
                      <li>
                        <a href="blog-2-column-2.html">Blog tow column 02</a>
                      </li>
                      <li>
                        <a href="blog-2-column-mas.html">
                          Blog tow col Masonary
                        </a>
                      </li>
                      <li>
                        <a href="blog-3-column.html">Blog three column</a>
                      </li>
                      <li>
                        <a href="blog-3-column-mas.html">
                          Blog three col Masonary
                        </a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Image Details</a>
                      </li>
                      <li>
                        <a href="blog-details-audio.html">Blog Audio Details</a>
                      </li>
                      <li>
                        <a href="blog-details-video.html">Blog Video Details</a>
                      </li>
                      <li>
                        <a href="blog-details-gallery.html">
                          Blog Gallery Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="shop.html">Shop</a>
                    <ul className={styles.submenu}>
                      <li>
                        <a href="shop.html">Shop Details</a>
                      </li>
                      <li>
                        <a href="shop-list.html">Shop List</a>
                      </li>
                      <li>
                        <a href="product-details.html">Product Details</a>
                      </li>
                      <li>
                        <a href="cart.html">Shopping Cart</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Wishlist</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-2 d-none d-lg-block">
              <div className="header-btn text-right">
                <a href="#" className="btn btn-squ">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
