import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          We strive to stay at the forefront of emerging trends and
          technologies, while completely ignoring them and forking that old
          Rails project we feel comfortable using. We stand by our core values
          to justify that decision.
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Understand the Context">
            Recognize that the need for reliability and innovation can vary based on your industry,
            market, and specific business goals. Certain industries, like healthcare and aviation,
            require a high degree of reliability to ensure safety,
            while technology and consumer goods often thrive on innovation.
          </GridListItem>
          <GridListItem title="Establish Clear Objectives">
            Define your organization's objectives and priorities. Determine where you need reliability and
            where innovation is more critical.
            Consider your short-term and long-term goals to strike the right balance.
          </GridListItem>
          <GridListItem title="Dedicated Teams">
            Create dedicated teams or units within your organization that are responsible for innovation.
            These teams can operate with more flexibility
            and experiment with new ideas without jeopardizing the reliability of core operations.
          </GridListItem>
          <GridListItem title="Flexibility and Adaptability">
            Cultivate a culture that values adaptability and the ability to pivot when necessary.
            Being flexible allows your organization to adjust its approach to reliability and
            innovation as circumstances change.
          </GridListItem>
          <GridListItem title="Continuous Evaluation">
            Regularly assess the effectiveness of your strategies for balancing reliability and innovation.
            Be prepared to make adjustments as needed to achieve the desired equilibrium.
          </GridListItem>
          <GridListItem title="Innovative">
            The technological landscape is always evolving and so are we. We are
            constantly on the lookout for new open source projects to clone.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
