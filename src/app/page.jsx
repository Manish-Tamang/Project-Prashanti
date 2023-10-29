"use client"
import React, { useState, useEffect } from "react";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Manish from "@/images/namaste.jpg";
import { client } from "../lib/client";
import { data } from "autoprefixer";

export default function Home() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    client.fetch(
      `*[_type == "home"]{
        title,
        description,
        testimonials
      }`
    )
      .then((data) => {
        setStories(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);

  // Make sure to check if `stories` array is not empty before accessing its elements
  const title = stories[0]?.title || "";
  const description = stories[0]?.description || "";
  const testimonial = stories[0]?.testimonials || {};


  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            {title}
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            {description}
          </p>
        </FadeIn>
      </Container>
      <Testimonials
      className="mt-24 sm:mt-32 lg:mt-40"
      client={{
        name: "Image",
        logo: testimonial.banner // Use the Manish image as a fallback
      }}
      style={{ borderRadius: "4px" }}
    >
        {testimonial.testimonialText}
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
  );
}

// import ContactSection from "@/components/ContactSection";
// import Container from "@/components/Container";
// import FadeIn from "@/components/FadeIn";
// import Services from "@/components/Services";
// import Testimonials from "@/components/Testimonials";
// import Manish from "@/images/namaste.jpg";

// export default function Home() {
//   return (
//     <main className="text-black">
//       <Container className="mt-24 sm:mt-32">
//         <FadeIn className="max-w-3xl">
//           <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
//             प्रशान्ति एकेडेमी
//           </h1>
//           <p className="mt-6 text-xl text-neutral-600">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//             consectetur tempor turpis a rhoncus. Nullam sit amet justo vel felis
//             rutrum pretium. Phasellus ultricies ligula non lorem sodales,
//             laoreet fermentum nisl efficitur. Mauris luctus sapien non nulla
//             fermentum eleifend. Phasellus nunc urna, ornare eu eros quis,
//             imperdiet accumsan felis.
//           </p>
//         </FadeIn>
//       </Container>
//       <Testimonials
//         className="mt-24 sm:mt-32 lg:mt-40"
//         client={{ name: "Image", logo: Manish }}
//         style={{ borderRadius: "4px" }}
//       >
//         Welcome to Prashanti Academy, where we embrace a culture of learning,
//         growth, and excellence. We're excited to embark on this educational
//         journey together.
//       </Testimonials>
//       <Services />
//       <ContactSection />
//     </main>
//   );
// }

