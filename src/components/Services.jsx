import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imgclass from "../images/Students/classroom.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Empowering Students for Success: Comprehensive Services Offered by Our School" // Muji yo hatta
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Our school is dedicated to empowering students through a comprehensive
          range of services that extend beyond academics. We believe in
          nurturing well-rounded individuals who are equipped with the skills
          and support they need for success in both their educational journey
          and in life beyond the school walls.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imgclass}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Education Programs">
              We offer a variety of educational programs for students, ranging
              from pre-school to high school. Our curriculum is designed to
              provide a well-rounded education and to meet the diverse needs of
              our students.
            </ListItem>
            <ListItem title="Qualified Teachers">
              Our school employs highly qualified and experienced teachers who
              are dedicated to providing quality education and fostering a
              positive learning environment.
            </ListItem>
            <ListItem title="Extracurricular Activities">
              : We offer a wide range of extracurricular activities, including
              sports, clubs, and arts programs, to encourage students to explore
              their interests and develop important life skills beyond
              academics.
            </ListItem>
            <ListItem title="Counseling Services:">
              We have counseling services available to support the social and
              emotional well-being of our students. Our counselors provide
              guidance, support, and resources to address students' personal and
              academic challenges.
            </ListItem>
            <ListItem title="Library and Learning Resources">
              Our school maintains a well-equipped library and provides access
              to digital resources, helping students with research, studying,
              and reading.
            </ListItem>
            <ListItem title="Technology Integration">
              We incorporate technology into our teaching methods and offer
              computer labs to enhance students' digital literacy and skills.
            </ListItem>
            <ListItem title="Transportation">
              Our school may provide transportation services to ensure students'
              safe and reliable commute to and from school.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
