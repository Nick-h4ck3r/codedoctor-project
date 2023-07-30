import Image from "next/image";
import React from "react";

type Props = {
  ben1: string;
  ben2: string;
  right: boolean;
};

function BenefitsCard({ ben1, ben2, right }: Props) {
  return (
    <div
      className={`benifitsCard flex flex-col rounded-2xl ${
        right ? "ml-[1000px]" : "ml-64"
      } bg-slate-800/50 w-[400px] px-6 py-8 backdrop-blur-xl`}
    >
      <div className="flex space-x-3 pl-1">
        <Image src={"/benefitsicon.png"} width={25} height={25} alt={""} />
        <p>{ben1}</p>
      </div>

      <div className="border-t-gray-800 border-t my-5"></div>
      <div className="flex space-x-3 pl-1">
        <Image src={"/benefitsicon.png"} width={25} height={25} alt={""} />
        <p>{ben2}</p>
      </div>
    </div>
  );
}

export default BenefitsCard;
