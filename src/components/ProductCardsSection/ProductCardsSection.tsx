import './ProductCardsSection.scss';
import React, { ReactElement, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Link } from 'react-router-dom';
import Card from '@/components/Card/Card';
import imagePath from '@/assets/images/png/card-product-image-example.png';
import { IPropsCardsSection } from '@/types/interfaces';
import arrowRightPath from '@/assets/images/svg/arrow-ahead.svg';
import arrowLeftPath from '@/assets/images/svg/arrow-back.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

const ProductCardsSection = ({ header, counter }: IPropsCardsSection): ReactElement => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="_container cardsSection">
      <div className="cardsSection__header-container">
        <h2 className="_heading">
          {header}
          <sup className="cardsSection__counter">{counter}</sup>
        </h2>
        <Link className="textButton" to="/catalog">
          ⟶ Смотреть все
        </Link>
      </div>
      <div className="cardsSection__cards-container">
        <button className="arrow arrow--prev">
          <img src={arrowLeftPath} ref={prevRef} alt="Shevron Left" />
        </button>
        <Swiper
          modules={[Navigation]}
          loop={true}
          slidesPerView={4}
          navigation={{
            prevEl: '.arrow--prev',
            nextEl: '.arrow--next',
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            567: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 2.5,
            },
            1023: {
              slidesPerView: 3,
            },
            1279: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <Card
              imagePath={imagePath}
              rating={4.8}
              text="1Кислородный концентратор JAY-10 двухпоточный"
              price={81938}
              priceBefore={85348}
              bonus={450}
              discount={10}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              imagePath={imagePath}
              rating={4.8}
              text="1Кислородный концентратор JAY-10 двухпоточный"
              price={81938}
              priceBefore={85348}
              bonus={450}
              discount={10}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              imagePath={imagePath}
              rating={4.8}
              text="1Кислородный концентратор JAY-10 двухпоточный"
              price={81938}
              priceBefore={85348}
              bonus={450}
              discount={10}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              imagePath={imagePath}
              rating={4.8}
              text="1Кислородный концентратор JAY-10 двухпоточный"
              price={81938}
              priceBefore={85348}
              bonus={450}
              discount={10}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              imagePath={imagePath}
              rating={4.8}
              text="1Кислородный концентратор JAY-10 двухпоточный"
              price={81938}
              priceBefore={85348}
              bonus={450}
              discount={10}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              imagePath={imagePath}
              rating={4.8}
              text="1Кислородный концентратор JAY-10 двухпоточный"
              price={81938}
              priceBefore={85348}
              bonus={450}
              discount={10}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              imagePath={imagePath}
              rating={4.8}
              text="1Кислородный концентратор JAY-10 двухпоточный"
              price={81938}
              priceBefore={85348}
              bonus={450}
              discount={10}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              imagePath={imagePath}
              rating={4.8}
              text="1Кислородный концентратор JAY-10 двухпоточный"
              price={81938}
              priceBefore={85348}
              bonus={450}
              discount={10}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              imagePath={imagePath}
              rating={4.8}
              text="1Кислородный концентратор JAY-10 двухпоточный"
              price={81938}
              priceBefore={85348}
              bonus={450}
              discount={10}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              imagePath={imagePath}
              rating={4.8}
              text="1Кислородный концентратор JAY-10 двухпоточный"
              price={81938}
              priceBefore={85348}
              bonus={450}
              discount={10}
            />
          </SwiperSlide>
        </Swiper>
        <button ref={nextRef} className="arrow arrow--next">
          <img src={arrowRightPath} alt="Shevron Right" />
        </button>
      </div>
    </section>
  );
};

export default ProductCardsSection;
