// import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center md:w-3/12 mx-auto font-inter">
      <p className="text-[#D99904] text-xl italic mb-4">--- {heading} ---</p>
      <h3 className="text-4xl uppercase border-y-4 py-4 mb-12">{subHeading}</h3>
    </div>
  );
};

export default SectionTitle;
