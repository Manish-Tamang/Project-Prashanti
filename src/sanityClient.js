// sanityClient.js
import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "rajpt5ej",
  dataset: "production",
  useCdn: true, // or false, based on your requirements
});

export default client;
