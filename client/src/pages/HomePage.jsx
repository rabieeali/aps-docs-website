import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
const HomePage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <div className="mt-24">
          <h1 className="text-6xl text-red-600 ">APSignals</h1>
          <p className="text-2xl  p-5 capitalize">
            - APSignals is a 9-month all-encompassing web development program
            aiming to up-skill students to become highly skilled full-stack
            developers and also providing work experience in the advance course.
            Technical skills learnt in general course: HTML, CSS, JavaScript,
            React, Node.js, Express.js and MongoDB.
          </p>
        </div>
        <button className="btn btn-accent my-24 m-auto block w-64">
          <Link to="/upload-docs">UPLOAD DOCS</Link>
        </button>
      </div>
    </Layout>
  );
};

export default HomePage;
