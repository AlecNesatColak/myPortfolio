import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";

function Experiences() {
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    console.log(values);
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-experiences", {
        ...values,
        _id: portfolioData.experiences._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-5">
        {experiences.map((experience) => (
          <div className="shadow border p-5 border-gray-400 flex flex-col gap-5">
            <h1 className="text-xl font-semibold text-primary">
              {experience.period}
            </h1>
            <hr />
            <h1 className="text-lg font-semibold">
              Company: {experience.company}
            </h1>
            <h1 className="text-lg font-semibold">Role: {experience.title}</h1>
            <h1 className="text-lg font-semibold">
              Description: {experience.description}
            </h1>
            <div className="flex justify-end gap-5 mt-5">
              <button className="bg-red-600 text-white px-5 py-2">
                Delete
              </button>
              <button className="bg-primary text-white px-5 py-2">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiences;
