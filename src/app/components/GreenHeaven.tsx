import Link from "next/link";

export default function GreenHeaven (){
    return(
        <div className="flex flex-col  justify-center h-16 bg-green-800 ">
			<nav className="my-16 text-white ">
                <ul className="flex  justify-center gap-4  bg-green-800 ">
                    <p className="text-white font-mono text-2xl mr-96 font-extrabold ">GreenHeaven</p>
                    <li className="text-green-500 ml-96"> <Link href="/home">Home</Link></li>
                    <li className=" hover:text-green-500"> <Link href="About">About</Link></li>
                    <li className=" hover:text-green-500"><Link href="Collection">Collection</Link></li>
                    <li className=" hover:text-green-500"><Link href="Benifits">Benifits</Link></li>
                    <li className=" hover:text-green-500"><Link href="Contact ">Contact us</Link></li>
                </ul>
            </nav>
        </div>
    )
}