import { useEffect, useState } from "react";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="mt-28 md:w-3/4 mx-auto">
      <SectionTitle
        heading={"What Our Client Say"}
        subHeading={"testimonial"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]
        
      } className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center space-y-3">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
            readOnly
              />
              <p>{review.details}</p>
              <h3 className="text-2xl text-[#CD9003]">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
