import "./contact.css";

import { Form, Input, Button, Checkbox } from "antd";
const { TextArea } = Input;

function Contact() {
  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid mt-8 p-8">
        <div className="titleHolder">
          <h2>Get in Touch</h2>
          <p>Dolore nam rerum obcaecati fugit odio nobis Molestiae rerum</p>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="fullname"
            rules={[
              {
                required: true,
                message: "Please enter your full name!",
              },
            ]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input placeholder="Email Address" />
          </Form.Item>

          <Form.Item name="telephone">
            <Input placeholder="Telephone" />
          </Form.Item>

          <Form.Item name="subject">
            <Input placeholder="Subject" />
          </Form.Item>

          <Form.Item name="message">
            <TextArea placeholder="Message" />
          </Form.Item>

          <Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              noStyle
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject("Should accept agreement"),
                },
              ]}
            >
              <Checkbox>I agree with terms and conditions.</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button text-slate-500 border border-slate-300"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
