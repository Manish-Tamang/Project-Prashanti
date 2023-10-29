import PageIntro from "@/components/PageIntro";
import React from "react";
import photo from "@/components/images";
import Images from "@/components/images";
import sudiis from "@/images/Teachers/teachers.jpg";
import rato from "@/images/Teachers/teej.jpg";
import fivepussy from "@/images/Teachers/sudii.jpg";
// import sudiis from "@/images/Teachers/teachers.jpg";

const imagesData = [
  { name: "Image 1", logo: sudiis },
  { name: "Image 2", logo: rato },
  { name: "Image 3", logo: fivepussy },
  // Add more image objects as needed
];
const Teachers = () => {
  return (
    <>
      <PageIntro eyebrow="Gallery" title="Prashantian Teachers">
        <p>
          "Teachers are the guiding stars of our educational journey,
          illuminating the path to knowledge, inspiring us to reach for the
          stars, and nurturing the seeds of curiosity that blossom into lifelong
          learning."
        </p>
      </PageIntro>
      <div className="image-container">
        {imagesData.map((image, index) => (
          <Images
            key={index}
            className="mt-16 sm:mt-20 lg:mt-24" // Adjust the margin values
            client={image}
          ></Images>
        ))}
      </div>
    </>
  );
};

export default Teachers;
