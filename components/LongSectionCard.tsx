import React from "react";
import { motion } from "framer-motion";

type Props = {
  heading: string;
  content: Array<string>;
};

function LongSectionCard({ heading, content }: Props) {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="flex flex-col items-start text-left bg-slate-800/50 backdrop-blur-xl rounded-3xl pl-8 pr-24 py-10 font-urbanist text-white max-w-sm md:max-w-[900px]"
    >
      <p className="bg-gradient-to-r from-[#4e4be4] to-[#e862fe] bg-clip-text text-transparent text-3xl font-semibold max-w-lg">
        {heading}
      </p>
      <p className="text-base font-light mt-6 mb-10">
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </p>
      {/* <button className="bg-[#4F4CE5] rounded-full mt-14 px-4 py-3 text-sm uppercase font-semibold">comming soon</button> */}
    </motion.div>
  );
}

export default LongSectionCard;
