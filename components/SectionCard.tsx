import React from "react";
import { motion } from "framer-motion";

type Props = {
  heading: string;
  content: string;
};

function SectionCard({ heading, content }: Props) {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="flex flex-col items-start text-left bg-slate-800/50 backdrop-blur-xl rounded-3xl pl-8 pr-12 py-10 font-urbanist text-white max-w-sm md:max-w-[550px]"
    >
      <p className="bg-gradient-to-r from-[#4e4be4] to-[#e862fe] bg-clip-text text-transparent text-4xl font-medium">
        {heading}
      </p>
      <p className="text-base font-light mt-6">{content}</p>
      <button className="bg-[#4F4CE5] rounded-full mt-14 px-4 py-3 text-sm uppercase font-semibold">
        comming soon
      </button>
    </motion.div>
  );
}

export default SectionCard;
