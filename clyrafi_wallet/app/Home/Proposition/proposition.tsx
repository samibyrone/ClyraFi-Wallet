import Image from "next/image";
import pics from "@/public/sample-pics.png";

export default function Proposition() {
  return (
    <section className='px-4 py-12 sm:py-20 md:px-6 md:py-28 lg:px-8'>
      <div className='mx-auto max-w-6xl'>
        <div className='items-center text-center sm:text-left sm:ml-0 sm:mt-10 md:ml-20 md:mt-20'>
          <h2 className='mb-6 sm:mb-10 text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-gray-900'>
            You control the logic, we handle the rails.
          </h2>
          <p className='mb-8 sm:mb-15 text-lg sm:text-xl text-gray-600 items-center w-full sm:w-230 mx-auto sm:mx-0 text-center sm:text-center font-semibold max-w-4xl'>
            Whether you’re running a fintech, a payroll tool, or a loan platform, — you can launch wallets, disburse funds, and track every transaction programmatically.
          </p>
        </div>
        <div className='grid items-center lg:grid-cols-2 gap-8 sm:gap-0'>
           <div className="flex justify-center">
              <Image src={pics} alt="image" className="h-64 sm:h-120 w-full max-w-xs sm:max-w-lg rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-sm" />
            </div>
          <div className='h-auto sm:h-120 w-full sm:w-108 mt-0 sm:mt-15 ml-0 sm:ml-10 items-center'>
            <div className='rounded-2xl'>
              <h3 className='mb-4 sm:mb-5 mt-4 sm:mt-5 text-2xl sm:text-3xl font-semibold leading-relaxed text-gray-900'>
                ClyraFi is a Wallet-as-a-Service platform that lets you create,
                manage, and control wallets across both fiat and blockchain
                rails, using powerful APIs.
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                Whether you’re running a fintech, a payroll tool, or a loan
                platform, — you can launch wallets, disburse funds, and track
                every transaction programmatically
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
