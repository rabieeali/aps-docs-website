const FileUpload = ({ formik, name }) => {
  return (
    <>
      <label className="flex justify-center my-2">
        <span className="sr-only">Choose File</span>
        <input
          {...formik.getFieldProps(name)}
          name={name}
          type="file"
          className="flex w-full max-w-xs text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-500 hover:file:bg-blue-100"
        />
      </label>
      {formik.errors[name] && formik.touched[name] && (
          <span className="text-capitalize text-red-700">
            {formik.errors[name]}
          </span>
        )}
    </>
  );
};

export default FileUpload;
