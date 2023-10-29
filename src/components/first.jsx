import React from "react";
import Section from "./Section";
import talu from "@/images/Teachers/samir.jpg";
import { TagList, TagListItem } from "./TagList";

const First = () => {
  return (
    <Section title="समिर बास्तोला" image={{ src: talu, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          <strong>Samir Bastola</strong>, born on 14th March in Jhapa, Nepal,
          has been serving as the Principal of <strong>Prashanti Academy</strong> since 2063 B.S.
          He also holds various positions, including District Committee Joint
          Secretary at Npabson Kathmandu, Vice-Chairman at निजी तथा आवासीय
          विध्यालय संगठन काठमाडौं प्याब्सक, and Executive Chairperson at the
          International Nature Loving Association (INLA Ohio). He was also a
          former Committee Member at बू.न.पा -शिक्षा शाखा Budhanilkantha
          Municipality-Education section and hails from Jhapa, Nepal.
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">
            Mr. Bastola 
          </strong>{" "}
          completed his masters from Kathmandu University and currently living in Kathmandu, Nepal.
        </p>
      </div>
      {/* <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        EDUCATIONAL QUALIFICATIONS
      </h3>
      <TagList className="mt-4">
        <TagListItem>M.sc. physics</TagListItem>
        <TagListItem>B. Sc from Savitribai Phule Pune University </TagListItem>
        <TagListItem>Blood samples</TagListItem>
        <TagListItem>Employee surveys</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>Forensic audit</TagListItem>
      </TagList> */}
    </Section>
  );
};

export default First;
