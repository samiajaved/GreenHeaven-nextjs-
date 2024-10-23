import Image from "next/image";
import background from "../images/about-img.jpg";

export default function about(){
    return(
        <div>
            <div style={{
                zIndex: -1,
                position: "fixed",
                width: "100vw",
                height:"100vh"
            }}> 
            <Image src={background} alt=" background image" layout="fill" objectFit="cover"/>   
            </div>

            <h1 className="text-green-900 font-serif font-extrabold text-4xl pt-5 pl-96">Welcome to GreenHeaven</h1>

            <h2 className="text-green-900 font-serif font-extrabold text-3xl pl-5">Our story</h2>
            <p className="text-green-900 font-1xl pl-5 ">At Green Heaven, our passion for plants blossomed from humble beginnings. It all started with <br />a single succulent on a windowsill, a reminder of the beauty of nature in our busy lives.<br /> As we nurtured that little plant, we discovered the joy and tranquility that comes from caring for greenery.<br /> Each new addition to our collection brought a sense of wonder, transforming our space into a lush sanctuary.<br /> This journey ignited a deep appreciation for the diverse world of flora, inspiring us to share our love of plants with others. </p>

            <h2 className="text-green-900 font-serif font-extrabold text-3xl pl-5 pt-5">Our aim</h2>
            <p className="text-green-900 font-1xl pl-5">At <span className="font-bold">GreenHeaven</span>, 
            our aim is to cultivate a deeper connection between people and plants. We believe that <br />
             everyone can experience the joy and tranquility that comes from nurturing greenery, regardless of their <br />
             space or experience level. Our mission is to provide accessible resources, inspiration, and support to <br />
             help you embark on your own plant journey. Whether you're a seasoned gardener or just starting out, <br />
             we strive to create a community where knowledge is shared, and the beauty of nature is celebrated. Together, <br /> 
             we can transform our environments into vibrant, living spaces that promote well-being and sustainability. 
            </p>

            <h2 className="text-green-900 font-serif font-extrabold text-3xl pl-5 pt-5">join us</h2>
            <p className="text-green-900 font-1xl pl-5">Join us as we explore the magic and benefits of cultivating nature in our everyday lives!</p>
         

        </div>
    )
}