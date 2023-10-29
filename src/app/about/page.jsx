import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import AboutChild from "@/components/AboutChild";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";
import Building from "@/images/building1.png";
import salute from "@/images/building.jpg";
import Testimonials from "@/components/Testimonials";
import Abouty from "@/components/Image";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About us" title="Prashanti Academy">
        <p>
          Prashanti Academy, which was originally established in 2061 B.S and
          later renamed Prashanti Shikshya Sadan, is led by Principal Samir
          Bastola. The school's motto, "Quality Education, Our Commitment,"
          resonates throughout its classes from playgroup to Grade 10.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            and its dedication to excellence has earned it numerous awards in
            the field of education. Prashanti Shikshya Sadan is located in the
            vibrant city of Kathmandu, specifically in the Kapan area at Tenjing
            Chwok, Nepal.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="400+" label="Students" />
          <StatListItem value="50+" label="Staffs" />
          <StatListItem value="1000+" label="Satisfied Parents" />
        </StatList>
      </Container>
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Image", logo: salute }}
        style={{ borderRadius: "4px" }}
      >
        Quality Education, Our Commitment
      </Testimonials>
      <Abouty
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Image", logo: Building }}
      ></Abouty>
      <AboutChild />
      <ContactSection />
    </>
  );
};

export default AboutPage;
