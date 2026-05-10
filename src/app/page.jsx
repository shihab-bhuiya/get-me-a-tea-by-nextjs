import Image from "next/image";
import deskImage from "@/app/assets/desk.jpg"
export default function Home() {
  return (
    <> 
    <div className="text-white gap-4 flex justify-center flex-col items-center h-[47vh] space-y-2">
      
      <div className="text-3xl font-bold">  Buy me a Tea </div>
      <p>
        A crowdfunding platform for tea lovers. Get funded by tea lover people.Start now
      </p>

      <div className="">

    <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-2xl me-2 mb-2">Start Now</button>

 <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-2xl me-2 mb-2">Read More</button>

      </div>
      
    </div>
    <div className="bg-white h-1 opacity-10">
      sadjk
    </div>
    <div className="container mx-auto text-white p-16">
      <h2 className="text-center text-3xl font-bold mb-4">Your Fan can buy you a Tea </h2>
      <div className="flex gapp-4 justify-around px-14 m-10">
        <div className="items-center space-y-3 flex flex-col justify-center"> 
        <Image src={deskImage} height={60} width={60} className="rounded-2xl" alt="" />
        <p>Funding for fans</p>
        <p>Your fans are available for your help</p>

        </div>
        <div className="items-center space-y-3 flex flex-col justify-center"> 
        <Image src={deskImage} height={60} width={60} className="rounded-2xl" alt="" />
        <p>Funding for fans</p>
        <p>Your fans are available for your help</p>
        </div><div className="items-center space-y-3 flex flex-col justify-center"> 
        <Image src={deskImage} height={60} width={60} className="rounded-2xl" alt="" />
        <p>Funding for fans</p>
        <p>Your fans are available for your help</p>

        </div>
        

      </div>

    </div>

    </>
  );
}
