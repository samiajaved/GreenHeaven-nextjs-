import Image from "next/image";
import background from "../images/benifits-img.jpg";
import image1 from "./Dracaena.jpg"
import image2 from "./chienese money plant.jpg";
import image3 from "./fiddle leaf fig.jpg"
import image4 from "./aoe vera.jpg"

export default function Benifits (){
    return(
        <div>
            <div style={{
        zIndex: -1,
        position: "fixed",
        width: "100vw",
        height:"100vh"
      }}> 
            <Image src={background} alt="background image" className="w-full"/>  
            </div>
      <h1 className="text-green-900 font-serif font-extrabold text-5xl pt-4 pl-96 ">Benifits of plants</h1>

            <div className="pl-96 inline-flex ">
            {/* image1 */}
            <Image src={image1} alt="Dracaena" width={150} className="pt-4"/>
            <div className="w-64 pl-4 pt-4 text-green-900 font-bold">
                <h1 className="pl-10 text-2xl">Dracaena</h1>
                Dracaenas are also one of the best houseplants for purifying the air. According to tests done by NASA, they can remove multiple chemicals from the air, including 
            benzene, formaldehyde, and more</div>
            {/* image2 */}
            <Image src={image2} alt="chinese money plant" width={150} className="pt-4 pl-4"/>
            <div className="w-64 pl-4 pt-4 text-green-900 font-bold">
            <h1 className=" text-2xl">chinese money plant</h1>
            Purifies air and easy to maintain, ideal for beginners and busy plant lovers.
            Symbolizes wealth and prosperity and used to enhance decor.</div>
            </div>

            <div className="pl-96 inline-flex ">
            {/* image3*/}
            <Image src={image3} alt="fiddle leave fig" width={150} className="pt-4" />
            <div className="w-64 pl-4 pt-4 text-green-900 font-bold">   
            <h1 className=" text-2xl">fiddle leave fig</h1>
            A NASA survey found that the Fiddle Leaf Fig can purify the air well enough that it has been considered 
            for use in a space shuttle. The broad leaves of this Ficus houseplant remove chemicals from the air.
            </div>
            {/* image4 */}
            <Image src={image4} alt="aloe vera" width={150} className="pt-4" />
            <div className="w-64 pl-4 pt-4 text-green-900 font-bold">   
            <h1 className=" text-2xl">aloe vera</h1>
            This versatile plant contains antioxidants that boost your immune system, assist in blood 
            sugar regulation, provide hydration, support weight management, reduce inflammation, and more.
            </div>

         

            </div>

            


        </div>
    )
}
