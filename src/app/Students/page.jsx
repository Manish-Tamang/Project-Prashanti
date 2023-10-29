import PageIntro from "@/components/PageIntro";
import React from "react";
import Images from "@/components/images";
import kta from "@/images/Students/bhaktapur.jpg";
import kt from "@/images/Students/bhaktapur1.jpg";
import xakka from "@/images/Students/Mandir.jpg";

const imagesData = [
  { name: "Image 1", logo: kta },
  { name: "Image 2", logo: kt },
  { name: "Image 3", logo: xakka },
  // Add more image objects as needed
];
const Students = () => {
  return (
    <>
      <PageIntro eyebrow="Gallery" title="Prashantian Students">
        <p>
          students are the future leaders, innovators, and problem solvers of
          society. Their education, well-being, and personal growth should be
          priorities, and they should be supported in their journey to becoming
          well-rounded, informed, and responsible individuals.
        </p>
      </PageIntro>
      <div className="image-container">
        {imagesData.map((image, index) => (
          <Images
            key={index}
            className="mt-1 sm:mt-3 lg:mt-6" // Adjust the margin values
            client={image}
          ></Images>
        ))}
      </div>
    </>
  );
};

export default Students;
