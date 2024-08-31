import config from "@config/config.json";
import Base from "@layouts/Baseof";
import {markdownify} from "@lib/utils/textConverter";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import 'swiper/css';
import 'swiper/css/navigation';

import {Autoplay, Navigation} from 'swiper';
import {getListPage} from "@lib/contentParser";
import {FaInstagram, FaBehance, FaTiktok} from "react-icons/fa";

const Home = ({frontmatter}) => {
  const {banner, feature, services} = frontmatter;
  const {title} = config.site;

  return (
    <Base title={title}>
      {/* Banner */}
      <section id="top" className="section pb-[10px]">
        <div className="container">
          <div className="row flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/3 hidden lg:block">
              <Image
                className="mx-auto"
                src={banner.image}
                width={750}
                height={390}
                alt="banner image"
                priority
              />
            </div>
            <div className="lg:w-2/3">
              <h1 className="font-secondary font-bold text-[38pt]">{banner.title}</h1>
              <h3 className="font-secondary font-bold text-[25pt]">{banner.subtitle}</h3>
              <p className="font-primary mt-4 text-[15pt]">{markdownify(banner.content)}</p>
            </div>
          </div>
        </div>
      </section>
      {/* Features */}
      <section id="services" className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl">{markdownify(feature.name)}</h2>
          </div>
          <div className="mt-2 space-y-6">
            {feature.features.map((item, i) => (
              <div
                key={`feature-${i}`}
                className={`space-y-6 relative flex items-center ${i % 2 !== 0 ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className="w-1/5 flex justify-center items-center relative z-20">
                  <h5
                    className={`font-secondary font-bold text-2xl text-[50px] relative ${i % 2 !== 0 ? 'sm:-left-12' : 'sm:-right-12'}`}>{item.name}</h5>
                </div>
                <div
                  className="w-4/5 p-5 border-2 border-black rounded-xl bg-transparent flex flex-col items-center relative"
                  style={{maxWidth: '800px'}}
                >
                  <div
                    className={`absolute w-full h-32 flex items-center justify-end bg-cover bg-center ${i % 2 !== 0 ? '-top-12 right-6' : '-top-12 left-6'}`}
                    style={{backgroundImage: `url(${item.icon})`, height: '100px', width: 'auto', padding: '0 20px'}}
                  >
                    <h3
                      className="font-secondary font-bold text-xl sm:text-[38px] relative z-20 px-4 sm:px-8 text-center">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-center font-primary text-base text-black sm:text-lg relative z-10">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* services */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="text-[50px] font-secondary">{markdownify(services.title)}</h2>
          </div>
          <div className="mt-8">
            <Swiper
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={1}
            >
              {services.servicesList.map((item, i) => (
                <SwiperSlide key={`feature-${i}`}>
                  <div className="text-center px-8 sm:px-16">
                    <h3 className="text-[40px] font-secondary">{item.title}</h3>
                    <div className="relative flex justify-center items-center my-4">
                      <div className="w-full h-[2px] bg-black"></div>
                      <div className="absolute h-4 w-4 bg-black rounded-full"></div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-lg font-primary">{item.content1}</p>
                      <p className="text-lg font-primary">{item.content2}</p>
                      <p className="text-lg font-primary">{item.content3}</p>
                      <p className="text-lg font-primary">{item.content4}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-button-prev text-black text-[50px]" style={{color: 'black'}}></div>
              <div className="swiper-button-next text-black text-[50px]" style={{color: 'black'}}></div>
            </Swiper>
          </div>
        </div>
      </section>
      {/* Contact */}
      <section id="contact" className="section py-16">
        <div className="container mx-auto">
          {/* Centered Heading */}
          <div className="text-center mb-12 w-2/3 mx-auto">
            <h2 className="text-4xl font-secondary">CONTACT US</h2>
          </div>

          <div className="flex flex-col-reverse lg:flex-row items-start justify-between">
            {/* Left Side: Contact Information */}
            <div className="lg:w-1/3 mt-8 lg:mt-0">
              <div className="mb-6">
                <h3 className="font-bold text-lg">EMAIL</h3>
                <p className="text-lg">INFO@ADOTAGRAPHIC.COM</p>
              </div>
              <div className="mb-6">
                <h3 className="font-bold text-lg">PHONE</h3>
                <p className="text-lg">+961 76 388 160</p>
              </div>
              <div className="mb-6">
                <h3 className="font-bold text-lg">ADDRESS</h3>
                <p className="text-lg">LEBANON, BEIRUT</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">SOCIAL</h3>
                <div className="flex space-x-4 mt-2">
                  <a href="https://www.instagram.com/adotagraphic/" target="_blank" rel="noreferrer"
                     className="text-lg">
              <span
                className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-black text-black">
                <FaInstagram className="h-4 w-4"/>
              </span>
                  </a>
                  <a href="https://www.behance.net/adotagrbyange/" target="_blank" rel="noreferrer" className="text-lg">
              <span
                className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-black text-black">
                <FaBehance className="h-4 w-4"/>
              </span>
                  </a>
                  <a href="https://www.tiktok.com/@adotagraphic?lang=en" target="_blank" rel="noreferrer"
                     className="text-lg">
              <span
                className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-black text-black">
                <FaTiktok className="h-4 w-4"/>
              </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="lg:w-2/3 w-full border-l-2 lg:border-black border-transparent lg:pl-28 lg:ml-20 ">
              <form action="https://formsubmit.co/008bf39b4cffc132aede6daac122347e" method="POST" className="space-y-6">
                <div>
                  <input
                    className="w-full border-2 border-black p-4 mt-2 bg-transparent rounded-lg placeholder-black italic"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="NAME"
                  />
                </div>
                <div>
                  <input
                    className="w-full border-2 border-black p-4 mt-2 bg-transparent rounded-lg placeholder-black italic"
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="PHONE"
                  />
                </div>
                <div>
                  <input
                    className="w-full border-2 border-black p-4 mt-2 bg-transparent rounded-lg placeholder-black italic"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="EMAIL"
                  />
                </div>
                <div>
            <textarea
              className="w-full border-2 border-black p-4 mt-2 bg-transparent rounded-lg placeholder-black italic"
              id="message"
              name="message"
              placeholder="MESSAGE"
              rows="4"
            ></textarea>
                </div>
                <div className="text-left">
                  <button
                    type="submit"
                    className="bg-primary text-black py-3 px-8 rounded-full text-[20px] tracking-widest italic">SUBMIT
                  </button>
                </div>
                <input type="text" name="_honey" style={{display: 'none'}}/>

                <input type="hidden" name="_captcha" value="false"/>

              </form>
            </div>
          </div>
        </div>
      </section>
      <section id="our-work" className="section py-6 relative">
      <div className="container mx-auto">
          <img
            src="images/see-more.png"
            alt="Main Image"
            className="w-full h-auto object-contain"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <a
              href="https://www.behance.net/adotagrbyange/"
              target="_blank"
              rel="noreferrer"
              className="px-10 py-3 text-black border-2 border-black font-bold rounded-full bg-body font-secondary"
            >
              CLICK TO SEE MORE PROJECTS
            </a>
          </div>
        </div>
      </section>
      <section className="section pt-16">
        <div className="container mx-auto">
          <Swiper
            spaceBetween={0}
            slidesPerView={5}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            allowTouchMove={false}
            modules={[Autoplay]}
            className="mySwiper"
            onSwiper={(swiper) => {
              swiper.$wrapperEl[0].style.transitionTimingFunction = "linear";
            }}
          >
            {feature.carousel.concat(feature.carousel).map((item, i) => (
              <SwiperSlide key={`feature-${i}`}>
                <div className="text-center border-t-2 border-b-2 border-t-black border-b-black py-3">
                  <h3 className="text-lg font-normal inline-block italic tracking-widest">
                    {item.title.toUpperCase()}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </Base>
  );
};

export const getStaticProps = async () => {
  const homePage = await getListPage("content/_index.md");
  const {frontmatter} = homePage;
  return {
    props: {
      frontmatter,
    },
  };
};

export default Home;
