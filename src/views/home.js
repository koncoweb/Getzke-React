import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import PortofolioCard from '../components/portofolio-card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Getzke Official Site</title>
        <meta
          name="description"
          content="Getzke Sepatu Lokal Harga Masuk Akal dan model terbaru "
        />
        <meta property="og:title" content="Getzke Official Site" />
        <meta
          property="og:description"
          content="Getzke Sepatu Lokal Harga Masuk Akal dan model terbaru "
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/7e3d634e-86eb-462f-b9ab-2bd5ca0be348/6fe74121-c0ef-4b4e-9131-ed0e2360864f?org_if_sml=1"
        />
      </Helmet>
      <Navigation
        image_alt1="Logo Getzke.id"
        image_src1="/playground_assets/logo-getzke-transparent-200h.png"
        rootClassName="navigation-root-class-name"
      ></Navigation>
      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width max-content-container">
            <div className="home-gallery">
              <a
                href="https://getzke.id/shop-2/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link"
              >
                <div className="home-container01">
                  <img
                    alt="image"
                    src="/playground_assets/logo-getzke-transparent-200h.png"
                    loading="lazy"
                    className="home-image"
                  />
                </div>
              </a>
              <div className="home-container02">
                <a
                  href="https://shopee.co.id/getzkefootwear"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link01"
                >
                  <div className="home-container03">
                    <img
                      alt="image"
                      src="/playground_assets/shopee.svg"
                      className="home-image01"
                    />
                  </div>
                </a>
                <a
                  href="https://www.tokopedia.com/getzke-id"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link02"
                >
                  <div className="home-container04">
                    <img
                      alt="image"
                      src="/playground_assets/tokopedia.svg"
                      className="home-image02"
                    />
                  </div>
                </a>
                <a
                  href="https://www.lazada.co.id/shop/getzke"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link03"
                >
                  <div className="home-container05">
                    <img
                      alt="image"
                      src="/playground_assets/lazada.svg"
                      className="home-image03"
                    />
                  </div>
                </a>
                <a
                  href="https://www.blibli.com/merchant/getzke-official-store/GEO-70047"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link04"
                >
                  <div className="home-container06">
                    <img
                      alt="image"
                      src="/playground_assets/blibli-com-seeklogo.com.svg"
                      className="home-image04"
                    />
                  </div>
                </a>
              </div>
              <div className="home-container07">
                <a
                  href="https://www.zalora.co.id/store/getzke-official"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link05"
                >
                  <div className="home-container08">
                    <img
                      alt="image"
                      src="/playground_assets/zalora-200h.png"
                      className="home-image05"
                    />
                  </div>
                </a>
                <a
                  href="https://shoesmart.co.id/products?search=getzke"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link06"
                >
                  <div className="home-container09">
                    <img
                      alt="image"
                      src="/playground_assets/shoesmart-200w.webp"
                      className="home-image06"
                    />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/getzke/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link07"
                >
                  <div className="home-container10">
                    <img
                      alt="image"
                      src="/playground_assets/instagram-light.svg"
                      className="home-image07"
                    />
                  </div>
                </a>
                <a
                  href="https://www.tiktok.com/@getzke.id?_d=secCgYIASAHKAESPgo8Dejd6Y1lOgKjgYiSEyLXoDR3H2Z7EJxGwSu%2Bk6Cb2ztG9m%2B7lZcm1Q7qft%2BkxEZu1%2B83H5UwXTekkANGGgA%3D&amp;_r=1&amp;language=id&amp;sec_uid=MS4wLjABAAAAiBC7hpplMQTOTKNU_5hcLtgFKrS-eUSqU3FRXShwLd5HjoyE9qeBQYz47MEvWnfk&amp;sec_user_id=MS4wLjABAAAA-044iWtK5TUQsng65Pc0OMTrvDNJUr0vxAaE-uZ4ambe0DMMg3cMPb2ELKFStWl2&amp;share_app_id=1180&amp;share_author_id=6869375106500035586&amp;share_link_id=8930b0da-225c-44dd-9836-e29f68aa1b20&amp;source=h5_t&amp;timestamp=1653649460&amp;u_code=dhdm6ei41g3mmf&amp;ugbiz_name=Account&amp;user_id=6938331195777729538&amp;utm_campaign=client_share&amp;utm_medium=android&amp;utm_source=copy"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link08"
                >
                  <div className="home-container11">
                    <img
                      alt="image"
                      src="/playground_assets/tiktok-light.svg"
                      className="home-image08"
                    />
                  </div>
                </a>
              </div>
              <div className="home-container12">
                <a
                  href="https://www.facebook.com/getzke.id/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link09"
                >
                  <div className="home-container13">
                    <img
                      alt="image"
                      src="/playground_assets/facebook-light.svg"
                      className="home-image09"
                    />
                  </div>
                </a>
                <a href="#csbox" className="home-link10">
                  <div className="home-container14">
                    <img
                      alt="image"
                      src="/playground_assets/whatsapp.svg"
                      className="home-image10"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="csbox" className="home-portofolio section-container">
          <div className="home-max-width1 max-content-container">
            <div
              id="customerservice"
              className="home-tab-selector-cards-container"
            >
              <a
                href="https://api.whatsapp.com/send?phone=6281999307111"
                target="_blank"
                rel="noreferrer noopener"
              >
                <PortofolioCard
                  image_src="/playground_assets/cs1-getzke-200h.jpg"
                  project_title="CS 1"
                  rootClassName="portofolio-card-root-class-name5"
                  className="home-component1"
                ></PortofolioCard>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=6287875159522"
                target="_blank"
                rel="noreferrer noopener"
              >
                <PortofolioCard
                  image_src="/playground_assets/cs2-getzke-200h.jpg"
                  project_title="CS 2"
                  rootClassName="portofolio-card-root-class-name4"
                  className="home-component2"
                ></PortofolioCard>
              </a>
            </div>
          </div>
        </div>
      </main>
      <div className="home-footer section-container">
        <div className="max-content-container home-max-width2">
          <div className="home-top-part">
            <div className="home-links-container">
              <div className="home-product-container">
                <span className="home-text">Product</span>
                <span className="home-text01">About</span>
                <span className="home-text02">Portofolio</span>
                <span>Blog</span>
              </div>
              <div className="home-navigate-container">
                <span className="home-text04">Navigate</span>
                <span className="home-text05">Copyrights</span>
                <span className="home-text06">Sitemap</span>
                <span>Privacy Policy</span>
              </div>
              <div className="home-contact-container">
                <span className="home-text08">Contact Us</span>
                <span className="home-text09">
                  <span>2157 Village View</span>
                  <br></br>
                  <span>
                    Drive, Old Fort
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    Myers Florida
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>33901</span>
                </span>
              </div>
            </div>
            <div className="home-subscribe-container">
              <span className="home-text17">Subscribe to our newsletter</span>
              <input
                type="text"
                placeholder="Enter your e-mail address"
                className="home-textinput input"
              />
              <button className="button-primary button">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="home-separator"></div>
        <footer className="home-max-width3 max-content-container">
          <div className="home-container15">
            <img
              alt="image"
              src="/playground_assets/logo-getzke-transparent-200h.png"
              className="home-image11"
            />
            <span className="home-text18">
              <span className="home-text19">Getzke All copyrights @2022</span>
              <span className="home-text20"></span>
            </span>
          </div>
          <div className="home-container16 list">
            <a
              href="https://getzke.id/promo/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link13 list-item footer-link"
            >
              <span>Promo</span>
              <span></span>
            </a>
            <a
              href="https://getzke.id/pengembalian_dana_dan_barang/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link14 list-item footer-link"
            >
              <span>Kebijakan Pengembalian Dana dan Barang</span>
            </a>
          </div>
        </footer>
        <span className="home-text24">
          <span className="home-text25">
            Developed by
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text26">
            KoncoWeb /
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text27">M.M. Billy</span>
        </span>
      </div>
    </div>
  )
}

export default Home
