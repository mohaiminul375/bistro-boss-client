import SectionTitle from "../../../SectionTitle/SectionTitle";
import featuredImg from "../../../../assets/home/featured.jpg";
import './Featured.css'
const Featured = () => {
  return (
    <div className="mt-28 bg-fixed featured-item text-white pt-8 my-20">
      <SectionTitle
        heading={"check it out"}
        subHeading={"Featured Item"}
      ></SectionTitle>
      <div className="md:flex items-center bg-slate-500 bg-opacity-60 pt-12 pb-20 px-36">
        <div className="">
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10 space-y-2">
          <p>May 17,2024</p>
          <p className="uppercase">Where can I get Some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            nam quasi. Cupiditate, illum harum? Ea nemo tempora repellat sequi
            harum mollitia expedita, odio autem, quis reprehenderit vitae cumque
            qui nam dolorum porro beatae quisquam, voluptatibus rem quam ipsa
            hic. Minima nihil repudiandae doloremque ut accusamus laborum odio
            tenetur quo rerum.
          </p>
          <button className="btn btn-outline border-0 border-b-4 uppercase">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
