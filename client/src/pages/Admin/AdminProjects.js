import { Form, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading, ReloadData } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";
import React from "react";

function Projects() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = React.useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
  const [type = "add", setType] = React.useState("add");

  const onFinish = async (values) => {
    try {
      const tempTechnologies = values.technologies?.split(",") || [];
      values.technologies = tempTechnologies;
      dispatch(ShowLoading());
      let response;
      if (selectedItemForEdit) {
        response = await axios.post("/api/portfolio/update-project", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post("/api/portfolio/add-project", values);
      }
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModal(false);
        setSelectedItemForEdit(null);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const onDelete = async (item) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/delete-project", {
        _id: item._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
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
      <div className="flex justify-end">
        <button
          className="bg-primary text-white px-5 py-2 rounded"
          onClick={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModal(true);
          }}
        >
          Add Project
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {projects.map((project) => (
          <div className="shadow border p-5 border-gray-400 flex flex-col gap-5">
            <h1 className="text-xl font-semibold text-primary">
              {project.title}
            </h1>
            <hr />
            <h1 className="text-lg font-semibold">
              Technologies: {project.technologies}
            </h1>
            <h1 className="text-lg font-semibold">
              Description: {project.description}
            </h1>
            <div className="flex justify-end gap-5 mt-5">
              <button
                className="bg-red-600 text-white px-5 py-2"
                onClick={() => onDelete(project)}
              >
                Delete
              </button>
              <button
                className="bg-primary text-white px-5 py-2"
                onClick={() => {
                  setSelectedItemForEdit(project);
                  setShowAddEditModal(true);
                  setType("edit");
                }}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {(type === "add" || selectedItemForEdit) && (
        <Modal
          open={showAddEditModal}
          title={selectedItemForEdit ? "Edit Project" : "Add Project"}
          footer={null}
          onCancel={() => {
            setShowAddEditModal(false);
            setSelectedItemForEdit(null);
          }}
        >
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={
              {
                ...selectedItemForEdit,
                technologies: selectedItemForEdit?.technologies.join(","),
              } || {}
            }
          >
            <Form.Item name="title" label="Title">
              <input placeholder="Title" />
            </Form.Item>
            <Form.Item name="technologies" label="Technologies">
              <input placeholder="Technologies" />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <textarea placeholder="Description" />
            </Form.Item>

            <div className="flex justify-end w-full">
              <button
                className="border border-gray-500 text-secondary px-10 py-3 rounded ml-5"
                onClick={() => setShowAddEditModal(false)}
              >
                Cancel
              </button>
              <button
                className=" bg-secondary text-primary px-10 py-3 rounded ml-5"
                type="submit"
              >
                {selectedItemForEdit ? "Update" : "Add"}
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
}

export default Projects;
