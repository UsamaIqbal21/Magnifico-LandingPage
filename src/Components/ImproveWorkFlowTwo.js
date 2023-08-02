import React from "react";
import Images from "../Assets/Images";
function ImproveWorkFlowTwo() {
  return (
    <section id="services">
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="md:px-2 lg:px-12 2xl:pl-24">
            <div className="flex flex-col md:flex-row gap-y-12 md:gap-y-0 md:gap-x-3 lg:gap-x-12 2xl:gap-x-20">
              <div className="lg:w-[600px] xl:pt-12">
                <div>
                  <h3
                    className="text-[#0F172A] font-roboto text-4xl font-extrabold leading-110%"
                    data-aos="fade-right"
                  >
                    Improve workflow
                  </h3>
                </div>
                <div className="pt-6 md:pt-4 lg:pt-6">
                  <div
                    className="border rounded-md grid grid-cols-3 items-center "
                    data-aos="fade-right"
                    data-aos-delay="100"
                  >
                    <div className="py-2 hover:bg-[#CBD5E1]">
                      <h3
                        className="text-[#0F172A] font-roboto text-base font-medium leading-[110%] text-center"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      >
                        Research
                      </h3>
                    </div>
                    <div className="py-2 border-l hover:bg-[#CBD5E1]">
                      <h3
                        className="text-[#0F172A] font-roboto text-base font-medium leading-[110%] text-center"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        Plan
                      </h3>
                    </div>
                    <div className="py-2 border-l hover:bg-[#CBD5E1]">
                      <h3
                        className="text-[#0F172A] font-roboto text-base font-medium leading-[110%] text-center"
                        data-aos="fade-up"
                        data-aos-delay="300"
                      >
                        Design
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="pt-6  md:pt-4 lg:pt-6">
                  <p
                    className="text-[#475569] font-roboto text-lg font-normal not-italic leading-[140%]"
                    data-aos="fade-right"
                    data-aos-delay="400"
                  >
                    Egestas fringilla aliquam leo, habitasse arcu varius lorem
                    elit. Neque pellentesque donec et tellus ac varius tortor,
                    bibendum. Nulla felis ac turpis at amet. Purus malesuada
                    placerat arcu at enim elit in accumsan.
                  </p>
                </div>
                <div
                  className="flex item-center justify-start pt-6  md:pt-4 lg:pt-6 hover:cursor-pointer"
                  data-aos="fade-right"
                  data-aos-delay="500"
                >
                  <div>
                    <h5 className="text-[#2563EB] font-roboto text-base font-medium leading-24 tracking-wider">
                      Check The Tools
                    </h5>
                  </div>
                  <div>
                    <img
                      src={Images.arrow2}
                      alt=""
                      width={24}
                      height={24}
                      className="pt-[2px]"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:w-[600px]" data-aos="fade-up">
                <img src={Images.workflow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImproveWorkFlowTwo;
