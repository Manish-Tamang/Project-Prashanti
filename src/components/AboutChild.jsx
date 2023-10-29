import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const AboutChild = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our Motto"
        title="Quality Education, Our Commitment"
        invert
      >
        <p>
          "Quality Education, Our Commitment" is not just a slogan but a guiding
          principle that underscores the school's dedication to providing the
          best possible education and preparing students for a successful
          future.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Student-Centered Approach" invert>
            A student-centered approach means placing the needs and interests of
            the students at the forefront. It involves understanding the
            individual strengths, weaknesses, and learning styles of each
            student. Administrators are committed to creating an environment
            where students feel valued and supported.
          </GridListItem>
          <GridListItem title=" High Academic Standards" invert>
            To fulfill the commitment to quality education, schools set and
            maintain rigorous academic standards and curriculum. This includes
            clear learning objectives, challenging coursework, and high
            expectations for academic performance.
          </GridListItem>
          <GridListItem title="Qualified Faculty" invert>
            Schools with this commitment hire and retain well-qualified,
            dedicated, and experienced educators. Administrators emphasize the
            importance of teachers having the necessary qualifications and
            certifications to deliver effective instruction.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default AboutChild;
