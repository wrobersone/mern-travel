import React from 'react'
import Slider from 'react-slick'
import ava1 from '../../assets/images/ava-1.jpg'
import ava2 from '../../assets/images/ava-2.jpg'
import ava3 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        autoplay: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat blanditiis, beatae, vitae enim laboriosam maiores magnam reiciendis rem repudiandae ipsam natus autem odit atque aliquid quas explicabo odio aspernatur ea.</p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img className="w-25 h-25 rounded-2" src={ava1} alt="" />
            <div>
                <h6 className="mb-0 mt-3">John Doe</h6>
                <p>Customer</p>
            </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat blanditiis, beatae, vitae enim laboriosam maiores magnam reiciendis rem repudiandae ipsam natus autem odit atque aliquid quas explicabo odio aspernatur ea.</p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img className="w-25 h-25 rounded-2" src={ava2} alt="" />
            <div>
                <h6 className="mb-0 mt-3">Krystal Doe</h6>
                <p>Customer</p>
            </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat blanditiis, beatae, vitae enim laboriosam maiores magnam reiciendis rem repudiandae ipsam natus autem odit atque aliquid quas explicabo odio aspernatur ea.</p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img className="w-25 h-25 rounded-2" src={ava3} alt="" />
            <div>
                <h6 className="mb-0 mt-3">Mike Doe</h6>
                <p>Customer</p>
            </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat blanditiis, beatae, vitae enim laboriosam maiores magnam reiciendis rem repudiandae ipsam natus autem odit atque aliquid quas explicabo odio aspernatur ea.</p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img className="w-25 h-25 rounded-2" src={ava1} alt="" />
            <div>
                <h6 className="mb-0 mt-3">Nick Doe</h6>
                <p>Customer</p>
            </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat blanditiis, beatae, vitae enim laboriosam maiores magnam reiciendis rem repudiandae ipsam natus autem odit atque aliquid quas explicabo odio aspernatur ea.</p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img className="w-25 h-25 rounded-2" src={ava2} alt="" />
            <div>
                <h6 className="mb-0 mt-3">Michelle Doe</h6>
                <p>Customer</p>
            </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat blanditiis, beatae, vitae enim laboriosam maiores magnam reiciendis rem repudiandae ipsam natus autem odit atque aliquid quas explicabo odio aspernatur ea.</p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img className="w-25 h-25 rounded-2" src={ava3} alt="" />
            <div>
                <h6 className="mb-0 mt-3">Jeremy Doe</h6>
                <p>Customer</p>
            </div>
        </div>
      </div>
    </Slider>
  )
}

export default Testimonials
