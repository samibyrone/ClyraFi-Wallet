import React from "react";
import Link from "next/link";
import { Button } from "@/component/ui/Button";

export default function CTASection() {
  return (
    <section className='bg-white px-4 py-16 md:px-6 md:py-24 lg:px-8'>
      <div className='mx-auto max-w-6xl items-start border border-gray-300 rounded-xl px-8 py-3'>
        <h2 className='mb-8 mt-10 text-3xl w-150 font-bold text-black md:text-4xl lg:text-5xl items-start'>
          We're building ClyariFi in public — with you.
        </h2>
        <p className='mb-8 text-lg text-gray-400 md:text-xl w-170'>
          Join early beta users shaping the future of programmable payment in
          africa. Test early, share feedback, and unlock infrastructure for
          scale.
        </p>
          <Link href='/Auth/signup'>
            <Button
              type='button'
              className='bg-black text-white hover:bg-gray-900 hover:text-gray-200 mb-10'
            >
              Get started today
            </Button>
          </Link>
      </div>
    </section>
  );
}
