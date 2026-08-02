import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 ">
        <Image
          src="/images/About.jpeg"
          alt="About Image"
          width={500}
          height={500}
        />
        <div>
          <h2 className="">About Meeeeee</h2>
          <p className="">
            I am a passionate developer with experience in creating modern web applications. I specialize in React, Node.js, and cloud technologies. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus blanditiis atque non quisquam cum laboriosam commodi totam? Accusamus eaque, sed nihil, iure quaerat deserunt, beatae aliquid magni cumque excepturi numquam. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
