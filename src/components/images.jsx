import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Image from "next/image";

const Images = ({ children, client, className }) => {
  return (
    <div className={className}>
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              <p className="before:content-[''] after:content-[''] sm:before:absolute sm:before:right-full">
                {children}
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <Image src={client.logo} alt={client.name} style={{ borderRadius: "6px" }} unoptimized />
            </figcaption>
          </figure>
        </FadeIn>
      </Container>
    </div>
  );
};

export default Images;
