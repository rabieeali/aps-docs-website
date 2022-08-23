import Layout from "../layout/Layout";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
const ContactUs = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <div className="flex justify-center  space-x-10">
          <a
            className=""
            href="https://www.linkedin.com/company/apsignals/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin className="text-6xl" />
          </a>
          <a
            className=""
            href="https://t.me/APSignalsAdmin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTelegram className="text-6xl" />
          </a>
          <a
            className=""
            href="https://www.instagram.com/apsignal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram className="text-6xl" />
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
