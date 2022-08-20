import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import Button from "../common/Button";
import DatePicker from "../common/DatePicker";
import FileUpload from "../common/FileUpload";
import Input from "../common/Input";
import TextArea from "../common/TextArea";
import { asyncAddDocument } from "../features/generalSlice";

const initialValues = {
  title: "",
  date: "",
  description: "",
  file: "",
};

const today = new Date();

const validationSchema = Yup.object({
  title: Yup.string()
    .min(5, "Must Be 5 Charachters Or More")
    .required("Title is required"),
  date: Yup.date().max(today).required("Date is required"),
  description: Yup.string()
    .min(10, "Must Be 10 Charachters Or More")
    .required("Description is required"),
  file: Yup.mixed().required("File is required"),
});

const UploadDocsForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values, { resetForm }) => {
    const { title, description, date, file } = values;
    dispatch(asyncAddDocument({ title, description, date, file }));
    resetForm({ values: "" });
    // console.log(values);
  };
  const formik = useFormik({ initialValues, onSubmit, validationSchema });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center mx-auto md:w-1/4 bg-neutral p-3 my-20 rounded-3xl"
      >
        <h1 className="text-purple-700 text-2xl font-bold pl-4">
          Docs Information
        </h1>
        <Input formik={formik} name="title" />
        <DatePicker formik={formik} name="date" />
        <TextArea formik={formik} name="description" />
        <FileUpload formik={formik} name="file" />
        <Button formik={formik} />
      </form>
    </>
  );
};

export default UploadDocsForm;
