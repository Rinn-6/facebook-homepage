import Image from 'next/image'

export default function Home() {
  return (
   <div className=' w-[60%] mx-auto'>
    <div>
      <Image 
      className='mx-auto'
      src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
      width={320}
      height={100}
      alt='Facebook Logo'
      />
      <h3 className='text-2xl'>Facebook helps you connect and share with the people in your life.</h3>
    </div>
   </div>
  )
}
