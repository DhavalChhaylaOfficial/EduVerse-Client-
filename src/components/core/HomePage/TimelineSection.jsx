import React from "react";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import TimelineImage from "../../../assets/Images/teacher4.jpeg";

import { motion } from "framer-motion";
import { fadeIn } from "../../common/motionFrameVarients";

const timeline = [
  {
    logo: Logo1,
    heading: "Leadership",
    description: "Fully committed to the success company",
  },
  {
    logo: Logo2,
    heading: "Responsibility",
    description: "Students will always be our top priority",
  },
  {
    logo: Logo3,
    heading: "Flexibility",
    description: "The ability to switch is an important skills",
  },
  {
    logo: Logo4,
    heading: "Solve the problem",
    description: "Code your way to a solution",
  },
];

const TimelineSection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-20 items-center mb-20">
      {/* Left Section */}
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="lg:w-[45%] flex flex-col gap-14 lg:gap-3"
      >
        {timeline.map((element, index) => {
          return (
            <div key={index} className="flex flex-col gap-3">
              <div className="flex flex-row gap-6">
                <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-white shadow-[#00000012] shadow-[0_0_62px_0]">
                  <img src={element.logo} alt="" />
                </div>

                <div>
                  <h2 className="font-semibold text-[18px]">
                    {element.heading}
                  </h2>
                  <p>{element.description}</p>
                </div>
              </div>
              {index !== timeline.length - 1 ? (
                <div className="hidden lg:block w-[26px] h-14 border-r border-richblack-100 border-dotted "></div>
              ) : (
                <div></div>
              )}
            </div>
          );
        })}
      </motion.div>

      {/* Right Section */}
      <motion.div
        // Keeps horizontal motion (from left to right)
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="relative w-fit h-fit transition-all duration-200 shadow-[0_0_100px_0px] shadow-blue-200 rounded-3xl"
      >
        <motion.img
          className="h-[250px] lg:h-[600px] mx-auto rounded-3xl"
          src={TimelineImage}
          alt="TimelineImage"
          variants={fadeIn("left", 0.1)} // Slight delay for smoother transition
        />

        {/* <div className="absolute bg-caribbeangreen-700 py-5 lg:py-10 flex flex-col lg:flex-row text-white justify-center lg:left-[50%] lg:translate-x-[-50%] top-0 lg:top-full lg:translate-y-[-50%] uppercase gap-4 lg:gap-0 rounded-3xl">
          <div className="flex gap-5 items-center lg:border-r border-caribbeangreen-300 px-7 lg:px-14">
            <div className="text-3xl font-bold w-[75px]">10</div>
            <div className="text-caribbeangreen-300 text-sm w-[75px]">
              Years Experiences
            </div>
          </div>

          <div className="flex gap-5 items-center px-7 lg:px-14">
            <div className="text-3xl font-bold w-[75px]">250</div>
            <div className="text-caribbeangreen-300 text-sm w-[75px]">
              Types of courses
            </div>
          </div>
        </div> */}
      </motion.div>
    </div>
  );
};

export default TimelineSection;
