import React, { useRef, useCallback } from 'react'
import "./scss/testimonial.css";
import star from "../../images/testimonial_star.svg"
import { reviewCard } from "../../Constants/data"
import reviewStar from "../../images/review_star.svg"

import { IoIosArrowForward } from "react-icons/io"
import { IoIosArrowBack } from "react-icons/io"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Container } from 'react-bootstrap';

const ReviewCard = ({ review: { userImg, name, designation, para } }) => (
  <div className="review__card">
    <div className="card__top">

      <div className="img-name">
        <div className="review__img">
          <img src={userImg} alt="image" />
        </div>

        <div className="review__person-info">
          <p className="review__name">{name}</p>
          <p className="review__designation">{designation}</p>
        </div>
      </div>

      <div className="review__star">
        <img src={reviewStar} alt="star" />
        <img src={reviewStar} alt="star" />
        <img src={reviewStar} alt="star" />
        <img src={reviewStar} alt="star" />
      </div>

    </div>

    <div className="card__bottom">
      <p className='review__para'>{para}</p>
    </div>
  </div>
)

const Testimonial = () => {

  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);


  return (
    <Container>
    <section className="testimonial__section">

      <div className="testimonial-heading">
        <p className="section__heading">Lorem ipsum dolor sit .</p>
      </div>

      <div className="testimonial__container">

        <div className="outer__container-info">
          <img className='testimonial__logo' src={star} alt="start logo" />
          <p className='testimonial__heading'>Lorem ipsum dolor sit .</p>
        </div>


        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          ref={sliderRef}
          className="mySwiper"
          breakpoints= {{
              0: {
                  slidesPerView: 1,
              },
              768: {
                  slidesPerView: 2,
              },
              1024: {
                  slidesPerView: 2,
                },
              1440: {
                slidesPerView: 3,
              }
         
          }}

        >
          <div className="review__container">

            {reviewCard.map((review, index) =>
              <SwiperSlide>
                <ReviewCard review={review} key={`review_name-${index + 1}`}
                />
              </SwiperSlide>
            )}

          </div>
        </Swiper>
        <div className="left-arrow" onClick={handlePrev}>
          <IoIosArrowBack className='arrow' />
        </div>
        <div className="carousel__arrow" onClick={handleNext}>
          <IoIosArrowForward className='arrow' />
        </div>

      </div>

    </section>
    </Container>
  )
}

export default Testimonial
