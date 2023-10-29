import React from "react";
import Section from "./Section";
import bug from "../images/Namaste.jpg";
import List, { ListItem } from "./List";

const Third = () => {
  return (
    <Section title="Students" image={{ src: bug, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Students are the heart of any educational institution. They are young,
          eager learners who come from diverse backgrounds, bringing with them
          unique perspectives and potential. </p>
        <p>
        <a href="/Students" ><strong>Click Here</strong> </a> to enter gallery of students
        </p>
      </div>
      {/* <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List>
        <ListItem title="Testing">
          Our projects always have 100% test coverage, which would be impressive
          if our tests weren’t as porous as a sieve.
        </ListItem>
        <ListItem title="Infrastructure">
          To ensure reliability we only use the best Digital Ocean droplets that
          $4 a month can buy.
        </ListItem>
        <ListItem title="Support">
          Because we hold the API keys for every critical service your business
          uses, you can expect a lifetime of support, and invoices, from us.
        </ListItem>
      </List> */}
    </Section>
  );
};

export default Third;
