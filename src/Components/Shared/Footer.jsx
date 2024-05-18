const Footer = () => {
  return (
    <footer className=" mt-32 text-white font-inter">
      <section className="flex flex-col md:flex-row h-[400px]">
        <div className="bg-[#1F2937] md:w-1/2 flex md:justify-end items-center ">
         <div className="md:mr-36 text-center ">
         <h2 className="text-3xl uppercase mb-6">Contact Us</h2>
          <p className="text-base">
          123 ABS Street, Uni 21, Bangladesh
          </p>
          <p className="text-base">
           +88 123456789 Mon - Fri: 08:00 -
          </p>
          <p className="text-base">
          22:00 Sat - Sun: 10:00 - 23:00
          </p>
         </div>
        </div>
        <div className="bg-[#111827] md:w-1/2 flex md:justify-start items-center">
        <div className="md:ml-36 text-center">
         <h2 className="text-3xl uppercase mb-6">Follow Us</h2>
          <p className="text-base">
          Join us Social media
          </p>
          <p className="text-base">
        
          </p>
       
         </div>
        </div>
      </section>
      <aside className="text-center bg-black py-5">
        <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
      </aside>
    </footer>
  );
};

export default Footer;
