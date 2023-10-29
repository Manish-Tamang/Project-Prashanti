import ContactDetails from "@/components/ContactDetails";
import AdmissionForm from "@/components/AdmissionForm";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";

const ContactPage = () => {
  return (
    <>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <PageIntro eyebrow="Admission Form" title="Prashanti Academy">
            <p>
              We accept all the request but only the legit one will be valid and
              can get the Admission
            </p>
          </PageIntro>

          <AdmissionForm />
        </div>
      </Container>
    </>
  );
};

export default ContactPage;
