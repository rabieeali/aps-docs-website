import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
const HomePage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <div className="mt-24 space-y-10">
          <h1 className="md:text-6xl text-4xl md:font-extrabold md:text-left font-bold text-center text-orange-500 ">
            APSignals
          </h1>
          <p className="md:text-3xl  md:p-5 capitalize">
            - APSignals is a 9-month all-encompassing web development program
            aiming to up-skill students to become highly skilled full-stack
            developers and also providing work experience in the advance course.
            Technical skills learnt in general course: HTML, CSS, JavaScript,
            React, Node.js, Express.js and MongoDB.
          </p>
        </div>
        <Link to="/upload-docs">
          <button className="btn btn-primary my-24 m-auto block w-64">
            UPLOAD DOCS
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default HomePage;
