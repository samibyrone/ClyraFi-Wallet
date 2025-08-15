export default function Proposition() {
  return (
    <section className='px-4 py-12 md:px-6 md:py-20 lg:px-8'>
      <div className='mx-auto max-w-6xl'>
        <div className='flex flex-col items-center text-center md:text-left md:ml-20 md:mt-20'>
          <h2 className='mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:mb-10 md:text-5xl'>
            You control the logic, we handle the rails.
          </h2>
          <p className='mb-10 text-lg text-gray-600 sm:text-xl md:mb-15 md:text-center font-semibold'>
            Whether you`re running a fintech, a payroll tool, or a loan
            platform, you can launch wallets, disburs funds, and track every
            transaction programmatically.
          </p>
        </div>
        <div className='grid items-center lg:grid-cols-2'>
          <div className='flex justify-center'>
            <div className='h-96 w-full max-w-lg rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200'></div>
          </div>
          <div className='mt-10 md:mt-0 md:ml-10'>
            <div className='rounded-2xl'>
              <h3 className='mb-4 text-3xl font-semibold leading-relaxed text-gray-900'>
                ClyariFi is a Wallet-as-a-Service platform that lets you create,
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
