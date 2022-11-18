import Image from "next/image";

interface Props {
    src : string;
    title: string;
    description: string;
};


export const CardProject = ({ src, title, description }:Props) => {
  return (
    <div className="mb-6 flex max-w-[570px] max-h-[271px]  md:max-h-[500px] lg:max-h-[271px] lg:w-[250px] lg:h-[250px] flex-col items-center" >
        {/* <div className="relative w-full h-auto max-h-[178px] max-w-[331px]  sm:h-[220px] sm:w-[570px] sm:max-h-[220px] sm:max-w-[570px] lg:h-[150px] lg:w-[250px] lg:max-h-[150px] lg:max-w-[250px]"> */}
        <div className="image-container">
          <Image src={src} fill  className="image"  alt="project image"/>
        </div>
        
        <div className="w-full mt-4">
            <p className=" text-xl text-center" >{title}</p>
            <p lang="en" className="text-sm  text-center hyphens-auto break-words ">{description}</p>
        </div>
    </div>
  )
}