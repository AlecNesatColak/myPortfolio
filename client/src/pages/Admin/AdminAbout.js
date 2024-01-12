import { Form, Input } from "antd";
import React from "react";

function AdminAbout() {

    const onFinish = (values) => {
        console.log(values);
    }
  return (
    <div>
      <Form onFinish={onFinish}>
        <Form.Item name="welcomeText">
          <input placeholder="Intro" />
        </Form.Item>
        <Form.Item name="lastName">
          <input placeholder="First Name" />
        </Form.Item>
        <Form.Item name="caption">
          <input placeholder="Caption" />
        </Form.Item>
        <Form.Item name="description">
          <textarea placeholder="Description" />
        </Form.Item>
        <div className="flex justify-end w-full">
            <button className="border border-secondary bg-primary text-secondary px-10 py-3 rounded">Save</button>
        </div>
      </Form>
    </div>
  );
}

export default AdminAbout;
