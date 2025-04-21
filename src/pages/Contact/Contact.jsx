import React from "react";
import ContactCover from "./ContactCover";
import { Helmet } from "react-helmet-async";
import contactImg from "../../../public/contact.jpg";
import SectionTitle from "../../components/SectionTittle";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";
import ContactForm from "./ContactFrom";
const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>carBazar | Contact</title>
      </Helmet>
      <ContactCover img={contactImg}></ContactCover>
      <div className="mt-10">
        <SectionTitle
          heading="Contact Us"
          subHeading="Car Service Location"
        ></SectionTitle>
      </div>
      <ContactList></ContactList>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Contact;
