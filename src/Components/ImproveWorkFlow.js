import React from "react";
import bg from "../Assets/Images/bg.jpg";
import Images from "../Assets/Images";
function ImproveWorkFlow() {
  return (
    <>
      <section id="solutions"
        className="bg-cover bg-center block md:hidden"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(88, 28, 135, 0.75) 0%, rgba(88, 28, 135, 0.75) 100%),url(${bg})`,
        }}
      >
        <div className="py-24">
          <div className="container mx-auto px-4">
            <div>
              <div>
                <div>
                  <h3
                    className="text-white font-roboto text-4xl font-bold leading-[110%]"
                    data-aos="fade-up"
                  >
                    Problems come and get solved with ease
                  </h3>
                </div>
                <div className="pt-6">
                  <p
                    className="text-white font-roboto text-base font-normal leading-[140%]"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    Egestas fringilla aliquam leo, habitasse arcu varius lorem
                    elit. Neque pellentesque donec et tellus ac varius tortor,
                    bibendum. Nulla felis ac turpis at amet. Purus malesuada
                    placerat arcu at enim elit in accumsan.
                  </p>
                </div>
                <div
                  className="flex items-center justify-start space-x-2 pt-6 "
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div>
                    <h5 className="text-[#fff] font-roboto text-base font-medium leading-24 tracking-wider">
                      Improve workflow
                    </h5>
                  </div>
                  <div className="pt-1">
                    <img src={Images.arrow} alt="" width={24} height={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="solutions1" className="hidden md:block">
        <div className="py-24 ">
          <div className="container mx-auto md:px-6 lg:px-12 xl:px-28 2xl:px-40">
            <div
              className="bg-cover bg-center container mx-auto  rounded-2xl"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(88, 28, 135, 0.75) 0%, rgba(88, 28, 135, 0.75) 100%),url(${bg})`,
              }}
              data-aos="fade-up"
            >
              <div className="py-16">
                <div className="flex  items-center justify-between px-4 gap-x-0">
                  <div className="w-[520px]"></div>
                  <div className="w-[520px]">
                    <div>
                      <h3
                        className="text-white font-roboto text-4xl font-bold leading-[110%]"
                        data-aos="fade-up"
                      >
                        Problems come and get solved with ease
                      </h3>
                    </div>
                    <div className="pt-6">
                      <p
                        className="text-white font-roboto text-base font-normal leading-[140%]"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      >
                        Egestas fringilla aliquam leo, habitasse arcu varius
                        lorem elit. Neque pellentesque donec et tellus ac varius
                        tortor, bibendum. Nulla felis ac turpis at amet. Purus
                        malesuada placerat arcu at enim elit in accumsan.
                      </p>
                    </div>
                    <div
                      className="flex items-center justify-start space-x-2 pt-6  hover:cursor-pointer"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <div>
                        <h5 className="text-[#fff] font-roboto text-base font-medium leading-24 tracking-wider">
                          Improve workflow
                        </h5>
                      </div>
                      <div className="pt-1">
                        <img src={Images.arrow} alt="" width={24} height={24} />
                      </div>
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

export default ImproveWorkFlow;
