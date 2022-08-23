import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LogsCard from "../components/LogsCard";
import { asyncGetDocument } from "../features/generalSlice";
import Layout from "../layout/Layout";

const History = () => {
  const { loading, error } = useSelector((state) => state.general.docs);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(asyncGetDocument());
  }, []);

  if (loading)
    return <p className="text-3xl text-center text-white">loading ...</p>;
  if (error)
    return <p className="text-3xl text-center text-red-500">{error}</p>;

  return (
    <Layout>
      <div className="container mx-auto px-4">
        <LogsCard />
      </div>
    </Layout>
  );
};

export default History;
