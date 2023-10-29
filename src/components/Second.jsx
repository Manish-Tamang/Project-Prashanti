// Second.jsx
import React from "react";
import Section from "./Section";
import Teachers from "@/images/Teachers/teachers.jpg";
import Blockquote from "./Blockquote";
const Second = () => {
  return (
    <Section title="Teachers" image={{ src: Teachers, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Teachers Gallery Collections
        </p>
        <p>
          <a href="/teachers">
            <strong>Click to view</strong>
          </a>
        </p>
      </div>
      <Blockquote
        author={{ name: "Prashantian", role: "Vision" }}
        className="mt-12"
      >
        Teachers light the path to knowledge, illuminating minds and shaping the future.
      </Blockquote>
    </Section>
  );
};

export default Second;
