import React from "react";
import Section from "./Section";
import Images from "./Images";
import { TagList, TagListItem } from "./TagList";
import Manish from "@/images/Dev/untitled.png";

const Dev = () => {
  return (
    <>
      <Images
        className="mt-34 sm:mt-32 lg:mt-40"
        client={{ name: "Image", logo: Manish }}
        style={{ borderRadius: "4px" }}
      />
      <div className="mt-8"></div> {/* Add some space after the image */}
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          I'm <strong>Manish Tamang</strong>, a 16-year-old from Kathmandu,
          Nepal, with a fervent passion for web development. My journey in the
          world of coding began at a young age, and I've immersed myself in
          creating captivating websites using React, Next.js, and Tailwind CSS.
          My ambition is to evolve into a full-stack developer, adept at both
          front-end and back-end development, enabling me to craft powerful and
          versatile web applications. With every project, I'm honing my skills
          and knowledge, eager to embrace the dynamic landscape of technology
          and make a meaningful impact.
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">
            This website
          </strong>{" "}
          has been entirely created from scratch, with my sincere appreciation
          for the guidance and assistance I received from various online
          tutorials, the invaluable support from ChatGPT, and the endless help
          from the Stack Overflow community. I'd also like to extend my
          heartfelt thanks to <strong>Mr. Millan Sunwar</strong>, our computer teacher, whose
          sponsorship of the web hosting and domain made this project possible.
          His encouragement was the driving force behind completing this project
          within a tight timeframe. Once again, thank you, Millan Sir, and to
          all those who have consistently believed in and supported me.
        </p>
      </div>
    </>
  );
};

export default Dev;
