import React from "react";
import Images from "../Assets/Images";
function Community() {
  return (
    <>
      <section id="help" className="bg-gradient-to-r from-purple-900 via-blue-700 to-indigo-900  block md:hidden">
        <div className="py-24">
          <div className="container mx-auto px-4">
            <div>
              <div className="flex flex-col items-center justify-center">
                <div>
                  <h3
                    className="text-white  text-center font-roboto text-4xl font-bold leading-110%"
                    data-aos="fade-up"
                  >
                    Join the community today
                  </h3>
                </div>
                <div className="pt-6">
                  <p
                    className="text-white text-center font-roboto text-base font-normal leading-[140%]"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    Egestas fringilla aliquam leo, habitasse arcu varius lorem
                    elit. Neque pellentesque donec et tellus ac varius tortor,
                    bibendum. Nulla felis ac turpis at amet. Purus malesuada
                    placerat arcu at enim elit in accumsan.
                  </p>
                </div>
                <div className="pt-6">
                  <div
                    className="rounded-lg border-2 w-[263px] border-blue-600 bg-blue-600 flex  py-1 px-2 justify-center items-center cursor-pointer"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <h3 className="text-white font-inter text-sm font-medium leading-relaxed py-2 px-2">
                      Get started
                    </h3>
                    <img src={Images.arrow} alt="" width={24} height={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="help1" className="hidden md:block">
        <div className="py-24 ">
          <div className="container mx-auto md:px-6 lg:px-12 xl:px-28 2xl:px-40">
            <div
              className="bg-gradient-to-r from-purple-900 via-blue-700 to-indigo-900 container mx-auto  rounded-2xl"
              data-aos="fade-up"
            >
              <div className="py-16">
                <div className="flex flex-col  items-center justify-center px-4 ">
                  <div>
                    <h3
                      className="text-white text-center font-roboto text-4xl font-bold leading-[110%]"
                      data-aos="fade-up"
                    >
                      Join the community today
                    </h3>
                  </div>
                  <div className="pt-6">
                    <p
                      className="text-white text-center font-roboto text-base font-normal leading-[140%]"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      Egestas fringilla aliquam leo, habitasse arcu varius lorem
                      elit. Neque pellentesque donec et tellus ac varius tortor,
                      bibendum. Nulla felis ac turpis at amet. Purus malesuada
                      placerat arcu at enim elit in accumsan.
                    </p>
                  </div>
                  <div className="pt-6">
                    <div
                      className="rounded-lg border-2 w-[263px] border-blue-600 bg-blue-600 flex  py-1 px-2 justify-center items-center cursor-pointer"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <h3 className="text-white font-inter text-sm font-medium leading-relaxed py-2 px-2">
                        Get started
                      </h3>
                      <img src={Images.arrow} alt="" width={24} height={24} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Community;
