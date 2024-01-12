import { Form, Input } from "antd";
import {useSelector} from "react-redux";
import React from "react";

function AdminIntro() {
  const {portfolioData} = useSelector((state) => state.root);
  

    const onFinish = (values) => {
        console.log(values);
    }
  return (
    <div>
      <Form onFinish={onFinish} layout="vertical" initialValues={portfolioData.intro}>
        <Form.Item name="welcomeText" label='Welcome Text'>
          <input placeholder="Intro" />
        </Form.Item>
        <Form.Item name="firstName" label='First Name'>
          <input placeholder="First Name" />
        </Form.Item>
        <Form.Item name="caption" label='Caption'>
          <input placeholder="Caption" />
        </Form.Item>
        <Form.Item name="description" label='Description'>
          <textarea placeholder="Description" />
        </Form.Item>
        <div className="flex justify-end w-full">
            <button className="border border-secondary bg-primary text-secondary px-10 py-3 rounded" type="submit">Save</button>
        </div>
      </Form>
    </div>
  );
}

export default AdminIntro;
