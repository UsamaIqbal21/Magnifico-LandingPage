import React from 'react'

function Footer() {
  return (
   <section>
    <div className='py-24'>
     <div className='container mx-auto px-4'>
       <div className='lg:px-20 xl:px-24 2xl:px-28'>
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between'>
          <div className='flex flex-col items-start md:items-center justify-center md:flex-row gap-y-2 md:gap-y-0 md:space-x-2'>
          <div >
              <a href="#home">
                <h3 className="text-blue-gray-900 font-roboto text-base lg:text-3xl font-bold leading-[110%]"      data-aos="fade-right"
                 >
                  Magnifico
                </h3>
              </a>
            </div>
            <div className='lg:pt-2'>
                <h3 className='text-[#475569] font-roboto text-base not-italic font-normal leading-[140%]'      data-aos="fade-right" data-aos-delay="100" 
                  >@ 2023. All rights reserved.</h3>
            </div>
          </div>
          <div>
          <div className='pt-6 md:pt-0'>
              <div className=" flex items-center space-x-6 md:space-x-3 lg:space-x-6">
                <a
                  href="#"
                  className="text-[#475569] font-roboto text-base font-normal leading-140%
                   transition ease-in-out delay-150 hover:-translate-y-1 "      data-aos="fade-left"
                   
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="text-[#475569] font-roboto text-base font-normal leading-140%
                    transition ease-in-out delay-150 hover:-translate-y-1"      data-aos="fade-left"
                    data-aos-delay="100"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="text-[#475569] font-roboto text-base font-normal leading-140%
                    transition ease-in-out delay-150 hover:-translate-y-1"      data-aos="fade-left"
                    data-aos-delay="200"
                >
                  Support
                </a>
                <a
                  href="#"
                  className="text-[#475569] font-roboto text-base font-normal leading-140%
                     transition ease-in-out delay-150 hover:-translate-y-1"      data-aos="fade-left"
                     data-aos-delay="300"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-[#475569] font-roboto text-base font-normal leading-140% md:block hidden
                     transition ease-in-out delay-150 hover:-translate-y-1"      data-aos="fade-left"
                     data-aos-delay="400"
                >
                  Resources
                </a>
                <a
                  href="#"
                  className="text-[#475569] font-roboto text-base font-normal leading-140%
                     transition ease-in-out delay-150 hover:-translate-y-1"      data-aos="fade-left"
                     data-aos-delay="500"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
       </div>
     </div>
    </div>
   </section>
  )
}

export default Footer;
