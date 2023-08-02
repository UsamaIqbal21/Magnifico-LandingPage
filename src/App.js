import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Components/Navbar";
import Images from "./Assets/Images";
import EnjoyYourTime from "./Components/EnjoyYourTime";
import ToolsTeamNeed from "./Components/ToolsTeamNeed";
import ImproveWorkFlow from "./Components/ImproveWorkFlow";
import ImproveWorkFlowTwo from "./Components/ImproveWorkFlowTwo";
import Community from "./Components/Community";
import Footer from "./Components/Footer";
function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section id="home">
        <Navbar />
        <div className="py-10 lg:py-20 border-y mt-1 md:mt-6">
          <div className="container mx-auto px-4 ">
            <div className="lg:px-3 2xl:pl-12">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-center space-y-4 md:space-y-0 md:space-x-2 lg:space-x-3 2xl:space-x-7">
                <div className="md:w-[600px] 2xl:pl-2">
                  <div className="md:pt-4 lg:pt-6 xl:pt-10 2xl:pt-12">
                    <h1
                      className="text-blue-gray-900 font-roboto font-extrabold text-4xl md:text-3xl  lg:text-5xl xl:text-6xl  leading-tight text-start"
                      data-aos="fade-right"
                    >
                      Team projects, done well
                    </h1>
                  </div>
                  <div className="pt-4 md:pt-1 lg:pt-4 xl:pt-8 2xl:pt-10">
                    <p
                      className="text-blue-gray-900 font-roboto font-normal text-sm md:text-base lg:text-lg text-start "
                      data-aos="fade-right"
                      data-aos-delay="200"
                    >
                      The only platform that gives your team all the tools
                      needed to work together on their awesome projects.
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row items-start space-y-5 md:space-y-0 md:space-x-3 pt-5 md:pt-2 md:px-2 lg:pt-4 xl:pt-8  2xl:pt-10 pb-4">
                    <div
                      className="relative rounded-lg border border-blue-gray-300 bg-white"
                      data-aos="fade-right"
                      data-aos-delay="500"
                    >
                      <input
                        type="email"
                        placeholder="Enter work email"
                        className=" text-blue-gray-600 font-roboto text-16 font-normal leading-[140%] py-3 pl-8 pr-24 md:pr-0 lg:pr-24"
                      />
                      <div className="absolute top-3 left-1 ">
                        <img
                          src={Images.envelope}
                          alt=""
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                    <div
                      className="rounded-lg border-2 border-blue-600 bg-blue-600 flex  justify-center items-center cursor-pointer"
                      data-aos="fade-right"
                      data-aos-delay="300"
                    >
                      <h3 className="text-white font-inter text-sm font-medium leading-relaxed py-2 px-2">
                        Get started
                      </h3>
                      <img src={Images.arrow} alt="" width={24} height={24} />
                    </div>
                  </div>
                  <div
                    className="rounded-lg bg-[#F1F5F9] "
                    data-aos="fade-right"
                  >
                    <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-center space-y-2 lg:space-y-0  pl-4 lg:pl-1 py-2">
                      <div
                        className="flex items-center justify-start space-x-2"
                        data-aos="fade-right"
                        data-aos-delay="500"
                      >
                        <div>
                          <img
                            src={Images.company1}
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div>
                          <h4 className="text-[#94A3B8] font-roboto text-24 font-bold leading-[110%]">
                            SHELLS
                          </h4>
                        </div>
                      </div>
                      <div
                        className="flex items-center justify-start space-x-2 "
                        data-aos="fade-right"
                        data-aos-delay="400"
                      >
                        <div>
                          <img
                            src={Images.company2}
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div>
                          <h4 className="text-[#94A3B8] font-roboto text-24 font-bold leading-[110%]">
                            SmartFinder
                          </h4>
                        </div>
                      </div>
                      <div
                        className="flex items-center justify-start space-x-2 lg:pl-4"
                        data-aos="fade-right"
                        data-aos-delay="300"
                      >
                        <div>
                          <img
                            src={Images.company3}
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div>
                          <h4 className="text-[#94A3B8] font-roboto text-24 font-bold leading-[110%]">
                            ArtVenue
                          </h4>
                        </div>
                      </div>
                      <div
                        className="flex items-center justify-start space-x-2 lg:pl-4"
                        data-aos="fade-right"
                        data-aos-delay="200"
                      >
                        <div>
                          <img
                            src={Images.company4}
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div>
                          <h4 className="text-[#94A3B8] font-roboto text-24 font-bold leading-[110%]">
                            WAVES
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="md:w-[600px] md:pt-6 lg:pt-0"
                  data-aos="fade-left"
                >
                  <div className="lg:relative md:z-10">
                    <img src={Images.hero} alt="" />
                  </div>
                  <div className="hidden lg:block absolute bottom-0 md:right-[-30px] xl:right-[-50px] w-[30%] h-[30%]">
                    <img src={Images.icons} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <EnjoyYourTime />
      <ToolsTeamNeed/>
      <ImproveWorkFlow/>
      <ImproveWorkFlowTwo/>
      <Community/>
      <Footer/>
    </>
  );
}

export default App;
