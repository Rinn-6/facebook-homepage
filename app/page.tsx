import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center xl:flex xl:flex-row xl:items-center">
      <div>
        <Image
          className="mx-auto"
          src={"https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"}
          width={320}
          height={100}
          alt="Facebook Logo"
        />
        <h3 className="text-xl mx-auto text-start w-1/2">
          Facebook helps you connect and share with the people in your life.
        </h3>
      </div>
      <form className="xl:w-1/2 xl:mt-20">
        <div
          className="w-[60%] bg-white py-2 mt-10 pb-8 flex flex-col text-center 
        mx-auto border rounded-lg shadow space-y-3 "
        >
          <input
            className="inpt"
            type="email"
            placeholder="Mobile number or phone number"
          />
          <input className="inpt" type="password" placeholder="Password" />
          <button className="text-white bg-[#4267b2] mx-4 rounded
           py-3 text-lg font-semibold tracking-wide">
            Log in
          </button>
          <span className="text-sm text-blue-500 hover:cursor-pointer hover:underline">
            Forgotten password?
          </span>
          <hr className="py-2" />
          <button className="bg-[#42b72a]/90 text-white rounded-lg py-4 px-8 text-sm 
           font-semibold mx-auto tracking-wider hover:bg-[#42b72a]">
            Create new account
          </button>
        </div>
        <p className="text-center text-sm mt-6">
          <span className=" font-semibold text-sm hover:underline">
            Create a page
          </span>{" "}
          for a celebrity, brand or business.
        </p>
      </form>
    </div>
  );
}


  
