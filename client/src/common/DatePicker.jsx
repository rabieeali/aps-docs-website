const DatePicker = ({ name, formik }) => {
  return (
    <div className="form-control w-full max-w-xs m-auto my-2">
      <label className="label">
        <span className="label-text text-white font-bold">Date</span>
      </label>
      <input
        {...formik.getFieldProps(name)}
        name={name}
        type="date"
        placeholder="Type here"
        className="input input-bordered bg-white w-full text-slate-600 max-w-xs"
      />
           {formik.errors[name] && formik.touched[name] && (
          <span className="text-capitalize text-red-700">
            {formik.errors[name]}
          </span>
        )}
    </div>
  );
};

export default DatePicker;
