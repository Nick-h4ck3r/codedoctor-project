import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  ben1: string;
  ben2: string;
  right: boolean;
};

function BenefitsCard({ ben1, ben2, right }: Props) {
  return (
    <motion.div
      initial={{ x: -10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className={`benifitsCard flex flex-col rounded-2xl text-white ${
        right ? "ml-[150px] md:ml-[1000px]" : "ml-5 md:ml-64 mb-20 md:mb-0"
      } bg-slate-800/50 w-[250px] md:w-[400px] px-6 py-8 backdrop-blur-xl`}
    >
      <div className="flex space-x-3 pl-1">
        <Image
          src={"/benefitsicon.png"}
          width={25}
          height={25}
          alt={""}
          className="w-5 h-5 md:h-6 md:w-6"
        />
        <p className="text-sm md:text-base">{ben1}</p>
      </div>

      <div className="border-t-gray-800 border-t my-5"></div>
      <div className="flex space-x-3 pl-1">
        <Image
          src={"/benefitsicon.png"}
          width={25}
          height={25}
          alt={""}
          className="w-5 h-5 md:h-6 md:w-6"
        />
        <p className="text-sm md:text-base">{ben2}</p>
      </div>
    </motion.div>
  );
}

export default BenefitsCard;
