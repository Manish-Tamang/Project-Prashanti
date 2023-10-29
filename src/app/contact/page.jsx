import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";

const ContactPage = () => {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Prashanti Academy">
        <p>Feel free to adapt the wording to your specific needs.</p>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <div style={{ borderRadius: "6px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.567302752287!2d85.35625827629723!3d27.730643076169326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1be0a4630b31%3A0x9d8468f7b2b81ad3!2sPrashanti%20Academy!5e0!3m2!1sen!2snp!4v1698147681444!5m2!1sen!2snp"
              className="w-full sm:w-350"
              height="450"
              style={{ border: "0", borderRadius: "6px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <ContactDetails />
          {/* <ContactForm /> */}
        </div>
      </Container>
    </>
  );
};

export default ContactPage;
