import PieChart from "../components/PieChart";
import DonutChart from "../components/DonutChart";

import Stats from "../components/Stats";
import Table from "../components/Table";
import Layout from "../layout/Layout";
import Sidebar from '../components/Sidebar'

const Dashboard = () => {

  const today = new Date()


  return (
    <Layout>
      <div className="conatiner p-3 my-10">
        <main className="flex w-full space-x-2 md:space-x-5">

          <aside className="md:w-1/12 w-2/12 bg-base-300 shadow-2xl rounded-2xl h-screen">
            <Sidebar />
          </aside>
          <section className="md:w-11/12 w-10/12 shadow-2xl bg-base-300 p-5 rounded-2xl">
            <div className="container">
              <h1 className="text-4xl font-semibold">Dashboard</h1>
              <h3 className="mt-2">{today.toDateString()}</h3>
              <hr className="my-4 border-gray-700" />
              <div className="flex gap-6">
                <section className="container">
                  <h2 className="text-3xl pb-5 text-cyan-400">Stats</h2>
                  <div className="flex flex-wrap gap-3 justify-evenly">
                    <Stats bgColor="secondary" />
                    <Stats bgColor="primary" />
                  </div>
                </section>
              </div>
              <hr className="my-10 border-gray-700" />
            </div>
            <div className="container mx-autop-5">
              <h2 className="text-3xl pb-5 text-cyan-400">Members</h2>

              <Table />
            </div>
            <hr className="my-10 border-gray-700" />
            <div className="conatiner">
              <h2 className="text-3xl pb-5 text-cyan-400">Charts</h2>
              <div className="flex flex-col md:flex-row justify-evenly gap-4">
                <PieChart />
                <DonutChart />
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default Dashboard;
