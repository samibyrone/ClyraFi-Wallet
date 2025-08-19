import React from "react";
import Link from "next/link";
import { Button } from "@/component/ui/Button";

export default function CTASection() {
  return (
    <section className='bg-white px-4 py-12 md:px-6 md:py-20 lg:px-8'>
      <div className='mx-auto max-w-6xl items-center rounded-xl border border-gray-300 px-6 py-10 text-center sm:px-8 sm:py-12 md:items-start md:text-left'>
        <h2 className='mb-6 text-3xl font-bold text-black sm:text-4xl md:mb-8 md:text-5xl'>
          We're building ClyariFi in public — with you.
        </h2>
        <p className='mb-8 text-base text-gray-400 sm:text-lg md:text-xl'>
          Join early beta users shaping the future of programmable payment in
          africa. Test early, share feedback, and unlock infrastructure for
          scale.
        </p>
          <Link href='/Auth/signup'>
            <Button
              type='button'
              className='bg-black text-white hover:bg-gray-900 hover:text-gray-200'
            >
              Get started today
            </Button>
          </Link>
      </div>
    </section>
  );
}
