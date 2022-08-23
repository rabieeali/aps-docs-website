import { useSelector } from "react-redux";
import { DUMMY_DATA } from "../mock-data";
 
const LogsCard = () => {
  const logs = useSelector((state) => state.general.docs);
  console.log(logs);
  return (
    <>
      {(DUMMY_DATA || logs).map((log) => (
        <div className="card lg:card-side bg-neutral my-3 shadow-2xl md:w-1/2 m-auto ">
          <div className="card-body  text-white">
            <h2 className="card-title font-bold text-3xl">
              {/* <span className="text-purple-700">Title</span> */}
              {log.title}
            </h2>
            <h2 className="font-bold">
              <span className="text-purple-700">Description</span>{" "}
              {log.description}
            </h2>
            <h2 className="font-bold">
              <span className="text-purple-700">Date</span> {log.date}
            </h2>
            <div className="card-actions justify-end">
              <button className="btn btn-accent">view files</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LogsCard;
