import React from "react";
import Images from "../Assets/Images";
function EnjoyYourTime() {
  return (
    <section>
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div>
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-x-4 lg:gap-x-7 2xl:gap-x-11 2xl:pl-32">
              <div className="flex items-center justify-center gap-x-4 md:w-[600px]  ">
                <div className="mt-32 " data-aos="fade-up" ta-aos-delay="100">
                  <img
                    src={Images.pic1}
                    alt=""
                    className="h-[204px] w-[115px] lg:h-[384px] lg:w-[190px]"
                  />
                </div>

                <div data-aos="fade-up" data-aos-delay="300">
                  <img
                    src={Images.pic2}
                    alt=""
                    className="h-[204px] w-[115px] lg:h-[384px] lg:w-[190px]"
                  />
                </div>
                <div className="mt-16" data-aos="fade-up" data-aos-delay="400">
                  <img
                    src={Images.pic3}
                    alt=""
                    className="h-[204px] w-[115px] lg:h-[384px] lg:w-[190px]"
                  />
                </div>
              </div>

              <div className="self-start md:w-[600px] md:pt-12 lg:pt-32">
                <div>
                  <h3
                    className="text-[#0F172A] font-roboto text-4xl font-bold not-italic leading-[140%] text-start"
                    data-aos="fade-up"
                  >
                    Enjoy your time working
                  </h3>
                </div>
                <div className="pt-6">
                  <p
                    className="text-[#0F172A]  font-roboto text-base md:text-lg font-normal not-italic leading-[140%] text-start"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    Etiam condimentum duis molestie malesuada volutpat
                    pellentesque sed. Ornare suspendisse ut ac neque lobortis
                    sed tincidunt. Mi tempus quis massa tellus imperdiet aenean
                    nulla id.
                  </p>
                </div>
                <div
                  className="flex items-center justify-start space-x-2 pt-6  hover:cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div>
                    <h5 className="text-[#2563EB] font-roboto text-base font-medium leading-24 tracking-wider">
                      See how it helped others
                    </h5>
                  </div>
                  <div className="pt-1">
                    <img src={Images.arrow2} alt="" width={24} height={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnjoyYourTime;
