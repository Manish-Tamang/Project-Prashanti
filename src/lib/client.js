import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "rajpt5ej",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true, 
});
