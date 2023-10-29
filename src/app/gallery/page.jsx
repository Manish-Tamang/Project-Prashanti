import ContactSection from "@/components/ContactSection";
import First from "@/components/first";
import Second from "@/components/Second";
import Third from "@/components/third";
import PageIntro from "@/components/PageIntro";
import Values from "@/components/Values";
import React from "react";


const ProcessPage = () => {
  return (
    <>
      <PageIntro eyebrow="Gallery" title="प्रशान्ति एकेडेमी">
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our Clients. The primary way we do that is by re-using
          the same methods of teaching, we’ve been developing for the past decade.
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {/* First gallery photo where Principal Talu will shine */}
        <First />
        {/* Second gallery where teachers images are shown */}
        <Second />
        {/* Deliver */}
        <Third />
       
      </div>
      {/* Values */}
      <Values />
      <ContactSection />
    </>
  );
};

export default ProcessPage;
