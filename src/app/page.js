import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white flex justify-center flex-col items-center h-[47vh] space-y-2">
      
      <div className="text-3xl font-bold">  Buy me a Tea </div>
      <p>
        A crowdfunding platform for tea lovers. Get funded by tea lover people.Start now
      </p>

      <div>

    <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-2xl">Start Now</button>



      </div>
      
    </div>
  );
}
