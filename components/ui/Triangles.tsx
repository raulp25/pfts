import Link from "next/link"

export const SmallTriangles = () => {
    return (
            <Link href={'/'} className="flex flex-row items-center cursor-pointer">
                <div className="triangle3 w-[35px] h-[35px]  -top-[] lg:w-[60px] lg:h-[60px] lg:left-[0px] lg:-top-[0px] rotate-90"></div>            
                <div className="triangle4 w-[17px] h-[17px] -left-[26.25px] -top-[3.5px] rotate-90  lg:w-[30px] lg:h-[30px] lg:-left-[45px] lg:-top-[7px] animate-pulse"></div>            
            </Link>
            )
}

export const BigMainTriangles = () => {
    return (
            <>
                <div className="triangle -top-[60px] lg:ml-[1px] rotate-90"></div>            
                <div className="triangle2  -top-[190px] rotate-90 animate-pulse"></div>     
            </>
            
            )
}

export const SmallMainTriangles = () => {
    return <>
                <div className="triangle5 -top-[30px] lg:ml-[1px] rotate-90"></div>
                <div className="triangle6  -top-[95px]  rotate-90 animate-pulse"></div>
            </>
}