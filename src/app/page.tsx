import Image from "next/image"
import background from "./images/home-img.jpg"

export default function Home (){
  return(
    <div>
      <div style={{
        zIndex: -1,
        position: "fixed",
        width: "100vw",
        height:"100vh"
      }}>

        <Image src={background} alt="background image" layout="fill" objectFit="cover" />
      </div>
      <h1 className="text-green-900 font-serif font-extrabold text-5xl pt-44 pl-32 ">live closer to the<br/> <span>nature</span></h1>
      <p className="text-green-900 font-1xl w-96 pl-32  ">Living closer to nature offers a profound sense of peace and connection that can rejuvenate both the mind and spirit. 
            By surrounding ourselves with greenery, fresh air, and the sounds of wildlife, we cultivate a deeper appreciation for the natural 
            world.
      </p>
    </div>
  )
}
