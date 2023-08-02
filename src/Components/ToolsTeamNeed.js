import React from "react";
import Images from "../Assets/Images";
function ToolsTeamNeed() {
  return (
    <section>
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-y-6 md:gap-y-0 md:gap-x-4 ">
              <div className="md:w-[660px] lg:pl-12">
                <div>
                  <h3 className="text-[#0F172A] font-roboto text-3xl lg:text-5xl font-extrabold leading-[110%]" data-aos="fade-right"
                  >
                    Get all the tools your <br /> team needs
                  </h3>
                </div>
                <div className="pt-6">
                  <p className="text-[#475569] font-roboto text-lg font-normal not-italic leading-[140%]"  data-aos="fade-right"
                  data-aos-delay="100">
                    Egestas fringilla aliquam leo, habitasse arcu varius lorem
                    elit. Neque pellentesque donec et tellus ac varius tortor,
                    bibendum. Nulla felis ac turpis at amet. Purus malesuada
                    placerat arcu at enim elit in accumsan.
                  </p>
                </div>
                <div className="flex item-center justify-start pt-6" data-aos="fade-right"
                  data-aos-delay="200">
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
              <div className="md:w-[660px]" data-aos="fade-up">
                <img src={Images.radar} alt="" className="ml-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ToolsTeamNeed;
