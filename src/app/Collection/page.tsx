import Image from "next/image";
// indoor plants
import header from "./header.jpeg";
import image1 from "./aloevera.jpeg";
import image2 from "./fiddle-leave-fig.jpeg";
import image3 from "./rubber-plant.jpeg";
import image4 from "./darecean.jpeg";
import image5 from "./chinese money-plant.jpeg";
import image6 from "./croton.jpeg";
import image7 from "./peporomia.jpeg";
import image8 from "./ferns.jpeg";
import image9 from "./snake-plant.jpeg";

// out door plants
import image10 from "./outdoor/agave.jpeg"
import image11 from "./outdoor/begonia.jpeg"
import image12 from "./outdoor/grasses.jpeg"
import image13 from "./outdoor/coral-bells.jpeg"
import image14 from "./outdoor/dahlia-flower.jpeg"
import image15 from "./outdoor/daphne-plant.jpeg"
import image16 from "./outdoor/herbs.jpeg"
import image17 from "./outdoor/levender.jpeg"
import image18 from "./outdoor/hydrangea.jpeg"
import image19 from  "./outdoor/nesturtium.jpeg"


export default function collection(){
    return(
            <div>
                <Image src={header} alt="header" className="w-auto"/>
                {/* indoor plants */}
             
              <h1  className="text-green-900 font-serif font-extrabold text-5xl pt-4 pl-96 ml-32">indoor plants</h1>

              <div className="inline-flex"> 
                <Image src={image1} alt="aloevera" className="w-80 p-4" />
                <Image src={image2} alt="fiddle leave fig" className="w-80 p-4" />
                <Image src={image3} alt="rubber plant" className="w-96  p-4" />
                <Image src={image4} alt="darecean" className="w-80  p-4" />
              </div>

              <div className="inline-flex">
              <Image src={image5} alt="chinese money plant" className="w-80 p-4" />
              <Image src={image6} alt="croton" className="w-1/2 p-4" />
              <Image src={image7} alt="peporomia" className="w-80 p-4 " />
              </div>

              <div className="inline-flex">
                <Image src={image8} alt="ferns" className="w-1/2 pt-4 pl-8" />
                <Image src={image9} alt="sanke palnt" className="w-1/2 pt-4 pl-8" />
              </div>

              {/* out door plants */}

              <h1  className="text-green-900 font-serif font-extrabold text-5xl pt-4 pl-96 ml-32">outdoor plants</h1>

              <div  className="inline-flex">
                <Image src={image10} alt="agave plant" className="w-96 ml-32 p-8" />
                <Image src={image11} alt="begonia plant" className="w-96 p-8" />
                <Image src={image12} alt="grasses" className="w-96 p-8  " />
              </div>

              <div  className="inline-flex">
                <Image src={image13} alt="coral bells" className="p-8 w-1/2" />
                <Image src={image14} alt="dahlia flower" className="p-8 w-1/2" />
              </div>

              <div  className="inline-flex">
                <Image src={image15} alt="daphne plants" className="p-8 w-1/2" />
                <Image src={image16} alt="herbs" className="p-8 w-1/2" />
              </div>

              <div  className="inline-flex">
              <Image src={image17} alt="levender" className="p-4 w-96" />
              <Image src={image18} alt="hydrangea" className="p-4  w-96" />
              <Image src={image19} alt="nesturtium" className="p-4 h-96 w-1/2" />
              </div>


        </div>
    )
}