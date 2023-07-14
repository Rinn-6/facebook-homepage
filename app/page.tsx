import Image from "next/image";

export default function Home() {
  return (
    <div className=" container text-center mt-5 lg:flex lg:flex-row lg:items-center">
      <div>
        <Image
          className="mx-auto"
          src={"https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"}
          width={320}
          height={100}
          alt="Facebook Logo"
        />
        <h3 className="text-2xl mx-auto text-start w-[45%]">
          Facebook helps you connect and share with the people in your life.
        </h3>
      </div>
      <form className="lg:w-1/2 lg:mt-20">
        <div
          className="w-[50%] bg-white py-2 mt-10 pb-8 flex flex-col text-center 
        mx-auto border rounded-lg shadow space-y-4 "
        >
          <input
            className="inpt"
            type="email"
            placeholder="Mobile number or phone number"
          />
          <input className="inpt" type="password" placeholder="Password" />
          <button className="text-white bg-[#4267b2] mx-4 rounded
           py-3 text-xl font-semibold tracking-wider">
            Log in
          </button>
          <span className="text-sm py-5 text-blue-500 hover:cursor-pointer hover:underline">
            Forgotten password?
          </span>
          <hr className="py-2" />
          <button className="bg-[#42b72a]/90 text-white rounded-lg py-4 px-6  
           font-semibold mx-auto tracking-wider hover:bg-[#42b72a]">
            Create new account
          </button>
        </div>
        <p className="text-center mt-6">
          <span className=" font-semibold  hover:underline">
            Create a page
          </span>{" "}
          for a celebrity, brand or business.
        </p>
      </form>
    </div>
  );
}


  
