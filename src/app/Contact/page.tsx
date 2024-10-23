import Image from "next/image";
import background from "../images/contact-img.jpg";

export default function Contact(){
    return (
        <div >
            <div style={{
                zIndex: -1,
                position: "fixed",
                width: "100vw",
                height:"100vh"
              }}>
                    <Image src={background} alt=" background image" layout="fill" objectFit="cover" />   
            </div>

            <h1 className="text-green-900 font-serif font-extrabold text-5xl pl-96 "> contact us</h1>

              <form className="bg-green-700 w-full bg-opacity-40 p-6 rounded shadow-md mt-7  ml-96 max-w-sm">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-xl font-bold  text-white"> Name </label>
                    <input  type="text" id="name" name="name" required placeholder="yourname" className="mt-1 block w-full border-green-600 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500 p-2" />
                    
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-xl pt-2 font-bold text-white"> Email adress </label>
                        <input  type="email" id="email" name="email" required className="mt-1 block w-full border-green-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500 p-2"placeholder="Your email" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-xl font-bold text-white">message</label>
                        <textarea    id="message" name="message" required rows={4} className="mt-1 block w-full border-green-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500 p-2" placeholder="Your message"  />
                    </div>

                    <button type="submit"className="w-24 bg-green-900 text-white font-bold py-2 rounded hover:bg-green-900 w-full bg-opacity-60 "> submit</button>
           

                </div>
              </form>

           
        </div>

    )
}