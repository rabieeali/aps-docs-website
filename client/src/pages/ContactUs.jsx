import Layout from "../layout/Layout";

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
          <i className="fa fa-linkedin text-6xl"></i>
        </a>
        <a
          className=""
          href="https://t.me/APSignalsAdmin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-telegram text-6xl"></i>
        </a>
        <a
          className=""
          href="https://www.instagram.com/apsignal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-instagram text-6xl"></i>
        </a>
      </div>
    </div>
    </Layout>
  );
};

export default ContactUs;
