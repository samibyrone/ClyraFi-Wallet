import React from "react";
import Link from "next/link";
import { Button } from "@/component/ui/Button";

export default function CTASection() {
  return (
    <section className='bg-white px-4 py-16 md:px-6 md:py-24 lg:px-8'>
      <div className='mx-auto max-w-4xl text-center'>
        <h2 className='mb-6 text-3xl font-bold text-black md:text-4xl lg:text-5xl'>
          We're building ClyariFi in public — with you.
        </h2>
        <p className='mb-8 text-lg text-purple-100 md:text-xl'>
          Join early beta users shaping the future of programmable payment in
          africa. Test early, share feedback, and unlock infrastructure for
          scale.
        </p>
          <Link href='/signup'>
            <Button
              type='button'
              className='bg-red text-gray-500 hover:bg-gray-900 hover:text-white'
            >
              Get started today
            </Button>
          </Link>
      </div>
    </section>
  );
}
